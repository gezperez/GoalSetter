import { StyleSheet, TextStyle } from 'react-native'

import Colors from './Colors'

type Typographys = {
  headerTitle: TextStyle
  headerSubtitle: TextStyle
}

const typographyObject: Typographys = {
  headerTitle: {
    fontFamily: 'Avenir-Book',
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

const Typography = StyleSheet.create<Typographys>(typographyObject)

export default Typography
