import React, { FC, memo } from 'react'
import { Dimensions, StyleSheet, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Colors } from '~/utils'

const WIDTH = Dimensions.get('window').width

type GradientBackgroundProps = {
  height: number
}

const GradientBackground: FC<GradientBackgroundProps> = ({ height }) => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={[Colors.HEADER_GRADIENT_START, Colors.HEADER_GRADIENT_END]}
    style={[styles.background, { height }]}
  />
)

type Styles = {
  background: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  background: {
    width: WIDTH,
  },
})

export default memo(GradientBackground)
