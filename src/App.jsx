
import { store } from './app/store'
import { Provider} from 'react-redux'
import { TaskProvider } from './context/TasksContext'
import { ThemeProvider } from './context/ThemContext'
import AppComponents from './pages/AppComponents'
import './scss/App.scss'


function App() {


  return (
   <Provider store={store}>
      <ThemeProvider>
        <TaskProvider>
         <AppComponents />
        </TaskProvider>
      </ThemeProvider>
   </Provider>
  )
}

export default App
