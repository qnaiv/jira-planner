import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
import { AuthInfo, IAuthInfoInput } from '~/entities/AuthInfo'

export interface IAuthState {
  email: string
  token: string
  domain: string
}

@Module({ stateFactory: true, namespaced: true, name: 'AuthStore' })
export default class AuthStore extends VuexModule {
  authInfo: AuthInfo = AuthInfo.empty()

  @Mutation
  setAuth (authInfo: AuthInfo) {
    this.authInfo = authInfo
  }

  @Action({
    rawError: true
  })
  loadAuth () {
    const storedAuthInfo = JSON.parse(localStorage.getItem('AuthInfo') as string) as IAuthInfoInput
    const auth = new AuthInfo(storedAuthInfo)
    this.setAuth(auth)
  }

  @Action({
    rawError: true
  })
  saveAuth (authInfo: IAuthInfoInput) {
    localStorage.setItem('AuthInfo', JSON.stringify(authInfo))
    this.setAuth(new AuthInfo(authInfo))
  }
}
