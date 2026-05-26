import { TaskProvider } from './context/TasksContext'
import AppComponents from './pages/AppComponents'
import './scss/App.scss'

function App() {

  return (
    <TaskProvider>
      <AppComponents />
    </TaskProvider>
  )
}

export default App
