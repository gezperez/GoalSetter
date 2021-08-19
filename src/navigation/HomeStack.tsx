import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import I18n from '~/i18n'
import { HomeScreen } from '~/screens'
import { RootStackParamList } from './interfaces/navigation'
import { Header } from './headers'

const Stack = createStackNavigator<RootStackParamList>()

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      header: () => <Header title={I18n.t('homeHeaderTitle')} navigation={navigation} />,
    })}
    headerMode="screen"
  >
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)

export default HomeStack
