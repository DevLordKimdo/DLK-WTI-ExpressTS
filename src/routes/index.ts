import { Router } from 'express';
import mainRoutes from './main.route';
import dbCrudBasicRoutes from './db.crud.basic.route';

const router = Router();

router.use('/', mainRoutes);
router.use('/tmpl/db/crud/basic', dbCrudBasicRoutes);

export default router;