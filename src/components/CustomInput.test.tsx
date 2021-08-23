import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import { Images } from '~/utils'
import CustomInput from './CustomInput'

describe('CustomInput', () => {
  afterEach(jest.resetAllMocks)

  it('should render with required props', () => {
    const mockOnChangeText = jest.fn()

    const { toJSON, getByTestId } = render(
      <CustomInput
        label="input"
        icon={Images.EMAIL}
        accessibilityLabel="input"
        testID="input"
        onChangeText={mockOnChangeText}
      />
    )

    const input = getByTestId('input')

    expect(input).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should call onChangeText with expected string', () => {
    const mockOnChangeText = jest.fn()

    const { getByTestId, toJSON } = render(
      <CustomInput
        label="input"
        icon={Images.EMAIL}
        accessibilityLabel="input"
        testID="input"
        onChangeText={mockOnChangeText}
      />
    )

    const input = getByTestId('input')
    fireEvent.changeText(input, 'test')

    expect(mockOnChangeText).toHaveBeenCalledWith('test')
    expect(toJSON()).toMatchSnapshot()
  })
})
