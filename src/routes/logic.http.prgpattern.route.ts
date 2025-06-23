import { Router } from 'express';
import * as logicHttpPrgPatternController from '../controllers/logic.http.prgpattern.controller';

const router = Router();

router.get(['/', '/index'], logicHttpPrgPatternController.index);
router.post('/submit-post', logicHttpPrgPatternController.submitPost);

export default router;