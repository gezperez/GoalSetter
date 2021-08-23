import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import I18n from '~/i18n'
import { Background, GradientBackground, Title } from '~/navigation/components'
import { SignUpScreen, TermsScreen } from '~/screens'
import { Colors } from '~/utils'
import { RootStackParamList } from './interfaces/navigation'

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

const signUpHeight = 150
const termsHeight = 100

const AuthStack = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerTitleStyle: {
        alignSelf: 'center',
      },
      headerTintColor: Colors.WHITE,
      headerTitleContainerStyle: {
        left: 0,
      },
      headerBackTitleVisible: false,
    }}
  >
    <Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        headerBackground: () => <Background height={signUpHeight} />,
        headerTitle: () => <Title title={I18n.t('signUpHeaderTitle')} subtitle={I18n.t('signUpHeaderSubtitle')} />,
        headerStyle: {
          height: signUpHeight,
        },
      }}
    />
    <Screen
      name="Terms"
      component={TermsScreen}
      options={{
        headerBackground: () => <GradientBackground height={termsHeight} />,
        headerTitle: () => <Title title={I18n.t('termsHeaderTitle')} />,
        headerStyle: {
          height: termsHeight,
        },
      }}
    />
  </Navigator>
)

export default AuthStack
