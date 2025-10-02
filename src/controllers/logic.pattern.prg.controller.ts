import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    try {
        let preContent = (req.session as any).content || null;
        delete (req.session as any).content;

        res.render('logic/pattern/prg/index', { preContent : preContent });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submit = async (req: Request, res: Response) => {
    try {
        (req.session as any).content = req.body.content;

        res.redirect('/tmpl' + '/logic/pattern/prg/done');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const done = async (req: Request, res: Response) => {
    try {

        res.render('logic/pattern/prg/done', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};