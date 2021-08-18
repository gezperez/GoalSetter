import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

const SignUpScreen = () => {
  return <View style={styles.container} />
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SignUpScreen
