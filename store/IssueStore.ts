import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { IssueResponse } from './ResponseTypes/IssueResponse'
import { Issue } from '~/entities/Issue/Issue'
import { authStore } from '~/store'
import { $axios } from '~/utils/api'

export interface IIssueState {
  issues: Issue[]
}

async function fetchIssues (sprintId: string): Promise<Issue[]> {
  authStore.loadAuth()
  const authInfo = authStore.authInfo
  if (authInfo.isEmpty()) {
    return []
  }
  const res = await $axios.get('http://localhost:3000/rest/api/3/search',
    {
      auth: {
        username: authInfo.email,
        password: authInfo.token
      },
      params: {
        jql: `Sprint = ${sprintId} AND issuetype in standardIssueTypes() order by created DESC`
      }
    })
  console.log(res)

  const issuesRes = res.data.issues as Array<IssueResponse>

  const issues = issuesRes.map(i => new Issue({
    id: i.id,
    key: i.key,
    title: i.fields.summary,
    type: {
      id: i.fields.issuetype.id,
      icon: i.fields.issuetype.iconUrl,
      name: i.fields.issuetype.name
    },
    status: {
      id: i.fields.status.id,
      name: i.fields.status.name
    }
  }))

  console.log(issues)
  return issues
}

@Module({ stateFactory: true, namespaced: true, name: 'IssueStore' })
export default class IssueStore extends VuexModule {
  issues: Issue[] = []

  @Mutation
  addIssue (issue: Issue) {
    this.issues = [...this.issues, issue]
  }

  @Action({
    rawError: true
  })
  async loadIssues (sprintId: string) {
    const issues = await fetchIssues(sprintId)
    issues.forEach((issue: any) => {
      this.addIssue(issue)
    })
  }
}
