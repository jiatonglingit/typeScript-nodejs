import { Repos } from "./Repos"

export class User {
  login: string
  id: number
  type: string
  created_at: string
  reposList: Repos[] = []
  constructor(response: User) {
    this.login = response.login
    this.id = response.id
    this.type = response.type
    this.created_at = response.created_at
  }
}