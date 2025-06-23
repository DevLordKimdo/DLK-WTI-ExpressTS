import { Router } from 'express';
import * as uixPaginationBasicRoute from '../controllers/uix.pagination.basic.controller';

const router = Router();

router.get(['/','/list','/list/:currentPageIndex'], uixPaginationBasicRoute.getList);
router.post('/list/:currentPageIndex', uixPaginationBasicRoute.postList);

export default router;