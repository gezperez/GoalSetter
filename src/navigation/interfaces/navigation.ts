import { AuthStackParamList } from './auth'
import { HomeStackParamList } from './home'

export type HeaderTextProps =
  | {
      title: string
      subtitle?: string
    }
  | undefined

export type RootStackParamList = HomeStackParamList & AuthStackParamList
