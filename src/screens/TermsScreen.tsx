import React from 'react'
import { Dimensions, Image, ImageBackground, ImageStyle, StyleSheet, Text, TextStyle } from 'react-native'

import { Container } from '~/components'
import I18n from '~/i18n'
import { Images } from '~/utils'
import Typography from '~/utils/Typographys'

const WIDTH = Dimensions.get('window').width

const TermsScreen = () => {
  return (
    <Container>
      <ImageBackground source={Images.MONEY_BACKGROUND} style={styles.imageBackground}>
        <Image source={Images.FLYING_MONEY} />
      </ImageBackground>
      <Text style={styles.text}>{I18n.t('terms')}</Text>
    </Container>
  )
}

type Styles = {
  imageBackground: ImageStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  imageBackground: {
    width: WIDTH * 0.7,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  text: {
    ...Typography.text,
    margin: 32,
  },
})

export default TermsScreen
