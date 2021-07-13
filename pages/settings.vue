<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <form>
        <v-text-field
          v-model="userName"
          label="UserName"
        />
        <v-text-field
          v-model="token"
          label="API Token"
        />
        <v-text-field
          v-model="domain"
          label="Domain"
        />
        <v-btn @click="saveAuth()">
          Save
        </v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { authStore } from '~/store'

@Component
export default class Settings extends Vue {
    userName: string = ''
    token: string = ''
    domain: string = ''

    created () {
      authStore.loadAuth()
      this.userName = authStore.authInfo.email
      this.token = authStore.authInfo.token
      this.domain = authStore.authInfo.domain
    }

    saveAuth () {
      if (this.domain.substr(-1, 1) === '/') {
        this.domain = this.domain.slice(0, -1)
      }
      authStore.saveAuth({
        email: this.userName,
        token: this.token,
        domain: this.domain
      })
    }
}
</script>

<style>

</style>
