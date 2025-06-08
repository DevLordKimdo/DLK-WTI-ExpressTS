import { Request, Response } from 'express';
import { DbTransactionalBasicService } from '../services/db.transactional.basic.service';
import { DbCrudType } from '../types/db.crud.type';

const dbTransactionalBasicService = new DbTransactionalBasicService();

export const form = async (req: Request, res: Response) => {
    try {

        res.render('db/transactional/basic/form', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submit = async (req: Request, res: Response) => {
    try {
        let errorOption: string = req.body.errorOption;
        let transOption: string = req.body.transOption;
        let {name, title, content} = req.body;
        let form: DbCrudType = {name, title, content};
        let errorForm: DbCrudType = {};

        dbTransactionalBasicService.submit(form, errorForm, errorOption, transOption);
        res.redirect('/tmpl' + '/db/transactional/basic/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};