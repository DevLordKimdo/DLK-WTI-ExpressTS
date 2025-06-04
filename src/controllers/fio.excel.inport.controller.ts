import { Request, Response } from 'express';
import { fioPath } from '../config';

export const form = async (req: Request, res: Response) => {
    try {

        res.render('fio/excel/inport/form', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
}