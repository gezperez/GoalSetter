import { isNil } from 'lodash'
import { observable } from 'mobx'

const token = 'Bearer JWT'

export class AuthStore {
  @observable accessToken: string | undefined

  get isAuthenticated() {
    return !isNil(this.accessToken)
  }

  setAccessToken() {
    this.accessToken = token
  }
}
