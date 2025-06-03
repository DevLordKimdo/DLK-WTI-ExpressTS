import { Router } from 'express';
import mainRoutes from './main.route';
import dbCrudBasicRoutes from './db.crud.basic.route';
import fioCrudBasicRoutes from './fio.crud.basic.route';
import fioBoardBasicRoutes from './fio.board.basic.route';

const router = Router();

router.use('/', mainRoutes);
router.use('/tmpl/db/crud/basic', dbCrudBasicRoutes);
router.use('/tmpl/fio/crud/basic', fioCrudBasicRoutes);
router.use('/tmpl/fio/board/basic', fioBoardBasicRoutes);

export default router;