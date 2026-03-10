import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || ''

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

const MODEL_NAMES = [
  'gemini-2.5-flash',        // Modelo mais recente e rápido
  'gemini-flash-latest',      // Versão latest do flash
  'gemini-2.0-flash',         // Versão 2.0 flash
  'gemini-2.0-flash-exp',     // Versão experimental
  'gemini-pro-latest',        // Versão latest do pro (pode ter quota limitada)
  'gemini-2.5-pro',           // Versão pro mais recente
]

let MODEL_NAME = MODEL_NAMES[0]

const validarModelo = (nomeModelo: string): string => {
  if (MODEL_NAMES.includes(nomeModelo)) {
    return nomeModelo
  }
  return MODEL_NAMES[0]
}

interface MensagemChat {
  role: 'user' | 'assistant'
  conteudo: string
}

const CONTEXTO_SISTEMA = `Você é um assistente especializado exclusivamente em estudos bíblicos e curiosidades bíblicas. 

IMPORTANTE: Este aplicativo é usado APENAS para:
- Estudos bíblicos
- Curiosidades sobre a Bíblia
- Perguntas relacionadas a textos, personagens, histórias e ensinamentos bíblicos
- Análises e interpretações de passagens bíblicas

Você deve sempre manter suas respostas focadas exclusivamente em temas bíblicos e estudos bíblicos. Se receber perguntas fora desse contexto, gentilmente redirecione a conversa para temas bíblicos ou explique que este aplicativo é exclusivo para estudos bíblicos.`

const converterMensagensParaHistoria = (mensagens: MensagemChat[]) => {
  const historico: Array<{ role: string; parts: Array<{ text: string }> }> = []
  
  mensagens.forEach((msg) => {
    historico.push({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.conteudo }],
    })
  })
  
  return historico
}

export const listarModelosDisponiveis = async (): Promise<string[]> => {
  if (!API_KEY) {
    console.warn('VITE_GEMINI_API_KEY não definida. Configure em .env')
    return []
  }
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
    )
    const data = await response.json()
    return data.models?.map((m: any) => m.name) || []
  } catch (error) {
    console.error('Erro ao listar modelos:', error)
    return []
  }
}

const tentarModelo = async (
  nomeModelo: string,
  mensagem: string,
  historicoFormatado: any[]
): Promise<string> => {
  if (!genAI || !API_KEY) {
    throw new Error('Chave de API não configurada. Crie um arquivo .env com VITE_GEMINI_API_KEY=sua_chave_api')
  }
  if (nomeModelo === 'gemini-pro' || nomeModelo === 'gemini-1.5-pro' || nomeModelo === 'gemini-1.5-flash') {
    throw new Error(`Modelo ${nomeModelo} não é mais suportado. Use um modelo da lista: ${MODEL_NAMES.join(', ')}`)
  }
  
  if (!MODEL_NAMES.includes(nomeModelo) && !nomeModelo.includes('flash') && !nomeModelo.includes('pro-latest') && !nomeModelo.includes('2.5') && !nomeModelo.includes('2.0')) {
    throw new Error(`Modelo ${nomeModelo} não é válido. Use um modelo da lista: ${MODEL_NAMES.join(', ')}`)
  }
  
  const model = genAI.getGenerativeModel({ 
    model: nomeModelo,
    systemInstruction: CONTEXTO_SISTEMA,
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    },
  })
  
  if (historicoFormatado.length > 0) {
    const chat = model.startChat({
      history: historicoFormatado,
    })
    const result = await chat.sendMessage(mensagem)
    const response = await result.response
    return response.text()
  } else {
    const result = await model.generateContent(mensagem)
    const response = await result.response
    return response.text()
  }
}

export const enviarMensagemGemini = async (
  mensagem: string,
  historico: MensagemChat[] = []
): Promise<string> => {
  const historicoFormatado = converterMensagensParaHistoria(historico)

  MODEL_NAME = MODEL_NAMES[0]
  
  try {
    const modeloDisponivel = await descobrirModeloDisponivel()
    if (modeloDisponivel && 
        MODEL_NAMES.includes(modeloDisponivel) && 
        modeloDisponivel !== 'gemini-pro' && 
        modeloDisponivel !== 'gemini-1.5-pro' && 
        modeloDisponivel !== 'gemini-1.5-flash') {
      MODEL_NAME = validarModelo(modeloDisponivel)
    }
  } catch (error) {

  }

  let ultimoErro: any = null
  let erroQuota: any = null // Guardar erro de quota separadamente
  
  const modelosValidos = MODEL_NAMES.filter(nome => 
    nome !== 'gemini-pro' && 
    nome !== 'gemini-1.5-pro' && 
    nome !== 'gemini-1.5-flash'
  )
  
  const modelosParaTentar = MODEL_NAME && 
                             MODEL_NAME !== MODEL_NAMES[0] && 
                             modelosValidos.includes(MODEL_NAME)
    ? [MODEL_NAME, ...modelosValidos] 
    : modelosValidos
  
  const modelosFiltrados = modelosParaTentar.filter(nome => 
    !nome.includes('gemini-pro') || nome.includes('pro-latest') || nome.includes('2.5') || nome.includes('2.0')
  )
  
  for (const nomeModelo of modelosFiltrados) {
    if (nomeModelo === 'gemini-pro' || nomeModelo === 'gemini-1.5-pro' || nomeModelo === 'gemini-1.5-flash') {
      continue
    }
    
    try {
      const texto = await tentarModelo(nomeModelo, mensagem, historicoFormatado)
      if (MODEL_NAME !== nomeModelo) {
        MODEL_NAME = nomeModelo
      }
      
      return texto
    } catch (error: any) {
      const statusCode = error?.status || error?.response?.status || 0
      const mensagemErro = error?.message || ''
      
      if (statusCode === 429 || mensagemErro.includes('429') || mensagemErro.includes('quota')) {
        erroQuota = error
        continue
      }
      
      if (statusCode === 404 || mensagemErro.includes('404') || mensagemErro.includes('not found')) {
        ultimoErro = error
        continue
      }
      
      ultimoErro = error
      continue
    }
  }
  
  if (erroQuota && !ultimoErro) {
    ultimoErro = erroQuota
  }

  if (!ultimoErro || ultimoErro === erroQuota) {
    const modeloDisponivel = await descobrirModeloDisponivel()
    if (modeloDisponivel && !modelosParaTentar.includes(modeloDisponivel)) {
      try {
        const texto = await tentarModelo(modeloDisponivel, mensagem, historicoFormatado)
        MODEL_NAME = modeloDisponivel
        return texto
      } catch (error: any) {
      }
    }
  }
  
  let mensagemErro = 'Erro ao processar sua mensagem. Nenhum modelo disponível funcionou.'
  
  const erroFinal = ultimoErro || erroQuota
  if (erroFinal?.message) {
    if (erroFinal.message.includes('quota') || erroFinal.message.includes('429')) {
      mensagemErro = 'Quota da API excedida. Por favor, aguarde alguns minutos ou verifique seu plano de uso no Google AI Studio.'
    } else {
      mensagemErro = `Erro: ${erroFinal.message}. Tente verificar sua chave de API ou os modelos disponíveis.`
    }
  }
  
  throw new Error(mensagemErro)
}

export const enviarMensagemSimples = async (
  mensagem: string
): Promise<string> => {
  return enviarMensagemGemini(mensagem, [])
}

export const descobrirModeloDisponivel = async (): Promise<string | null> => {
  try {
    const modelos = await listarModelosDisponiveis()
    
    for (const nomeModelo of MODEL_NAMES) {
      const modeloEncontrado = modelos.find((m: string) => {
        const nomeSemPrefixo = m.replace(/^models\//, '')
        return nomeSemPrefixo === nomeModelo || m === nomeModelo || m.endsWith(`/${nomeModelo}`)
      })
      
      if (modeloEncontrado) {
        const nomeFinal = modeloEncontrado.includes('/') 
          ? modeloEncontrado.split('/').pop() 
          : modeloEncontrado
        if (nomeFinal && 
            MODEL_NAMES.includes(nomeFinal) && 
            nomeFinal !== 'gemini-pro' && 
            nomeFinal !== 'gemini-1.5-pro' && 
            nomeFinal !== 'gemini-1.5-flash') {
          return nomeFinal
        }
      }
    }
    
    const modelosFlash = modelos.filter((m: string) => 
      m.includes('flash') && !m.includes('embedding') && !m.includes('image') && !m.includes('lite')
    )
    
    if (modelosFlash.length > 0) {
      for (const modeloFlash of modelosFlash) {
        const nomeSemPrefixo = modeloFlash.replace(/^models\//, '')
        if (MODEL_NAMES.includes(nomeSemPrefixo)) {
          return nomeSemPrefixo
        }
      }
      
      const primeiroFlash = modelosFlash[0]
      const nomeFinal = primeiroFlash.includes('/') 
        ? primeiroFlash.split('/').pop() 
        : primeiroFlash
      if (nomeFinal && (nomeFinal.includes('flash') || nomeFinal.includes('pro-latest'))) {
        return nomeFinal
      }
    }
    
    return null
  } catch (error) {
    return null
  }
}

