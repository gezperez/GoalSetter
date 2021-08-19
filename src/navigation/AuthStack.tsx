import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import I18n from '~/i18n'
import { SignUpScreen, TermsScreen } from '~/screens'
import { Colors } from '~/utils'
import { RootStackParamList } from './interfaces/navigation'
import { Header } from './headers'

const Stack = createStackNavigator<RootStackParamList>()

const AuthStack = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={({ navigation }) => ({
        header: () => (
          <Header
            title={I18n.t('signUpHeaderTitle')}
            subtitle={I18n.t('signUpHeaderSubtitle')}
            navigation={navigation}
          />
        ),
      })}
    />
    <Stack.Screen
      name="Terms"
      component={TermsScreen}
      options={({ navigation }) => ({
        header: () => (
          <Header
            title={I18n.t('termsHeaderTitle')}
            navigation={navigation}
            colors={[Colors.SECONDARY_HEADER_GRADIENT_START, Colors.SECONDARY_HEADER_GRADIENT_END]}
          />
        ),
      })}
    />
  </Stack.Navigator>
)

export default AuthStack
