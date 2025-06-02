import { Router } from 'express';
import * as dbCrudController from '../controllers/db.crud.basic.controller';

const router = Router();

router.get(['/', '/list'], dbCrudController.list);
router.get('/create', dbCrudController.createForm);
router.post('/create', dbCrudController.createPost);
router.get('/read/:idx', dbCrudController.read);
router.post('/update/:idx', dbCrudController.update);
router.get('/delete/:idx', dbCrudController.deletePost);

export default router;