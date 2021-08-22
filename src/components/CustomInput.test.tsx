import React from 'react'
import { cleanup, render } from '@testing-library/react-native'

import { Images } from '~/utils'
import CustomInput from './CustomInput'

describe('CustomInput', () => {
  afterEach(jest.resetAllMocks)
  afterEach(cleanup)

  it('should render with required props', () => {
    const { toJSON, getByLabelText } = render(
      <CustomInput label="input" icon={Images.EMAIL} accessibilityLabel="button label" testID="button label" />
    )

    expect(getByLabelText('button label')).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
