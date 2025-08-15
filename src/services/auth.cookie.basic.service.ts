import { Request, Response }    from 'express';

export class AuthCookieBasicService {

    requestBackend(req: Request, res: Response): void {

        // 현재 서버 도메인 이름 불러오기
        let serverName  = req.hostname;

        // 현재 서버가 SSL(https) 인증서가 적용되어있는지 확인
        let isSecure    = req.protocol === 'https';
        
        res.cookie('backendCookie','value',{
            path     : '/',                // 경로
            maxAge   : 3600 * 1000,        // 유효시간
            httpOnly : true,               // 클라이언트 스크립트에서 접근 불가 
            secure   : isSecure,           // 보안옵션(https 연결 전용 옵션)
            domain   : serverName,         // 도메인 설정 (필요한 경우)
            sameSite : 'lax',              // 어떤 도메인에서만 사용할 수 있는지 설정. "Strict", "Lax", "None"
        });

    }

    checkCookie(req: Request): void {

        console.log(req.cookies);

    }

}