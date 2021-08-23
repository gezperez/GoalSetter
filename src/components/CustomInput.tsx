import React, { forwardRef, useCallback, useState } from 'react'
import {
  Animated,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { size } from 'lodash'

import { useTween } from '~/hooks'
import { Colors, Typographys } from '~/utils'

export type CustomInputProps = {
  icon: ImageSourcePropType
  label: string
  error?: string
} & TextInputProps

const CustomInput = forwardRef<TextInput, CustomInputProps>(
  ({ icon, label, error, accessibilityLabel, testID, onChangeText, value, ...props }, ref) => {
    const [hasFocus, setHasFocus] = useState(false)

    const animateLabel = hasFocus || size(value) >= 1

    const [interpolate] = useTween(animateLabel, 200)

    const handleBlur = useCallback(() => setHasFocus(false), [])

    const handleFocus = useCallback(() => setHasFocus(true), [])

    return (
      <Animated.View
        style={[
          styles.container,
          {
            borderBottomColor: hasFocus ? Colors.FOCUSED_BORDER : Colors.BORDER,
          },
          error ? styles.error : {},
        ]}
      >
        <Image source={icon} style={styles.image} />

        <View style={styles.inputContainer}>
          <Animated.Text
            numberOfLines={1}
            style={[
              styles.label,
              {
                top: interpolate(0, -28),
                fontSize: interpolate(17, 12),
                lineHeight: interpolate(24, 14),
              },
            ]}
          >
            {label}
          </Animated.Text>
          <TextInput
            ref={ref}
            style={styles.input}
            value={value}
            onBlur={handleBlur}
            onFocus={handleFocus}
            testID={testID}
            accessibilityLabel={accessibilityLabel}
            onChangeText={onChangeText}
            {...props}
          />
        </View>
      </Animated.View>
    )
  }
)

type Styles = {
  container: ViewStyle
  inputContainer: ViewStyle
  input: TextStyle
  label: TextStyle
  error: ViewStyle
  image: ImageStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.BORDER,
    height: 50,
    marginVertical: 16,
    marginHorizontal: 36,
  },
  label: {
    ...Typographys.label,
  },
  error: {
    borderBottomColor: Colors.ERROR,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    ...Typographys.input,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  image: {
    resizeMode: 'contain',
    width: 16,
    height: 16,
    marginRight: 16,
  },
})

export default CustomInput
