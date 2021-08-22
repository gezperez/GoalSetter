import { isNil } from 'lodash'
import { observable } from 'mobx'

import { RootStore } from './RootStore'

const token = 'Bearer JWT'

export class AuthStore {
  store: RootStore

  @observable
  accessToken: string | undefined

  constructor(store: RootStore) {
    this.store = store
  }

  /**
   * Computed values
   */

  get isAuthenticated() {
    return !isNil(this.accessToken)
  }

  /**
   * Actions
   */

  setAccessToken() {
    this.accessToken = token
  }

  unSetAccessToken() {
    this.accessToken = undefined
  }
}
