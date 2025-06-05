import { Router } from 'express';
import * as fioExcelInportController from '../controllers/fio.excel.inport.controller';
import { excelUpload } from '../middleware/fio.excel.inport.middleware';

const router = Router();

router.get(['/', '/form'], fioExcelInportController.form);
router.post('/upload', excelUpload, fioExcelInportController.upload);

export default router;