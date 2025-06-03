import { Router } from 'express';
import * as dbCrudBasicController from '../controllers/db.crud.basic.controller';

const router = Router();

router.get(['/', '/list'], dbCrudBasicController.list);
router.get('/create', dbCrudBasicController.createForm);
router.post('/create', dbCrudBasicController.createPost);
router.get('/read/:idx', dbCrudBasicController.read);
router.post('/update/:idx', dbCrudBasicController.update);
router.get('/delete/:idx', dbCrudBasicController.deletePost);

export default router;