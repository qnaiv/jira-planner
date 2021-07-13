<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <form class="mb-4">
        <v-text-field
          v-model="sprintId"
          label="SprintID"
        />
        <v-btn depressed @click="search()">
          Search
        </v-btn>
      </form>
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left" />
              <th class="text-left">
                Status
              </th>
              <th class="text-left">
                Key
              </th>
              <th class="text-left">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(issue) in jiraIssues"
              :key="issue.id"
            >
              <td><v-img :src="issue.type.icon" /></td>
              <td>{{ issue.status.name }}</td>
              <td><a :href="browseUrl + issue.key" target="_blank">{{ issue.key }}</a></td>
              <td>{{ issue.title }}</td>
              <td>{{ issue.description }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { authStore, issueStore } from '~/store'

@Component
export default class Index extends Vue {
  sprintId: string = ''
  jiraIssues: any = []
  browseUrl: string = ''

  created () {
    authStore.loadAuth()
    this.browseUrl = authStore.authInfo.domain + '/browse/'
  }

  async search () {
    // スプリントIDを基にデータ取得（リポジトリ層）
    await issueStore.loadIssues(this.sprintId)
    this.jiraIssues = issueStore.issues
  }
}
</script>
