import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'
import { configure } from 'mobx'

import 'react-native-gesture-handler/jestSetup'

configure({ enforceActions: 'always' })

jest
  .mock('react-native-reanimated', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Reanimated = require('react-native-reanimated/mock')

    Reanimated.default.call = () => {}

    return Reanimated
  })
  .mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)
