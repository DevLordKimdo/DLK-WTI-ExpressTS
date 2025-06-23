import { Router } from 'express';
import * as wsConnectBasicRoute from '../controllers/ws.connect.basic.controller';

const router = Router();

router.get(['/', '/index'], wsConnectBasicRoute.index);

export default router;