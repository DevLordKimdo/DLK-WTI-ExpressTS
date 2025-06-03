import { Router } from 'express';
import * as fioCrudBasicController from '../controllers/fio.crud.basic.controller';

const router = Router();

router.get(['/', '/list'], fioCrudBasicController.list);
router.get('/create', fioCrudBasicController.createForm);
router.post('/create', fioCrudBasicController.createFile);
router.get('/read/:name', fioCrudBasicController.read);
router.post('/update/:preName', fioCrudBasicController.update);
router.get('/delete/:name', fioCrudBasicController.deleteFile);

export default router;