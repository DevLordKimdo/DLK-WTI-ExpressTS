import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    try {

        res.render('uix/popup/sendvalue/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const popup = async (req: Request, res: Response) => {
    try {

        res.render('uix/popup/sendvalue/popup', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};