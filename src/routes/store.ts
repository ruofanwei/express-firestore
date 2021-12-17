const express = require('express');
import { Router } from 'express';
import StoreController from '../controller/storeController';



const router: Router = Router();
require('dotenv').config();

// create store
router.post(
  '/store',
  StoreController.buildStore
);

export default router;
