"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const express_1 = require("express");
const storeController_1 = __importDefault(require("../controller/storeController"));
const router = (0, express_1.Router)();
require('dotenv').config();
// create store
router.post('/store', storeController_1.default.buildStore);
exports.default = router;
//# sourceMappingURL=store.js.map