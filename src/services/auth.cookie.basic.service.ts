import { Request, Response }    from 'express';

export class AuthCookieBasicService {

    requestBackend(req: Request, res: Response): void {

        res.cookie('backendCookie','value',{
            path     : req.baseUrl,        // 경로
            maxAge   : 3600 * 1000,        // 유효시간
            httpOnly : true,               // 클라이언트 스크립트에서 접근 불가 
            secure   : true,               // 보안옵션(https 연결 전용 옵션)
            // domain: 'example.com'       // 도메인 설정 (필요한 경우)
        });

    }

    checkCookie(req: Request): void {

        console.log(req.cookies);

    }

}