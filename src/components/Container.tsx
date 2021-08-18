import React, { ReactNode } from 'react'
import { StatusBar, StyleSheet, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Loader from './Loader'

type ContainerProps = {
  children?: ReactNode
  loading?: boolean
}

const Container = ({ children, loading }: ContainerProps) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollView}
      >
        {children}
      </KeyboardAwareScrollView>
      {loading && <Loader />}
    </>
  )
}

type Styles = {
  scrollView: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  scrollView: {
    flexGrow: 1,
  },
})

export default Container
