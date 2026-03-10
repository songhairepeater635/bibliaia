import { createTheme } from '@mui/material/styles'
import { colors } from './colors'

/**
 * Tema customizado do Material-UI baseado nas cores centralizadas
 */
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
      elevated: colors.background.elevated,
    } as any,
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    success: {
      main: colors.success.main,
      light: colors.success.light,
      dark: colors.success.dark,
    },
    error: {
      main: colors.error.main,
      light: colors.error.light,
      dark: colors.error.dark,
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light,
      dark: colors.warning.dark,
    },
    info: {
      main: colors.info.main,
      light: colors.info.light,
      dark: colors.info.dark,
    },
    divider: colors.divider,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      color: colors.text.primary,
    },
    h2: {
      fontWeight: 700,
      color: colors.text.primary,
    },
    h3: {
      fontWeight: 600,
      color: colors.text.primary,
    },
    h4: {
      fontWeight: 600,
      color: colors.text.primary,
    },
    h5: {
      fontWeight: 600,
      color: colors.text.primary,
    },
    h6: {
      fontWeight: 600,
      color: colors.text.primary,
    },
    body1: {
      color: colors.text.primary,
    },
    body2: {
      color: colors.text.secondary,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: colors.button.primary.background,
          color: colors.button.primary.text,
          '&:hover': {
            backgroundColor: colors.button.primary.hover,
          },
        },
        outlinedPrimary: {
          borderColor: colors.button.secondary.border,
          color: colors.button.secondary.text,
          '&:hover': {
            borderColor: colors.button.secondary.border,
            backgroundColor: colors.button.secondary.hover,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: `${colors.input.background} !important`,
          '&:hover': {
            backgroundColor: `${colors.input.background} !important`,
          },
          '&.Mui-focused': {
            backgroundColor: `${colors.input.background} !important`,
          },
          '&.Mui-disabled': {
            backgroundColor: `${colors.input.background} !important`,
          },
        },
        input: {
          color: `${colors.input.text} !important`,
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: `${colors.input.background} !important`,
            background: `${colors.input.background} !important`,
            borderRadius: 12,
            color: `${colors.input.text} !important`,
            '& fieldset': {
              borderColor: colors.input.border,
            },
            '&:hover': {
              backgroundColor: `${colors.input.background} !important`,
              background: `${colors.input.background} !important`,
              '& fieldset': {
                borderColor: colors.input.border,
              },
            },
            '&.Mui-focused': {
              backgroundColor: `${colors.input.background} !important`,
              background: `${colors.input.background} !important`,
              '& fieldset': {
                borderColor: colors.input.focus,
              },
            },
            '& input': {
              color: `${colors.input.text} !important`,
              backgroundColor: 'transparent !important',
              background: 'transparent !important',
            },
            '& input::placeholder': {
              color: colors.input.placeholderDark,
              opacity: 1,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.text.secondary,
            '&.Mui-focused': {
              color: colors.input.focus,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          borderRadius: 16,
          border: `1px solid ${colors.border}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          backgroundImage: 'none',
          borderBottom: `1px solid ${colors.divider}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.divider,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.text.secondary,
          '&.Mui-checked': {
            color: colors.primary.main,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
          '&:hover': {
            color: colors.primary.light,
          },
        },
      },
    },
  },
})

// Exportar as cores para uso direto em componentes
export { colors }

