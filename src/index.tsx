import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './store/store'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
