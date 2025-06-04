import { Router } from 'express';
import * as fioBoardBasicController from '../controllers/fio.board.basic.controller';
import { upload } from '../middleware/fio.board.basic.middleware';

const router = Router();

router.get(['/', '/list'], fioBoardBasicController.list);
router.post('/upload', upload, fioBoardBasicController.upload);

export default router;