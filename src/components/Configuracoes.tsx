import { useState, useEffect } from 'react'
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  IconButton,
} from '@mui/material'
import { Close, Palette } from '@mui/icons-material'
import { useThemeContext } from '@/contexts/ThemeContext'
import type { ThemeName } from '@/theme/themes'

interface ConfiguracoesProps {
  open: boolean
  onClose: () => void
}

export const Configuracoes = ({ open, onClose }: ConfiguracoesProps) => {
  const { themeName, setThemeName, themeNames, setPreviewTheme } = useThemeContext()
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>(themeName)

  // Resetar para o tema atual quando o diálogo abrir
  useEffect(() => {
    if (open) {
      setSelectedTheme(themeName)
      setPreviewTheme(null) // Limpar qualquer preview anterior
    }
  }, [open, themeName, setPreviewTheme])

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value as ThemeName
    setSelectedTheme(newTheme)
    // Aplicar preview do tema selecionado
    setPreviewTheme(newTheme)
  }

  const handleThemeClick = (themeKey: ThemeName) => {
    setSelectedTheme(themeKey)
    // Aplicar preview do tema selecionado
    setPreviewTheme(themeKey)
  }

  const handleSalvar = () => {
    setThemeName(selectedTheme)
    setPreviewTheme(null) // Limpar preview ao salvar
    onClose()
  }

  const handleCancelar = () => {
    setSelectedTheme(themeName)
    setPreviewTheme(null) // Limpar preview ao cancelar
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleCancelar}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          width: '100%',
          maxWidth: '600px',
          minHeight: '500px',
          maxHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 2,
          flexShrink: 0,
          minHeight: '64px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Palette sx={{ color: 'primary.main' }} />
          <Typography variant="h6" component="span">
            Configurações
          </Typography>
        </Box>
        <IconButton
          onClick={handleCancelar}
          size="small"
          sx={{ color: 'text.secondary' }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          flex: '1 1 auto',
          overflowY: 'auto',
          overflowX: 'hidden',
          minHeight: 0,
        }}
      >
        <FormControl component="fieldset" fullWidth>
          <FormLabel
            component="legend"
            sx={{
              mb: 2,
              color: 'text.primary',
              fontWeight: 600,
            }}
          >
            Escolha o Tema
          </FormLabel>
          <RadioGroup
            value={selectedTheme}
            onChange={handleThemeChange}
            sx={{ gap: 2 }}
          >
            {Object.entries(themeNames).map(([key, name]) => (
              <Paper
                key={key}
                sx={{
                  p: 2,
                  border: selectedTheme === key ? 2 : 1,
                  borderColor:
                    selectedTheme === key ? 'primary.main' : 'divider',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background-color 0.2s',
                  minHeight: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'background.elevated',
                  },
                }}
                onClick={() => handleThemeClick(key as ThemeName)}
              >
                <FormControlLabel
                  value={key}
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {key === 'dourado'
                          ? 'Paleta dourada e terrosa com tons quentes'
                          : key === 'vibrante'
                          ? 'Paleta vibrante e moderna com cores'
                          : 'Paleta clássica e terrosa com tons naturais'}
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0, width: '100%' }}
                />
              </Paper>
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>

      <DialogActions 
        sx={{ 
          px: 3, 
          pb: 3,
          flexShrink: 0,
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Button onClick={handleCancelar} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleSalvar} variant="contained">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

