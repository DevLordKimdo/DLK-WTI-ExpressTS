import { Router } from 'express';
import * as fioExcelInportController from '../controllers/fio.excel.inport.controller';

const router = Router();

router.get(['/', '/form'], fioExcelInportController.form);

export default router;