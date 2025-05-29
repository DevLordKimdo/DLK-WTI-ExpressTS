import { Router } from 'express';
import * as dbCrudController from '../controllers/db.crud.basic.controller';

const router = Router();

router.get(['/', '/list'], dbCrudController.getList);
router.get('/create', dbCrudController.getCreateForm);
router.post('/create', dbCrudController.createPost);
router.get('/read/:idx', dbCrudController.getPost);
router.post('/update/:idx', dbCrudController.updatePost);
router.get('/delete/:idx', dbCrudController.deletePost);

export default router;