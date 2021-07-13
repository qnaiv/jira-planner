/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import IssueStore from '~/store/IssueStore'
import AuthStore from '~/store/AuthStore'

let issueStore: IssueStore
let authStore: AuthStore

function initialiseStores (store: Store<any>): void {
  issueStore = getModule(IssueStore, store)
  authStore = getModule(AuthStore, store)
}

export { initialiseStores, issueStore, authStore }
