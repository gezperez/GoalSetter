import React, { FC } from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack'

import { Colors } from '~/utils'
import Typography from '~/utils/Typographys'
import { RootStackParamList } from '../interfaces/navigation'

type HeaderProps = {
  title: string
  subtitle?: string
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>
  colors?: string[]
}

const Header: FC<HeaderProps> = ({
  title,
  subtitle,
  colors = [Colors.HEADER_GRADIENT_START, Colors.HEADER_GRADIENT_END],
  navigation: { canGoBack, goBack },
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors}
      style={[styles.headerContainer, subtitle ? styles.largeHeight : {}]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {canGoBack() && (
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon name={'chevron-back'} size={28} color={Colors.WHITE} />
        </TouchableOpacity>
      )}
    </LinearGradient>
  )
}

type Styles = {
  headerContainer: ViewStyle
  titleContainer: ViewStyle
  largeHeight: ViewStyle
  title: TextStyle
  subtitle: TextStyle
  backButton: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  headerContainer: {
    paddingTop: getStatusBarHeight(),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: getStatusBarHeight(),
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  largeHeight: {
    height: 150,
  },
  title: {
    ...Typography.headerTitle,
  },
  subtitle: {
    ...Typography.headerSubtitle,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    marginLeft: 16,
  },
})

export default Header
