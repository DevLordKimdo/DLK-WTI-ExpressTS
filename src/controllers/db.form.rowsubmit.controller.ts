import { Request, Response } from 'express';
import { DbFormRowSubmitService } from '../services/db.form.rowsubmit.service';
import { DbCrudType } from '../types/db.crud.type';

const dbFormRowSubmitService = new DbFormRowSubmitService();

export const form = async (req: Request, res: Response) => {
    try {

        res.render('db/form/rowsubmit/form', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submit = async (req: Request, res: Response) => {
    try {
        let listTitle  : string[]  = req.body.title;
        let listUsername: string[] = req.body.username;
        let listContent: string[]  = req.body.content;
        let form: DbCrudType[] = [];

        for(let i = 0; i < listTitle.length; i++) {
            let temp: DbCrudType = {
                title    : listTitle[i],
                username : listUsername[i],
                content  : listContent[i]
            };
            form.push(temp);
        }

        dbFormRowSubmitService.submit(form);
        
        res.redirect('/tmpl' + '/db/form/row-submit/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};