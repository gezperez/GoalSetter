import { StyleSheet, TextStyle } from 'react-native'

import Colors from './Colors'

type Typography = {
  headerTitle: TextStyle
  headerSubtitle: TextStyle
}

const typographyObject: Typography = {
  headerTitle: {
    fontFamily: 'Avenir-Light',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 23,
    color: Colors.WHITE,
  },
  headerSubtitle: {
    fontFamily: 'Avenir-Light',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
}

type Styles = Typography

const Typography = StyleSheet.create<Styles>(typographyObject)

export default Typography
