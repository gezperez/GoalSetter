import React from 'react'
import { render } from '@testing-library/react-native'

import I18nJs from '~/__mocks__/react-native-i18n'
import Title from './Title'

describe('Title', () => {
  afterEach(jest.resetAllMocks)

  it('should render with required props', () => {
    const { toJSON, getByText } = render(<Title title={I18nJs.t('signUpHeaderTitle')} />)

    const title = getByText(I18nJs.t('signUpHeaderTitle'))

    expect(title).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with non required props', () => {
    const { toJSON, getByText } = render(
      <Title title={I18nJs.t('signUpHeaderTitle')} subtitle={I18nJs.t('signUpHeaderSubtitle')} />
    )

    const title = getByText(I18nJs.t('signUpHeaderTitle'))
    const subtitle = getByText(I18nJs.t('signUpHeaderSubtitle'))

    expect(title).toBeDefined()
    expect(subtitle).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
