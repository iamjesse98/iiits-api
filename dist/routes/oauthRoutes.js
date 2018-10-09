"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var oauthControllers_1 = require("../controllers/oauthControllers");
var router = new express_1.Router();
router.get('/', oauthControllers_1.oauthPing);
router.post('/login', oauthControllers_1.oauthLogin);
exports.default = router;
//# sourceMappingURL=oauthRoutes.js.map