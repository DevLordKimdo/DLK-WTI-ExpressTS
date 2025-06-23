import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    try {

        res.render('ws/connect/basic/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};