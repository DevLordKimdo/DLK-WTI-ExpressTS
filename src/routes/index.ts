import { Router } from 'express';
import mainRoutes from './main.route';
import dbCrudBasicRoutes from './db.crud.basic.route';
import dbCrudReturnIdxRoutes from './db.crud.returnidx.route';
import dbFormRowSubmitRoute from './db.form.rowsubmit.route';
import fioCrudBasicRoutes from './fio.crud.basic.route';
import fioBoardBasicRoutes from './fio.board.basic.route';
import fioUpdownBasicRoutes from './fio.updown.basic.route';
import fioExcelExportRoutes from './fio.excel.export.route';
import fioExcelInportRoutes from './fio.excel.inport.route';
import uixFormRowSubmitRoute from './uix.form.rowsubmit.route';

const router = Router();

router.use('/', mainRoutes);
router.use('/tmpl/db/crud/basic', dbCrudBasicRoutes);
router.use('/tmpl/db/crud/return-idx', dbCrudReturnIdxRoutes);
router.use('/tmpl/db/form/row-submit', dbFormRowSubmitRoute);
router.use('/tmpl/fio/crud/basic', fioCrudBasicRoutes);
router.use('/tmpl/fio/board/basic', fioBoardBasicRoutes);
router.use('/tmpl/fio/updown/basic', fioUpdownBasicRoutes);
router.use('/tmpl/fio/excel/export', fioExcelExportRoutes);
router.use('/tmpl/fio/excel/inport', fioExcelInportRoutes);
router.use('/tmpl/uix/form/row-submit', uixFormRowSubmitRoute);

export default router;