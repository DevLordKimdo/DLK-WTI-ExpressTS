import { Router } from 'express';
import * as fioBoardBasicController from '../controllers/fio.board.basic.controller';
import { multipleUpload } from '../middleware/upload.middleware';

const router = Router();

router.get(['/', '/list'], fioBoardBasicController.list);
router.post('/upload', multipleUpload, fioBoardBasicController.upload);

export default router;