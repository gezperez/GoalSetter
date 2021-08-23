import React from 'react'
import { render } from '@testing-library/react-native'

import Background from './Background'

describe('Background', () => {
  afterEach(jest.resetAllMocks)

  it('should render with required props', () => {
    const { toJSON } = render(<Background height={100} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
