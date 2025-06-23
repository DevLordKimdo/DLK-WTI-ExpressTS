import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    try {
        let value = (req.session as any).temp;
        delete (req.session as any).temp;
        res.render('logic/http/prgpattern/index', {value : value});
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const submitPost = async (req: Request, res: Response) => {
    try {
        let value = req.body.value;
        (req.session as any).temp = value;
        res.redirect('/tmpl' + '/logic/http/prg-pattern/index');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

// PRG패턴 구현
// express 모듈에서는 자바 스프링 처럼 리다이렉트 해줄 때 값을 태워서 보내는 addFlashAttribute() 기능이 없음.
// 세션에 임시 값을 저장 후 리다이렉트 이동 한 다음 임시 세션값을 삭제하는 로직으로 PRG 패턴을 구현함