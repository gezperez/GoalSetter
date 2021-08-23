import React from 'react'
import { render } from '@testing-library/react-native'

import GradientBackground from './GradientBackground'

describe('Background', () => {
  afterEach(jest.resetAllMocks)

  it('should render with required props', () => {
    const { toJSON } = render(<GradientBackground height={100} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
