
export type IssueType = {
  id: string;
  icon: string;
  name: string;
}
export type IssueStatus = {
  id: string;
  name: string;
}

export interface IssueInput{
  id: string,
  key: string,
  title: string,
  type: IssueType,
  status: IssueStatus
}

export class Issue {
    id: string
    key: string
    title: string
    type: IssueType
    status: IssueStatus

    constructor (input: IssueInput) {
      this.id = input.id
      this.key = input.key
      this.title = input.title
      this.type = input.type
      this.status = input.status
    }
}
