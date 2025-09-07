import { Request, Response } from 'express';
import path       from 'path';
import fsPromises from 'fs/promises';

export const index = async (req: Request, res: Response) => {
    try {

        res.render('uix/popup/terms/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const terms = async (req: Request, res: Response) => {
    try {
        const terms        : string = req.params.terms;
        const termsPath    : string = path.join('./views', `uix/popup/terms/${terms}.html`);
        const termsContent : string = await fsPromises.readFile(termsPath, 'utf8');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(termsContent);
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};