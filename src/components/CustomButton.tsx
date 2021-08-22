import React, { FC, memo } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

import { Colors } from '~/utils'
import Typography from '~/utils/Typographys'

type CustomButtonProps = {
  label: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  accessibilityLabel?: string
  testID?: string
}

const CustomButton: FC<CustomButtonProps> = ({ label, onPress, style, accessibilityLabel, testID }) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
    disabled={!onPress}
    accessibilityLabel={accessibilityLabel}
    testID={testID}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
)

type Styles = {
  container: ViewStyle
  label: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 50,
    backgroundColor: Colors.BUTTON,
    borderRadius: 5,
  },
  label: {
    ...Typography.button,
  },
})

export default memo(CustomButton)
