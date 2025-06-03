import { Router } from 'express';
import * as fioBoardBasicController from '../controllers/fio.board.basic.controller';

const router = Router();

router.get(['/', '/list'], fioBoardBasicController.list);
router.post('/upload', fioBoardBasicController.upload);

export default router;