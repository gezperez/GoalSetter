import React, { useEffect } from 'react'

import { Container } from '~/components'
import { useStore } from '~/store'

const HomeScreen = () => {
  const { authStore } = useStore()

  useEffect(() => {
    authStore.unSetAccessToken()
  }, [])

  return <Container />
}

export default HomeScreen
