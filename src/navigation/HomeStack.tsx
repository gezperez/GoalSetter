import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import I18n from '~/i18n'
import { Background, Title } from '~/navigation/components'
import { HomeScreen } from '~/screens'
import { RootStackParamList } from './interfaces/navigation'

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

const HomeStack = () => (
  <Navigator headerMode="screen">
    <Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerBackground: () => <Background height={100} />,
        headerTitle: () => <Title title={I18n.t('homeHeaderTitle')} />,
      }}
    />
  </Navigator>
)

export default HomeStack
