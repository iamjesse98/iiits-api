"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllerUtils_1 = require("../controllers/controllerUtils");
var facultyControllers_1 = require("../controllers/facultyControllers");
var router = new express_1.Router();
router.get('/', controllerUtils_1.onlyPost)
    .post('/facultyread', facultyControllers_1.facultyRead)
    .post('/faculty-create', facultyControllers_1.facultyCreate)
    .post('/faculty-update', facultyControllers_1.facultyUpdate)
    .post('/faculty-delete', facultyControllers_1.facultyDelete);
exports.default = router;
//# sourceMappingURL=facultyRoutes.js.map