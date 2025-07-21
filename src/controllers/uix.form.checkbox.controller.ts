import { Request, Response } from 'express';
import { UixFormCheckboxService } from '../services/uix.form.checkbox.service';
import { UixFormType } from '../types/uix.form.type';

const uixFormCheckboxService = new UixFormCheckboxService();

export const list = async (req: Request, res: Response) => {
    try {
        let list = uixFormCheckboxService.list();
        res.render('uix/form/checkbox/list', { list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const copy = async (req: Request, res: Response) => {
    try {
        let checkIdx = [];

        // checkbox가 없는 상태에서 copy 했을 시 작동을 중지하는 안전장치
        if(req.body.checkIdx) {
            // checkIdx 값이 2개 이상일때는 배열로 들어오나 1개 일때는 String 값이 되므로 강제적으로 배열 타입으로 지정해주는 작업
            checkIdx = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
        }
        let idxList: string = JSON.stringify(checkIdx);
        uixFormCheckboxService.copy(idxList);

        res.redirect('/tmpl' + '/uix/form/checkbox/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        let idxList = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
        let checkIdx: string = JSON.stringify(idxList);
        let {title, name, content, hit} = req.body;
        let form: UixFormType = {title, name, content, hit, checkIdx};
        uixFormCheckboxService.update(form);

        res.redirect('/tmpl' + '/uix/form/checkbox/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        let checkIdx: string = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
        let idxList = JSON.stringify(checkIdx);
        uixFormCheckboxService.delete(idxList);
        res.redirect('/tmpl' + '/uix/form/checkbox/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

// better-sqlite3 모듈을 이용해 SQLite DB 쿼리 사용 시
// ... WHERE idx IN (:idx)
// ...
// db.prepare(qry).run({ ... , idx : params.idx });
// 이렇게 IN절에 직접 배열을 넣어 쿼리문 실행하는게 제한적
// 그래서
// ... WHERE idx IN (SELECT value FROM json_each(:idx))
// ...
// db.prepare(qry).run({ ... , idx : JSON.stringify(params.idx) });
// 이런식으로 JSON.stringify(array) 변환한 데이터를 넣어줘야 하는 행위를 해야함.
// 이렇게가 아니면
// params.idx = params.idx.join(',')
// ...
// ... WHERE idx IN (" + params.idx + ")
// 이렇게 db.prepare(qry).run({}); 안에 파라미터 값을 넣는게 아니라
// 직접 쿼리문 안에 파라미터 값을 넣는 방법이 있는데(하기전에 배열 파라미터를 해체시킴)
// 이건 SQLinjection 공격에 취약하므로 하지 말이야함.