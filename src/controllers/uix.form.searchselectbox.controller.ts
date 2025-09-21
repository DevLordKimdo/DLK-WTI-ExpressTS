import { Request, Response } from 'express';
import { UixFormSearchSelectboxService } from '../services/uix.form.searchselectbox.service';
import { UixFormType } from '../types/uix.form.type';

const uixFormSearchSelectboxService = new UixFormSearchSelectboxService();

export const form = async (req: Request, res: Response) => {
    try {

        let listUser = uixFormSearchSelectboxService.listUser();
        res.render('uix/form/searchselectbox/form', { listUser : listUser });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submit = async (req: Request, res: Response) => {
    try {

        console.log('username : ',req.body.username);
        console.log('manages  : ',req.body.manages);

        res.redirect('/tmpl' + '/uix/form/search-selectbox/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};