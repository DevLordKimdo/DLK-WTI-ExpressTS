import { Router } from 'express';
import * as mainController from '../controllers/main.controller';

const router = Router();

router.get('/', mainController.getMainPage);

export default router;