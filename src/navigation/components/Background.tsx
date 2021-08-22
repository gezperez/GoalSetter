import React, { FC, memo } from 'react'
import { Dimensions, ImageBackground, ImageStyle, StyleSheet } from 'react-native'

import { Images } from '~/utils'

const WIDTH = Dimensions.get('window').width

type BackgroundProps = {
  height: number
}

const Background: FC<BackgroundProps> = ({ height }) => (
  <ImageBackground source={Images.HEADER_BACKGROUND} style={[styles.background, { height }]} />
)

type Styles = {
  background: ImageStyle
}

const styles = StyleSheet.create<Styles>({
  background: {
    width: WIDTH,
  },
})

export default memo(Background)
