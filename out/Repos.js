"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
var Repos = /** @class */ (function () {
    function Repos(res) {
        this.id = res.id;
        this.name = res.name;
        this.full_name = res.full_name;
        this.size = res.size;
    }
    return Repos;
}());
exports.Repos = Repos;
