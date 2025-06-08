import { Router } from 'express';
import * as DbSearchBasicRoute from '../controllers/db.search.basic.controller';

const router = Router();

router.get(['/', '/list'], DbSearchBasicRoute.list);
router.post('/list', DbSearchBasicRoute.search);

export default router;