import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    try {


        res.render('logic/pattern/wizard/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step1 = async (req: Request, res: Response) => {
    try {


        res.render('logic/pattern/wizard/step1', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step2 = async (req: Request, res: Response) => {
    try {
        if(Object.keys(req.query).length > 0) {
            (req.session as any).username = req.query.username;
            return res.redirect('/tmpl' + '/logic/pattern/wizard/step2');
        }

        if(!(req.session as any).username) {
            return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
        }

        res.render('logic/pattern/wizard/step2', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step3 = async (req: Request, res: Response) => {
    try {
        if(Object.keys(req.query).length > 0) {
            (req.session as any).title = req.query.title;
            return res.redirect('/tmpl' + '/logic/pattern/wizard/step3');
        }

        if(!(req.session as any).username || !(req.session as any).title) {
            return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
        }

        res.render('logic/pattern/wizard/step3', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submit = async (req: Request, res: Response) => {
    try {
        console.log('username:', (req.session as any).username);
        console.log('   title:', (req.session as any).title);
        console.log(' content:', req.body.content);

        delete (req.session as any).username;
        delete (req.session as any).title;

        res.redirect('/tmpl' + '/logic/pattern/wizard/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};