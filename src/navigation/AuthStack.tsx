import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignUpScreen } from '~/screens'

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
)

export default AuthStack
