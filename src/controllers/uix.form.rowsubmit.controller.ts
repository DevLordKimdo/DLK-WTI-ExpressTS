import { Request, Response } from 'express';
import { UixFormRowSubmitService } from '../services/uix.form.rowsubmit.service';

const uixFormRowSubmitService = new UixFormRowSubmitService();

export const form = async (req: Request, res: Response) => {
    try {

        res.render('uix/form/rowsubmit/form', { });
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
        let list = uixFormRowSubmitService.submit(listTitle, listName, listContent);
        console.log(list);
        res.redirect('/tmpl' + '/uix/form/row-submit/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const formFetch = async (req: Request, res: Response) => {
    try {

        res.render('uix/form/rowsubmit/formfetch', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submitFetch = async (req: Request, res: Response) => {
    try {
        let list = req.body.list;
        console.log(list);
        res.send("Success");
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};