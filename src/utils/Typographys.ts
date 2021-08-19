import { StyleSheet, TextStyle } from 'react-native'

import Colors from './Colors'

type Typographys = {
  headerTitle: TextStyle
  headerSubtitle: TextStyle
  label: TextStyle
  input: TextStyle
  button: TextStyle
  text: TextStyle
  footer: TextStyle
  footerLink: TextStyle
}

const typographyObject: Typographys = {
  headerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 23,
    color: Colors.WHITE,
  },
  headerSubtitle: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
  label: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 19,
    lineHeight: 16,
    color: Colors.LABEL,
  },
  input: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 19,
    lineHeight: 22,
    color: Colors.FOCUSED_BORDER,
  },
  button: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    lineHeight: 14,
    color: Colors.WHITE,
  },
  text: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.BLACK,
  },
  footer: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.BLACK,
    textAlign: 'center',
  },
  footerLink: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.LINK,
    textAlign: 'center',
  },
}

const Typography = StyleSheet.create<Typographys>(typographyObject)

export default Typography
