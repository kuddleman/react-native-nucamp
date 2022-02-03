import Main from './components/MainComponent'
import React from 'react'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/loadingComponent'

const { persistor, store } = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}
