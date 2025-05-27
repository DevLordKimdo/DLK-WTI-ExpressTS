import { Router } from 'express';
import mainRoutes from './main.route';

const router = Router();

// 메인 페이지 라우트
router.use('/', mainRoutes);

export default router;