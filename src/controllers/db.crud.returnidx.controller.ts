import { Request, Response } from 'express';
import { DbCrudReturnIdxService } from '../services/db.crud.returnidx.service';
import { DbCrudType } from '../types/db.crud.type';

const dbCrudReturnIdxService = new DbCrudReturnIdxService();

export const createForm = async (req: Request, res: Response) => {
    try {

        res.render('db/crud/returnidx/create', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        let { title, content, username } = req.body;
        let form: DbCrudType = { title, content, username };
        dbCrudReturnIdxService.createPost(form);
        res.redirect('/tmpl' + '/db/crud/return-idx/create');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};