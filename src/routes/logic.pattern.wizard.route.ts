import { Router } from 'express';
import * as logicPatternWizardController from '../controllers/logic.pattern.wizard.controller';

const router = Router();

router.get(['/', '/index'], logicPatternWizardController.index);
router.get('/step1', logicPatternWizardController.step1);
router.get('/step2', logicPatternWizardController.step2);
router.get('/step3', logicPatternWizardController.step3);
router.post('/submit', logicPatternWizardController.submit);

export default router;