import React, { FC } from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

import Typography from '~/utils/Typographys'

type TitleProps = {
  title: string
  subtitle?: string
}

const Title: FC<TitleProps> = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
)

type Styles = {
  container: ViewStyle
  title: TextStyle
  subtitle: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: Typography.headerTitle,
  subtitle: {
    ...Typography.headerSubtitle,
    textAlign: 'center',
    marginTop: 10,
  },
})

export default Title
