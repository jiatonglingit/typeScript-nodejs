import { GithubApiService } from "./GithubRequestApi";
import { Repos } from "./Repos";
import { User } from "./User";
import * as _ from 'lodash'


let svc: GithubApiService = new GithubApiService();
console.log();

if (process.argv.length < 3) {
  console.error("请输入用户名");
} else {
  svc.getUserInfo(process.argv[2], (user: User) => {
    svc.getRepos(user.login, (repos: Repos[]) => {
      // console.log(repos);
      let sortRepos = _.sortBy(repos, [(rep: Repos) => rep.size * -1])
      user.reposList = sortRepos
      console.log(user);
    })
  });
}

