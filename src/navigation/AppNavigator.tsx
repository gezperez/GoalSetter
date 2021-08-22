import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'

import { useStore } from '~/store'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

const { Navigator, Screen } = createStackNavigator()

const AppNavigator = () => {
  const { authStore } = useStore()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {authStore.isAuthenticated ? (
          <Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Screen name="AuthStack" component={AuthStack} />
        )}
      </Navigator>
    </NavigationContainer>
  )
}

export default observer(AppNavigator)
