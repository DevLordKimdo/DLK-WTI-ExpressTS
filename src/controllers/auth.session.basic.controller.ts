import { Request, Response } from 'express';
import { AuthSessionBasicService } from '../services/auth.session.basic.service';

const authSessionBasicService = new AuthSessionBasicService();

export const index = async (req: Request, res: Response) => {
    try {

        res.render('auth/session/basic/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const requestSession = async (req: Request, res: Response) => {
    try {

        authSessionBasicService.requestSession(req);
        res.redirect('/tmpl' + '/auth/session/basic/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const checkSession = async (req: Request, res: Response) => {
    try {

        authSessionBasicService.checkSession(req);
        res.redirect('/tmpl' + '/auth/session/basic/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deleteSession = async (req: Request, res: Response) => {
    try {

        authSessionBasicService.deleteSession(req);
        res.redirect('/tmpl' + '/auth/session/basic/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};