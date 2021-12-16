import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fireorm from "fireorm";
import { Request, Response, NextFunction } from "express";
import express = require("express");

// firestore
//import routes from './fireStoreRoutes';

const app = express();
initializeApp({
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