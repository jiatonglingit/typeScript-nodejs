"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubRequestApi_1 = require("./GithubRequestApi");
var _ = __importStar(require("lodash"));
var svc = new GithubRequestApi_1.GithubApiService();
console.log();
if (process.argv.length < 3) {
    console.error("请输入用户名");
}
else {
    svc.getUserInfo(process.argv[2], function (user) {
        svc.getRepos(user.login, function (repos) {
            // console.log(repos);
            var sortRepos = _.sortBy(repos, [function (rep) { return rep.size * -1; }]);
            user.reposList = sortRepos;
            console.log(user);
        });
    });
}
