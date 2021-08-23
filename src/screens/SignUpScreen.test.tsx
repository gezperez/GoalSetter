import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { render } from '@testing-library/react-native'

import I18nJs from '~/__mocks__/react-native-i18n'
import SignUpScreen from './SignUpScreen'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
global.React = React

describe('SignUpScreen', () => {
  afterEach(jest.resetAllMocks)

  it('should render with Button component', () => {
    const route: any = {}
    const navigation: any = {}

    const { toJSON, getByText } = render(
      <SafeAreaProvider>
        <SignUpScreen navigation={navigation} route={route} />
      </SafeAreaProvider>
    )

    const button = getByText(I18nJs.t('signUpButton'))
    expect(button).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
