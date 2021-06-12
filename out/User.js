"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(response) {
        this.reposList = [];
        this.login = response.login;
        this.id = response.id;
        this.type = response.type;
        this.created_at = response.created_at;
    }
    return User;
}());
exports.User = User;
