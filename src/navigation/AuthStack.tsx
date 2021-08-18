import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, SignUpScreen } from '~/screens'

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
)

export default AuthStack
