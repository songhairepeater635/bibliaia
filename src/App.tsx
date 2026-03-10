import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { AIChat } from '@/pages/AIChat'

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth={false} sx={{ height: { xs: 'calc(var(--vh, 1vh) * 100)', sm: '100vh' }, p: 0, position: 'relative' }}>
                <AIChat />
              </Container>
            }
          />
          <Route path="*" element={
            <Container maxWidth={false} sx={{ height: { xs: 'calc(var(--vh, 1vh) * 100)', sm: '100vh' }, p: 0, position: 'relative' }}>
              <AIChat />
            </Container>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App

