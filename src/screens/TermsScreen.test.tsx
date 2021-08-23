import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { render } from '@testing-library/react-native'

import I18nJs from '~/__mocks__/react-native-i18n'
import TermsScreen from './TermsScreen'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
global.React = React

describe('TermsScreen', () => {
  afterEach(jest.resetAllMocks)

  it('should render with Button component', () => {
    const { toJSON, getByText } = render(
      <SafeAreaProvider>
        <TermsScreen />
      </SafeAreaProvider>
    )

    const text = getByText(I18nJs.t('terms'))
    expect(text).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
