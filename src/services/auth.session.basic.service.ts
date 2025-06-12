import { Request, Response }    from 'express';

export class AuthSessionBasicService {

    requestSession(req: Request): void {
        req.session.sessionName = 'value';
    }

    checkSession(req: Request): void {
        console.log('sessionName : ' , req.session.sessionName);
    }

    deleteSession(req: Request): void {
        delete req.session.sessionName;
    }

}