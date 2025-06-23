import { Request, Response }    from 'express';

declare module 'express-session' {
    interface SessionData {
        sessionName?: string;
    }
}

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

// 해설
// req.session 을 사용하기 위해서는 해당 타입을 지정해야 하는데 그 지정 설정이 복잡. 그나마 가장 간단한 방법으로 구현한 결과.
// 현재 방법 : 프로젝트 구조 상 declare module 관련 코드를 현재 파일(service) 에 넣었음.
// 다른 대안1
// declare module를 외부로 빼기. root/src/types/session.d.ts 경로에 파일생성 후 declare module 코드를 작성
// 그리고 root/src/app.ts 에 해당 파일을 import 하기. (import './types/session';)
// 다른 대안2
// (req.session as any).sessionName = 'value'; 로 쓰기. req.session as any 를 사용함으로써 사실상 타입 체크를 포기함. 이런식으로 코드 작성은 위험.