import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import Navigator from '~/navigation/Navigator'
import { useStore } from '~/store'

const App = () => {
  const store = useStore()

  useEffect(() => {
    store.init()
  }, [store])

  if (!store.initialized) {
    return null
  }

  return <Navigator />
}

export default observer(App)
