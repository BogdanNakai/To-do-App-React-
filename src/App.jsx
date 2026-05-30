
import { store } from './app/store'
import { Provider } from 'react-redux'
import AppComponents from './pages/AppComponents'
import './scss/App.scss'
import { AppProviders } from './AppProvides'


function App() {


  return (
    <Provider store={store}>
      <AppProviders>
        <AppComponents />
      </AppProviders>
    </Provider>
  )
}

export default App
