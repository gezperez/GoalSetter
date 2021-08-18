import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'

import { useStore } from '~/store'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

const Stack = createStackNavigator()

const Navigator = () => {
  const { authStore } = useStore()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authStore.isAuthenticated ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default observer(Navigator)
