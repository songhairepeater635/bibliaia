import { createContext, useContext, useState, ReactNode } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { themes, themeNames, type ThemeName } from '@/theme/themes'

interface ThemeContextType {
  themeName: ThemeName
  setThemeName: (name: ThemeName) => void
  themeNames: Record<ThemeName, string>
  previewTheme: ThemeName | null
  setPreviewTheme: (name: ThemeName | null) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'sua-biblia-ia-theme'

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext deve ser usado dentro de ThemeContextProvider')
  }
  return context
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [themeName, setThemeNameState] = useState<ThemeName>(() => {
    // Carregar tema salvo do localStorage ou usar padrão
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null
    if (savedTheme && (savedTheme === 'dourado' || savedTheme === 'vibrante' || savedTheme === 'classico')) {
      return savedTheme
    }
    return 'vibrante' // Tema padrão
  })

  const [previewTheme, setPreviewTheme] = useState<ThemeName | null>(null)

  const setThemeName = (name: ThemeName) => {
    setThemeNameState(name)
    localStorage.setItem(THEME_STORAGE_KEY, name)
    setPreviewTheme(null) // Limpar preview ao salvar
  }

  // Usar previewTheme se existir, senão usar themeName
  const currentTheme = themes[previewTheme || themeName]

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, themeNames, previewTheme, setPreviewTheme }}>
      <MUIThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}

