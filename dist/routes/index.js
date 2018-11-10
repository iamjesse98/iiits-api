"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultRoutes_1 = require("./defaultRoutes");
var studentRoutes_1 = require("./studentRoutes");
exports.default = new Map([
    ['/', defaultRoutes_1.default],
    ['/student', studentRoutes_1.default]
var oauthRoutes_1 = require("./oauthRoutes");
var courseRoutes_1 = require("./courseRoutes");
var facultyRoutes_1 = require("./facultyRoutes");
exports.default = new Map([
    ['/', defaultRoutes_1.default],
    ['/oauth', oauthRoutes_1.default],
    ['/course', courseRoutes_1.default],
    ['/faculty', facultyRoutes_1.default]
]);
//# sourceMappingURL=index.js.map