import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    try {

        res.render('uix/iframe/basic/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const content = async (req: Request, res: Response) => {
    try {

        res.render('uix/iframe/basic/content', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};