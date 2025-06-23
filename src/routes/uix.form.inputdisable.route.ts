import { Router } from 'express';
import * as uixFormInputdisableRoute from '../controllers/uix.form.inputdisable.controller';

const router = Router();

router.get(['/', '/form'], uixFormInputdisableRoute.form);
router.post('/submit', uixFormInputdisableRoute.submit);

export default router;