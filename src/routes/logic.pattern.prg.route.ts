import { Router } from 'express';
import * as logicPatternPrgController from '../controllers/logic.pattern.prg.controller';

const router = Router();

router.get(['/', '/index'], logicPatternPrgController.index);
router.post('/submit', logicPatternPrgController.submit);
router.get('/done', logicPatternPrgController.done);

export default router;