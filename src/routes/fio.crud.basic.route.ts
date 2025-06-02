import { Router } from 'express';
import * as fioCrudController from '../controllers/fio.crud.basic.controller';

const router = Router();

router.get(['/', '/list'], fioCrudController.list);
router.get('/create', fioCrudController.createForm);
router.post('/create', fioCrudController.createFile);
router.get('/read/:name', fioCrudController.read);
router.post('/update/:preName', fioCrudController.update);
router.get('/delete/:name', fioCrudController.deleteFile);

export default router;