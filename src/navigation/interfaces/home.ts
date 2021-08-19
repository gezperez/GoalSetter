import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { HeaderTextProps, RootStackParamList } from './navigation'

export type HomeStackParamList = {
  Home: HeaderTextProps
}

export type HomeScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>
  navigation: StackNavigationProp<RootStackParamList, 'Home'>
}
