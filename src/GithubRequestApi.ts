import * as request from "request"
import { Repos } from "./Repos";
import { User } from "./User";


const options = {
  headers: {
    "User-Agent": "request"
  },
  json: true
}

export class GithubApiService {
  getUserInfo(username: string, cb: (user: User) => any) {
    request.get("https://api.github.com/users/" + username, options, (error: any, response: any, body: any) => {
      // console.log(body);
      let user: User = new User(body)
      console.log(user);
      cb(user)
    })
  }
  getRepos(username: string, cb: (repos: Repos[]) => any) {
    request.get("https://api.github.com/users/" + username + "/repos", options, (error: any, response: any, body: any) => {
      let reps: Repos[] = body.map((repo: any) => new Repos(repo))
      cb(reps)
    })
  }
}