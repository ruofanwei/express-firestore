import { Router } from 'express';

import store from './store';


const router: Router = Router();

router.use('/', store);


export default router;
