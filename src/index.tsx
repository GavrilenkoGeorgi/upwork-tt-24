import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import Main from './pages/Main'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
)
