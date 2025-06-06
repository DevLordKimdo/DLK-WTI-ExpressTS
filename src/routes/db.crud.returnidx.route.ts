import { Router } from 'express';
import * as dbCrudReturnIdxController from '../controllers/db.crud.returnidx.controller';

const router = Router();

router.get(['/','/create'], dbCrudReturnIdxController.createForm);
router.post('/create', dbCrudReturnIdxController.createPost);

export default router;