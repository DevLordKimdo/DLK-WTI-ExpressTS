import { Router } from 'express';
import * as fioUpdownBasicController from '../controllers/fio.updown.basic.controller';
import { singleUpload, multipleUpload } from '../middleware/fio.updown.basic.middleware';

const router = Router();

router.get(['/', '/form'], fioUpdownBasicController.form);
router.get('/sample-download', fioUpdownBasicController.sampleDownload);
router.post('/single-upload', singleUpload, fioUpdownBasicController.singleUpload);
router.post('/multi-upload', multipleUpload, fioUpdownBasicController.multiUpload);
router.post('/delete-target', fioUpdownBasicController.deleteTarget);
router.get('/delete-all', fioUpdownBasicController.deleteAll);

export default router;