import React, { FC } from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

import { Colors } from '~/utils'
import Typography from '~/utils/Typographys'

type CustomButtonProps = {
  label: string
  onPress: () => void
}

const CustomButton: FC<CustomButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
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

export default CustomButton
