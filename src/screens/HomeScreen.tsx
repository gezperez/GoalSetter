import React from 'react'
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

import { Container, CustomButton } from '~/components'
import I18n from '~/i18n'
import { Images } from '~/utils'
import Typography from '~/utils/Typographys'

const HomeScreen = () => {
  return (
    <Container contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Images.HOME_ICON} style={styles.image} />
        <Text style={styles.title}>{I18n.t('homeTitle')}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.footer}>{I18n.t('homeFooter')}</Text>
        <CustomButton label={I18n.t('homeButton')} />
      </View>
    </Container>
  )
}

type Styles = {
  container: ViewStyle
  image: ImageStyle
  topContainer: ViewStyle
  title: TextStyle
  bottomContainer: ViewStyle
  footer: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 167,
    height: 155,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Typography.homeTitle,
    marginTop: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  footer: {
    ...Typography.text,
    textAlign: 'center',
    marginHorizontal: 16,
  },
})

export default HomeScreen
