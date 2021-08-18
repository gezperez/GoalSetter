import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, View, ViewStyle } from 'react-native'

import { Colors } from '~/utils'

const window = Dimensions.get('window')

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.LOADER_BACKGROUD,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    width: window.width,
    height: '100%',
  },
})

export default Loader
