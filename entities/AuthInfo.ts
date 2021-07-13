export interface IAuthInfoInput{
    email: string
    token: string
    domain: string
}
export class AuthInfo {
    email: string = ''
    token: string = ''
    domain: string = ''
    constructor (input: IAuthInfoInput) {
      if (input === null) { return }
      this.email = input.email
      this.token = input.token
      this.domain = input.domain
    }

    isEmpty () {
      return this.email === '' && this.token === '' && this.domain === ''
    }

    static empty (): AuthInfo {
      return new AuthInfo({ email: '', token: '', domain: '' })
    }
}
