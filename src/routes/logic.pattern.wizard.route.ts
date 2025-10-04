import { Router } from 'express';
import * as logicPatternWizardController from '../controllers/logic.pattern.wizard.controller';

const router = Router();

router.get(['/', '/index'], logicPatternWizardController.index);

router.get('/step1', logicPatternWizardController.step1);
router.post('/step1/next', logicPatternWizardController.step1next);
router.post('/step1/back', logicPatternWizardController.step1back);

router.get('/step2', logicPatternWizardController.step2);
router.post('/step2/next', logicPatternWizardController.step2next);
router.post('/step2/back', logicPatternWizardController.step2back);

router.get('/step3', logicPatternWizardController.step3);
router.post('/step3/back', logicPatternWizardController.step3back);
router.post('/step3/submit', logicPatternWizardController.step3submit);

export default router;