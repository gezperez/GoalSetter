import { AuthStore } from './AuthStore'

export class RootStore {
  authStore: any

  constructor() {
    this.authStore = new AuthStore()
  }
}
