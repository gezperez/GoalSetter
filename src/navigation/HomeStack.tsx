import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '~/screens'

const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)

export default HomeStack
