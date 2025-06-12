import { Request, Response } from 'express';
import { AuthCookieBasicService } from '../services/auth.cookie.basic.service';

const authCookieBasicService = new AuthCookieBasicService();

export const index = async (req: Request, res: Response) => {
    try {

        res.render('auth/cookie/basic/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const requestBackend = async (req: Request, res: Response) => {
    try {

        authCookieBasicService.requestBackend(req, res);
        res.redirect('/tmpl' + '/auth/cookie/basic/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const checkCookie = async (req: Request, res: Response) => {
    try {

        authCookieBasicService.checkCookie(req);
        res.redirect('/tmpl' + '/auth/cookie/basic/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};