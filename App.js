import { StatusBar } from 'expo-status-bar'
import Main from './components/MainComponent'
import React from 'react'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
