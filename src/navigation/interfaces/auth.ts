import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { HeaderTextProps, RootStackParamList } from './navigation'

export type AuthStackParamList = {
  SignUp: HeaderTextProps
  Terms: HeaderTextProps
}

export type SignUpScreenProps = {
  route: RouteProp<RootStackParamList, 'SignUp'>
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>
}
