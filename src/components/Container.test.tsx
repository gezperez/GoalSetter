import React from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { render } from '@testing-library/react-native'

import Container from './Container'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
global.React = React

describe('Container', () => {
  afterEach(jest.resetAllMocks)

  it('should render with required props', () => {
    const { toJSON, getByTestId } = render(
      <SafeAreaProvider>
        <Container testID="container" />
      </SafeAreaProvider>
    )

    const container = getByTestId('container')

    expect(container).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with children prop', () => {
    const { toJSON, getByTestId } = render(
      <SafeAreaProvider>
        <Container testID="container">
          <View />
        </Container>
      </SafeAreaProvider>
    )

    const container = getByTestId('container')

    expect(container).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
