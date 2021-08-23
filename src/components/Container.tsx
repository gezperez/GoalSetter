import React, { FC, ReactNode } from 'react'
import { StatusBar, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type ContainerProps = {
  children?: ReactNode
  contentContainerStyle?: StyleProp<ViewStyle>
  accessibilityLabel?: string
  testID?: string
}

const Container: FC<ContainerProps> = ({ children, contentContainerStyle, testID, accessibilityLabel }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[styles.container, { paddingBottom: insets.bottom }]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <ScrollView contentContainerStyle={[contentContainerStyle, styles.scrollView]}>{children}</ScrollView>
    </View>
  )
}

type Styles = {
  container: ViewStyle
  scrollView: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: '100%',
  },
  scrollView: {
    flexGrow: 1,
  },
})

export default Container
