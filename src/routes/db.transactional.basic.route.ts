import { Router } from 'express';
import * as DbTransactionalBasicRoute from '../controllers/db.transactional.basic.controller';

const router = Router();

router.get(['/', '/form'], DbTransactionalBasicRoute.form);
router.post('/form', DbTransactionalBasicRoute.submit);

export default router;