import { useState, useRef, useEffect } from 'react'
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Avatar,
  IconButton,
} from '@mui/material'
import { Send, Settings, Person } from '@mui/icons-material'
import { enviarMensagemGemini } from '@/services/geminiService'
import { Configuracoes } from '@/components/Configuracoes'
import avatarImage from '@/theme/avatar.png'

interface MensagemAI {
  id: string
  role: 'user' | 'assistant'
  conteudo: string
  timestamp: Date
}

export const AIChat = () => {
  const [mensagens, setMensagens] = useState<MensagemAI[]>([])
  const [mensagemAtual, setMensagemAtual] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [configuracoesAberto, setConfiguracoesAberto] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mensagem de boas-vindas inicial
    if (mensagens.length === 0) {
      setMensagens([
        {
          id: '1',
          role: 'assistant',
          conteudo: 'Olá! Sou a Nathy, sua assistente inteligente para estudos bíblicos. Qual vai ser o tema de devocional de hoje?',
          timestamp: new Date(),
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [mensagens])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEnviar = async () => {
    if (!mensagemAtual.trim() || enviando) return

    const textoMensagem = mensagemAtual.trim()
    const mensagemUsuario: MensagemAI = {
      id: Date.now().toString(),
      role: 'user',
      conteudo: textoMensagem,
      timestamp: new Date(),
    }

    setMensagens((prev) => [...prev, mensagemUsuario])
    setMensagemAtual('')
    setEnviando(true)

    try {
      // Preparar histórico de mensagens (excluindo a mensagem de boas-vindas inicial)
      // Usar o estado atualizado incluindo a nova mensagem do usuário
      const historicoCompleto = [...mensagens, mensagemUsuario]
      const historico = historicoCompleto
        .filter((msg) => msg.id !== '1') // Remove mensagem de boas-vindas
        .map((msg) => ({
          role: msg.role,
          conteudo: msg.conteudo,
        }))

      // Enviar mensagem para o Gemini
      const respostaTexto = await enviarMensagemGemini(
        textoMensagem,
        historico
      )

      const respostaIA: MensagemAI = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        conteudo: respostaTexto,
        timestamp: new Date(),
      }

      setMensagens((prev) => [...prev, respostaIA])
    } catch (error: any) {
      console.error('Erro ao enviar mensagem:', error)
      let mensagemErroTexto = 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.'
      
      // Mensagens de erro mais específicas
      if (error?.message) {
        mensagemErroTexto = `Erro: ${error.message}`
      } else if (error?.error?.message) {
        mensagemErroTexto = `Erro: ${error.error.message}`
      }
      
      const mensagemErro: MensagemAI = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        conteudo: mensagemErroTexto,
        timestamp: new Date(),
      }
      setMensagens((prev) => [...prev, mensagemErro])
    } finally {
      setEnviando(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleEnviar()
    }
  }

  return (
    <Box 
      sx={{ 
        height: { xs: 'calc(var(--vh, 1vh) * 100)', sm: '100vh' },
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        px: 2,
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Cabeçalho Fixo */}
      <Box 
        sx={{ 
          flexShrink: 0,
          py: 2,
          bgcolor: 'background.default',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              src={avatarImage} 
              alt="Nathy"
              sx={{ width: 48, height: 48 }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Nathy, sua Bíblia IA
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sua assistente inteligente para estudos bíblicos
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={() => setConfiguracoesAberto(true)}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'background.elevated',
              },
            }}
            title="Configurações"
          >
            <Settings />
          </IconButton>
        </Box>
      </Box>

      {/* Área de Mensagens com Scroll */}
      <Paper
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            minHeight: 0,
            // Estilização customizada do scrollbar
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: (theme) => 
                `rgba(${theme.palette.mode === 'dark' ? '255, 255, 255' : '0, 0, 0'}, 0.2)`,
              borderRadius: '10px',
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              transition: 'background 0.3s ease, border 0.3s ease',
              '&:hover': {
                background: (theme) => 
                  `rgba(${theme.palette.mode === 'dark' ? '255, 255, 255' : '0, 0, 0'}, 0.35)`,
                backgroundClip: 'padding-box',
              },
              '&:active': {
                background: (theme) => theme.palette.primary.main,
                backgroundClip: 'padding-box',
              },
            },
            // Para Firefox
            scrollbarWidth: 'thin',
            scrollbarColor: (theme) => 
              `rgba(${theme.palette.mode === 'dark' ? '255, 255, 255' : '0, 0, 0'}, 0.2) transparent`,
            '&:hover': {
              scrollbarColor: (theme) => 
                `rgba(${theme.palette.mode === 'dark' ? '255, 255, 255' : '0, 0, 0'}, 0.35) transparent`,
            },
          }}
        >
          {mensagens.map((mensagem) => (
            <Box
              key={mensagem.id}
              sx={{
                display: 'flex',
                justifyContent: mensagem.role === 'user' ? 'flex-end' : 'flex-start',
                gap: 1,
              }}
            >
              {mensagem.role === 'assistant' && (
                <Avatar 
                  src={avatarImage} 
                  alt="Nathy"
                  sx={{ width: 32, height: 32 }}
                />
              )}
              <Box
                sx={{
                  maxWidth: '70%',
                  bgcolor:
                    mensagem.role === 'user'
                      ? 'primary.main'
                      : 'background.elevated',
                  color:
                    mensagem.role === 'user'
                      ? 'primary.contrastText'
                      : 'text.primary',
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {mensagem.conteudo}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    mt: 1,
                    opacity: 0.7,
                  }}
                >
                  {mensagem.timestamp.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Typography>
              </Box>
              {mensagem.role === 'user' && (
                <Avatar 
                  alt="Usuário"
                  sx={{ 
                    width: 32, 
                    height: 32,
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                  }}
                >
                  <Person sx={{ fontSize: 20 }} />
                </Avatar>
              )}
            </Box>
          ))}
          {enviando && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
              }}
            >
              <Avatar 
                src={avatarImage} 
                alt="Nathy"
                sx={{ width: 32, height: 32 }}
              />
              <Box
                sx={{
                  bgcolor: 'background.elevated',
                  p: 2,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CircularProgress size={16} />
                <Typography variant="body2" color="text.secondary">
                  Pensando...
                </Typography>
              </Box>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>
      </Paper>

      {/* Rodapé Fixo */}
      <Box
        sx={{
          flexShrink: 0,
          py: 2,
          bgcolor: 'background.default',
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'flex-end',
          }}
        >
          <TextField
            fullWidth
            multiline
            maxRows={4}
            placeholder="Digite sua mensagem..."
            value={mensagemAtual}
            onChange={(e) => setMensagemAtual(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={enviando}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.elevated',
              },
            }}
          />
          <Button
            variant="contained"
            startIcon={<Send />}
            onClick={handleEnviar}
            disabled={!mensagemAtual.trim() || enviando}
            sx={{ minWidth: 120, height: 56 }}
          >
            {enviando ? 'Enviando...' : 'Enviar'}
          </Button>
        </Box>
      </Box>

      <Configuracoes
        open={configuracoesAberto}
        onClose={() => setConfiguracoesAberto(false)}
      />
    </Box>
  )
}

