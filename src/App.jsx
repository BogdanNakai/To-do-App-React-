import { TaskProvider } from './context/TasksContext'
import { ThemeProvider } from './context/ThemContext'
import AppComponents from './pages/AppComponents'
import './scss/App.scss'

function App() {

  return (
    <ThemeProvider>
      <TaskProvider>
        <AppComponents />
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
