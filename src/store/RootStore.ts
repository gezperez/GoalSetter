import AsyncStorage from '@react-native-async-storage/async-storage'
import { observable } from 'mobx'
import { create } from 'mobx-persist'
import { actionAsync, task } from 'mobx-utils'

import { AuthStore } from './AuthStore'

const hydrate = create({ storage: AsyncStorage, jsonify: true })

export class RootStore {
  authStore = new AuthStore(this)

  @observable
  initialized = false

  /**
   * Actions
   */

  @actionAsync
  async init(): Promise<void> {
    try {
      await task(this.hydrateStores())
    } catch {
      // TODO: Log error
    } finally {
      this.initialized = true
    }
  }

  @actionAsync
  async hydrateStores(): Promise<void> {
    try {
      await task(hydrate('auth-store', this.authStore))
    } catch {
      // TODO: Log error
    }
  }
}

export const typeStore = typeof RootStore
