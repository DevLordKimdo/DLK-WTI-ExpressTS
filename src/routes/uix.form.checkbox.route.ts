import { Router } from 'express';
import * as uixFormCheckboxRoute from '../controllers/uix.form.checkbox.controller';

const router = Router();

router.get(['/', '/list'], uixFormCheckboxRoute.list);
router.post('/copy', uixFormCheckboxRoute.copy);
router.post('/update', uixFormCheckboxRoute.update);
router.post('/delete', uixFormCheckboxRoute.deletePost);

export default router;