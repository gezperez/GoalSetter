import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { render } from '@testing-library/react-native'

import I18nJs from '~/__mocks__/react-native-i18n'
import HomeScreen from './HomeScreen'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
global.React = React

describe('HomeScreen', () => {
  afterEach(jest.resetAllMocks)

  it('should render with Button component', () => {
    const { toJSON, getByText } = render(
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    )

    const button = getByText(I18nJs.t('homeButton'))
    expect(button).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
