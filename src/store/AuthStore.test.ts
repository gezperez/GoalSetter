import { runInAction } from 'mobx'

import { AuthStore } from './AuthStore'
import { RootStore } from './RootStore'

describe('AuthStore', () => {
  let store: RootStore, authStore: AuthStore

  beforeEach(() => {
    jest.mock('./RootStore')

    store = new RootStore()
    authStore = new AuthStore(store)
  })

  it('should have default values', () => {
    expect(authStore.store).toBe(store)
    expect(authStore.accessToken).toBeUndefined()
  })

  describe('computed', () => {
    it('should return false if accessToken is undefined', () => {
      runInAction(() => {
        authStore.accessToken = undefined
      })
      expect(authStore.isAuthenticated).toBeFalsy()
    })

    it('should return true if accessToken is string', () => {
      runInAction(() => {
        authStore.accessToken = 'Bearer JWT'
      })
      expect(authStore.isAuthenticated).toBeTruthy()
    })
  })

  describe('actions', () => {
    it('should set accessToken', () => {
      runInAction(() => {
        authStore.setAccessToken()
      })

      expect(authStore.accessToken).toBe('Bearer JWT')
    })

    it('should unset accessToken', () => {
      runInAction(() => {
        authStore.unSetAccessToken()
      })

      expect(authStore.accessToken).toBeUndefined()
    })
  })
})
