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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const fireorm = __importStar(require("fireorm"));
const express = require("express");
const routes_1 = __importDefault(require("./routes"));
// firestore
//import routes from './fireStoreRoutes';
const serviceAccount = require("../firestore.creds.json");
const app = express();
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccount),
    databaseURL: `https://${process.env.API_PROJECT}.firebaseio.com`,
});
const firestore = (0, firestore_1.getFirestore)();
firestore.settings({
    timestampsInSnapshots: true,
    ignoreUndefinedProperties: true,
});
fireorm.initialize(firestore, {
    validateModels: true,
});
app.use("/fire/", routes_1.default);
// error handling middleware
app.use(function (err, req, res, next) {
    //console.log(err);
    res.status(422).send({ error: err.message });
});
// listen for requests
app.listen(process.env.port || 4000, function () {
    console.log("Ready to Go!");
});
//# sourceMappingURL=index.js.map