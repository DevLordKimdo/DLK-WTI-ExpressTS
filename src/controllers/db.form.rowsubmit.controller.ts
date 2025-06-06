import { Request, Response } from 'express';
import { DbFormRowSubmitService } from '../services/db.form.rowsubmit.service';

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
        let listTitle  : string[] = req.body.title;
        let listName   : string[] = req.body.name;
        let listContent: string[] = req.body.content;
        dbFormRowSubmitService.submit(listTitle, listName, listContent);
        res.redirect('/tmpl' + '/db/form/row-submit/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};