import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import theme from './theme'
import App from './components/App'
import GlobalStyle from './theme/GlobalStyle'
import * as serviceWorker from './services/serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
