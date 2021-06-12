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
exports.GithubApiService = void 0;
var request = __importStar(require("request"));
var Repos_1 = require("./Repos");
var User_1 = require("./User");
var options = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (username, cb) {
        request.get("https://api.github.com/users/" + username, options, function (error, response, body) {
            // console.log(body);
            var user = new User_1.User(body);
            console.log(user);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (username, cb) {
        request.get("https://api.github.com/users/" + username + "/repos", options, function (error, response, body) {
            var reps = body.map(function (repo) { return new Repos_1.Repos(repo); });
            cb(reps);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
