import { Request, Response } from 'express';
import { DbCrudType } from '../types/db.crud.type';

export const index = async (req: Request, res: Response) => {
    try {

        res.render('logic/pattern/wizard/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

// step1
export const step1 = async (req: Request, res: Response) => {
    try {
        let prevValue : DbCrudType = { username : (req.session as any).username }

        res.render('logic/pattern/wizard/step1', { prevValue : prevValue});
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step1back = async (req: Request, res: Response) => {
    try {

        res.redirect('/tmpl' + '/logic/pattern/wizard/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step1next = async (req: Request, res: Response) => {
    try {
        (req.session as any).username = req.body.username;

        res.redirect('/tmpl' + '/logic/pattern/wizard/step2');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

// step2
export const step2 = async (req: Request, res: Response) => {
    try {
        if(!(req.session as any).username) {
            return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
        }

        let prevValue : DbCrudType = { title : (req.session as any).title }

        res.render('logic/pattern/wizard/step2', { prevValue : prevValue });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step2back = async (req: Request, res: Response) => {
    try {

        res.redirect('/tmpl' + '/logic/pattern/wizard/step1');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step2next = async (req: Request, res: Response) => {
    try {
        (req.session as any).title = req.body.title;

        res.redirect('/tmpl' + '/logic/pattern/wizard/step3');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

// step3
export const step3 = async (req: Request, res: Response) => {
    try {
        if(!(req.session as any).username || !(req.session as any).title) {
            return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
        }

        res.render('logic/pattern/wizard/step3', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step3back = async (req: Request, res: Response) => {
    try {

        res.redirect('/tmpl' + '/logic/pattern/wizard/step2');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const step3submit = async (req: Request, res: Response) => {
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

/*
url 파라미터 값과 함께 get으로 요청 받으면
url 파라미터 값(?param=value) 이런 값들을 세션기록 및 제거 후 리다이렉트 시키는 구조.
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
*/