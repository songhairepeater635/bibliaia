/**
 * Configuração centralizada de cores do sistema
 * Paleta de cores vibrante e moderna
 */

export const colors = {
  // Cores principais
  primary: {
    main: '#ee9b57', // Laranja - cor principal de destaque
    light: '#b9f8f0', // Azul claro/água
    dark: '#b6d3a5', // Verde claro
    contrastText: '#11130e', // Preto/verde escuro para contraste
  },
  
  // Cores secundárias
  secondary: {
    main: '#b6d3a5', // Verde claro para elementos secundários
    light: '#b9f8f0', // Azul claro/água
    dark: '#ee9b57', // Laranja escuro
    contrastText: '#11130e', // Preto/verde escuro para contraste
  },
  
  // Backgrounds
  background: {
    default: '#11130e', // Preto/verde escuro - background principal
    paper: '#1a1d18', // Preto/verde escuro mais claro - cards e superfícies
    elevated: '#232620', // Verde escuro médio - elementos elevados
  },
  
  // Textos
  text: {
    primary: '#b9f8f0', // Azul claro/água - texto principal
    secondary: '#b6d3a5', // Verde claro - texto secundário
    disabled: '#4a4d48', // Cinza escuro - texto desabilitado
    hint: '#6a6d68', // Cinza médio - texto de dica
  },
  
  // Estados
  success: {
    main: '#b6d3a5',
    light: '#b9f8f0',
    dark: '#8fb085',
  },
  
  error: {
    main: '#ef2b41',
    light: '#ff5a6e',
    dark: '#cc1a2e',
  },
  
  warning: {
    main: '#ee9b57',
    light: '#ffb877',
    dark: '#cc7a3f',
  },
  
  info: {
    main: '#b9f8f0',
    light: '#d4faf5',
    dark: '#8fd8d0',
  },
  
  // Bordas e divisores
  divider: 'rgba(185, 248, 240, 0.12)',
  border: 'rgba(185, 248, 240, 0.2)',
  
  // Inputs
  input: {
    background: '#232620', // Fundo dos inputs
    backgroundDark: '#1a1d18', // Fundo escuro (alternativa)
    border: 'rgba(182, 211, 165, 0.3)', // Borda verde claro
    borderDark: 'rgba(185, 248, 240, 0.2)', // Borda clara (para fundo escuro)
    focus: '#ee9b57', // Foco laranja
    text: '#b9f8f0', // Texto azul claro
    textDark: '#b9f8f0', // Texto claro
    placeholder: '#b6d3a5',
    placeholderDark: '#4a4d48', // Placeholder cinza
  },
  
  // Botões
  button: {
    primary: {
      background: '#ee9b57',
      text: '#11130e',
      hover: '#ffb877',
    },
    secondary: {
      background: 'transparent',
      text: '#ee9b57',
      border: '#ee9b57',
      hover: 'rgba(238, 155, 87, 0.1)',
    },
    social: {
      background: '#232620',
      hover: '#2a2d28',
    },
  },
  
  // Gradientes
  gradients: {
    primary: 'linear-gradient(135deg, #ee9b57 0%, #b6d3a5 100%)',
    background: 'linear-gradient(180deg, #11130e 0%, #1a1d18 100%)',
    overlay: 'linear-gradient(180deg, rgba(17, 19, 14, 0) 0%, rgba(17, 19, 14, 0.8) 100%)',
  },
  
  // Shadows
  shadows: {
    sm: '0 2px 4px rgba(238, 155, 87, 0.1)',
    md: '0 4px 12px rgba(238, 155, 87, 0.15)',
    lg: '0 8px 24px rgba(238, 155, 87, 0.2)',
    xl: '0 16px 48px rgba(238, 155, 87, 0.25)',
  },
} as const

// Exportar tipo para TypeScript
export type Colors = typeof colors

