import * as functions from "firebase-functions";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fireorm from "fireorm";
import { Request, Response, NextFunction } from "express";
import express = require("express");
import routes from "./routes";

// firestore
//import routes from './fireStoreRoutes';
const serviceAccount = require("../firestore.creds.json");
const app = express();
initializeApp({
  credential: cert(serviceAccount),
  databaseURL: `https://${process.env.API_PROJECT}.firebaseio.com`,
});
const firestore = getFirestore();
firestore.settings({
  timestampsInSnapshots: true,
  ignoreUndefinedProperties: true,
});
fireorm.initialize(firestore, {
  validateModels: true,
});

app.use("/fire/", routes);
// error handling middleware
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Ready to Go!");
});
