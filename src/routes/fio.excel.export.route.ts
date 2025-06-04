import { Router } from 'express';
import * as fioExcelExportController from '../controllers/fio.excel.export.controller';

const router = Router();

router.get(['/', '/index'], fioExcelExportController.index);
router.get('/down-excel', fioExcelExportController.downExcel);
router.get('/down-excel-enhance', fioExcelExportController.downExcelEnhance);

export default router;