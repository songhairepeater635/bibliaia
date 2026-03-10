import { createTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import type { PaletteOptions } from '@mui/material/styles'

/**
 * Tema 1: Dourado e Terroso
 * Paleta: #413040, #6c6368, #b9a173, #eaa353, #ffefa9
 */
const temaDourado = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#eaa353',
      light: '#ffefa9',
      dark: '#b9a173',
      contrastText: '#413040',
    },
    secondary: {
      main: '#b9a173',
      light: '#eaa353',
      dark: '#6c6368',
      contrastText: '#ffefa9',
    },
    background: {
      default: '#413040',
      paper: '#4a3a4a',
      elevated: '#5a4a5a',
    } as PaletteOptions['background'] & { elevated: string },
    text: {
      primary: '#ffefa9',
      secondary: '#b9a173',
      disabled: '#6c6368',
    },
    success: {
      main: '#b9a173',
      light: '#eaa353',
      dark: '#6c6368',
    },
    error: {
      main: '#eaa353',
      light: '#ffefa9',
      dark: '#b9a173',
    },
    warning: {
      main: '#eaa353',
      light: '#ffefa9',
      dark: '#b9a173',
    },
    info: {
      main: '#b9a173',
      light: '#eaa353',
      dark: '#6c6368',
    },
    divider: 'rgba(255, 239, 169, 0.12)',
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
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
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
          backgroundColor: '#eaa353',
          color: '#413040',
          '&:hover': {
            backgroundColor: '#ffefa9',
          },
        },
        outlinedPrimary: {
          borderColor: '#eaa353',
          color: '#eaa353',
          '&:hover': {
            borderColor: '#eaa353',
            backgroundColor: 'rgba(234, 163, 83, 0.1)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#5a4a5a !important',
          '&:hover': {
            backgroundColor: '#5a4a5a !important',
          },
          '&.Mui-focused': {
            backgroundColor: '#5a4a5a !important',
          },
        },
        input: {
          color: '#ffefa9 !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#5a4a5a !important',
            borderRadius: 12,
            color: '#ffefa9 !important',
            '& fieldset': {
              borderColor: 'rgba(185, 161, 115, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(185, 161, 115, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#eaa353',
            },
            '& input': {
              color: '#ffefa9 !important',
            },
            '& input::placeholder': {
              color: '#6c6368',
              opacity: 1,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#4a3a4a',
          backgroundImage: 'none',
        },
      },
    },
  },
})

/**
 * Tema 2: Vibrante e Moderno
 * Paleta: #b9f8f0, #b6d3a5, #ee9b57, #ef2b41, #11130e
 */
const temaVibrante = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ee9b57',
      light: '#b9f8f0',
      dark: '#b6d3a5',
      contrastText: '#11130e',
    },
    secondary: {
      main: '#b6d3a5',
      light: '#b9f8f0',
      dark: '#ee9b57',
      contrastText: '#11130e',
    },
    background: {
      default: '#11130e',
      paper: '#1a1d18',
      elevated: '#232620',
    } as PaletteOptions['background'] & { elevated: string },
    text: {
      primary: '#b9f8f0',
      secondary: '#b6d3a5',
      disabled: '#4a4d48',
    },
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
    divider: 'rgba(185, 248, 240, 0.12)',
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
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
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
          backgroundColor: '#ee9b57',
          color: '#11130e',
          '&:hover': {
            backgroundColor: '#ffb877',
          },
        },
        outlinedPrimary: {
          borderColor: '#ee9b57',
          color: '#ee9b57',
          '&:hover': {
            borderColor: '#ee9b57',
            backgroundColor: 'rgba(238, 155, 87, 0.1)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#232620 !important',
          '&:hover': {
            backgroundColor: '#232620 !important',
          },
          '&.Mui-focused': {
            backgroundColor: '#232620 !important',
          },
        },
        input: {
          color: '#b9f8f0 !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#232620 !important',
            borderRadius: 12,
            color: '#b9f8f0 !important',
            '& fieldset': {
              borderColor: 'rgba(182, 211, 165, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(182, 211, 165, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ee9b57',
            },
            '& input': {
              color: '#b9f8f0 !important',
            },
            '& input::placeholder': {
              color: '#4a4d48',
              opacity: 1,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1d18',
          backgroundImage: 'none',
        },
      },
    },
  },
})

/**
 * Tema 3: Clássico e Terroso
 * Paleta: #2a0308, #924f1b, #e2ac3f, #f8ebbe, #7ba58d
 */
const temaClassico = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e2ac3f',
      light: '#f8ebbe',
      dark: '#924f1b',
      contrastText: '#2a0308',
    },
    secondary: {
      main: '#7ba58d',
      light: '#f8ebbe',
      dark: '#924f1b',
      contrastText: '#2a0308',
    },
    background: {
      default: '#2a0308',
      paper: '#3a1318',
      elevated: '#4a2328',
    } as PaletteOptions['background'] & { elevated: string },
    text: {
      primary: '#f8ebbe',
      secondary: '#7ba58d',
      disabled: '#924f1b',
    },
    success: {
      main: '#7ba58d',
      light: '#f8ebbe',
      dark: '#5a7a6d',
    },
    error: {
      main: '#924f1b',
      light: '#e2ac3f',
      dark: '#6a2f0b',
    },
    warning: {
      main: '#e2ac3f',
      light: '#f8ebbe',
      dark: '#924f1b',
    },
    info: {
      main: '#7ba58d',
      light: '#f8ebbe',
      dark: '#5a7a6d',
    },
    divider: 'rgba(248, 235, 190, 0.12)',
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
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
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
          backgroundColor: '#e2ac3f',
          color: '#2a0308',
          '&:hover': {
            backgroundColor: '#f8ebbe',
          },
        },
        outlinedPrimary: {
          borderColor: '#e2ac3f',
          color: '#e2ac3f',
          '&:hover': {
            borderColor: '#e2ac3f',
            backgroundColor: 'rgba(226, 172, 63, 0.1)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#4a2328 !important',
          '&:hover': {
            backgroundColor: '#4a2328 !important',
          },
          '&.Mui-focused': {
            backgroundColor: '#4a2328 !important',
          },
        },
        input: {
          color: '#f8ebbe !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#4a2328 !important',
            borderRadius: 12,
            color: '#f8ebbe !important',
            '& fieldset': {
              borderColor: 'rgba(123, 165, 141, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(123, 165, 141, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#e2ac3f',
            },
            '& input': {
              color: '#f8ebbe !important',
            },
            '& input::placeholder': {
              color: '#924f1b',
              opacity: 1,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#3a1318',
          backgroundImage: 'none',
        },
      },
    },
  },
})

export type ThemeName = 'dourado' | 'vibrante' | 'classico'

export const themes: Record<ThemeName, Theme> = {
  dourado: temaDourado,
  vibrante: temaVibrante,
  classico: temaClassico,
}

export const themeNames: Record<ThemeName, string> = {
  dourado: 'Dourado e Terroso',
  vibrante: 'Vibrante e Moderno',
  classico: 'Clássico e Terroso',
}

