import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { fireEvent, render } from '@testing-library/react-native'

import CustomButton from './CustomButton'

describe('CustomButton', () => {
  afterEach(jest.resetAllMocks)

  it('should render with required props', () => {
    const { toJSON } = render(<CustomButton label="button label" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with non required props', () => {
    const { toJSON } = render(<CustomButton label="button label" style={styles.button} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render and support touchable props', () => {
    const mockPressHandler = jest.fn()

    const { toJSON, getByLabelText } = render(
      <CustomButton label="button label" onPress={mockPressHandler} accessibilityLabel="button" testID="button" />
    )

    fireEvent.press(getByLabelText('button'))

    expect(mockPressHandler).toBeCalled()
    expect(toJSON()).toMatchSnapshot()
  })
})

type Styles = {
  button: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  button: {
    margin: 15,
  },
})
