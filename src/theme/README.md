# Sistema de Cores Centralizado

Este diretório contém a configuração centralizada de cores do sistema, facilitando a manutenção e alteração das cores em todo o aplicativo.

## Arquivos

- **`colors.ts`**: Define todas as cores do sistema em um objeto centralizado
- **`theme.ts`**: Configura o tema do Material-UI baseado nas cores definidas

## Como Usar

### Importar as cores

```typescript
import { colors } from '@/theme/colors'
```

### Usar em componentes

```typescript
<Box sx={{ bgcolor: colors.background.default, color: colors.text.primary }}>
  Conteúdo
</Box>
```

### Usar o tema do Material-UI

O tema já está configurado no `App.tsx` e aplicado automaticamente a todos os componentes do Material-UI.

## Estrutura de Cores

### Cores Principais
- `primary`: Verde-limão (#00FF88) - cor principal de destaque
- `secondary`: Azul ciano (#00D9FF) - cor secundária

### Backgrounds
- `default`: Preto (#000000) - background principal
- `paper`: Cinza escuro (#1A1A1A) - cards e superfícies
- `elevated`: Cinza médio (#262626) - elementos elevados

### Textos
- `primary`: Branco (#FFFFFF) - texto principal
- `secondary`: Cinza claro (#B3B3B3) - texto secundário
- `disabled`: Cinza médio (#666666) - texto desabilitado

### Inputs
- `background`: #262626
- `border`: rgba(255, 255, 255, 0.2)
- `focus`: #00FF88 (verde-limão)

### Botões
- `primary`: Fundo verde-limão, texto preto
- `secondary`: Transparente com borda verde-limão
- `social`: Fundo cinza escuro para botões sociais

## Alterando as Cores

Para alterar as cores do sistema, edite o arquivo `colors.ts`. Todas as alterações serão refletidas automaticamente em todo o aplicativo.

### Exemplo: Alterar cor principal

```typescript
// colors.ts
export const colors = {
  primary: {
    main: '#NOVA_COR_AQUI', // Altere aqui
    // ...
  },
  // ...
}
```

## Cores Baseadas no Design

As cores foram definidas com base no design dark mode com acentos em verde-limão, seguindo o padrão moderno de interfaces mobile.

