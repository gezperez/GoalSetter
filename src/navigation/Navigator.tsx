import React from 'react'
import { Dimensions, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'

import I18n from '~/i18n'
import { useStore } from '~/store'
import { Colors } from '~/utils'
import Typography from '~/utils/Typographys'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

const HEIGHT = Dimensions.get('window').height

const Stack = createStackNavigator()

const GradientHeader = () => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={[Colors.HEADER_GRADIENT_START, Colors.HEADER_GRADIENT_END]}
    style={styles.headerContainer}
  >
    <Text style={styles.title}>{I18n.t('headerTitle')}</Text>
    <Text style={styles.subtitle}>{I18n.t('headerSubtitle')}</Text>
  </LinearGradient>
)

const Navigator = () => {
  const { authStore } = useStore()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <GradientHeader />,
        }}
      >
        {authStore.isAuthenticated ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type Styles = {
  headerContainer: ViewStyle
  title: TextStyle
  subtitle: TextStyle
}

const styles = StyleSheet.create<Styles>({
  headerContainer: {
    height: HEIGHT * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Typography.headerTitle,
    marginBottom: 20,
  },
  subtitle: {
    ...Typography.headerSubtitle,
    textAlign: 'center',
  },
})

export default observer(Navigator)
