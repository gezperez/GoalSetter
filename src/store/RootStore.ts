import { AuthStore } from './AuthStore'

export class RootStore {
  authStore = new AuthStore(this)
}

export const typeStore = typeof RootStore
