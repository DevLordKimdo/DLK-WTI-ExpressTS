import { Request, Response } from 'express';
import { UixPaginationBasicService } from '../services/uix.pagination.basic.service';
import { PaginationTotal }    from '../utils/pagination.util';
import { UixPaginationType } from '../types/uix.pagination.type';
import { DbCrudType } from '../types/db.crud.type';

const uixPaginationBasicService = new UixPaginationBasicService();

export const getList = async (req: Request, res: Response) => {
    try {

        let currentPageIndex: number = parseInt(req.params.currentPageIndex,10);

        // URL에 페이지 값이 매겨지지 않은 상태로 들어왔을 경우 초기 페이지 값 1을 지정함
        if(!currentPageIndex) { currentPageIndex = 1; }

        let count: number            = uixPaginationBasicService.count();
        let postsPerPage: number     = 10;
        let pageStartIndex: number   = (currentPageIndex - 1) * postsPerPage;
        let page                     = PaginationTotal(currentPageIndex, postsPerPage, count);

        let listSet: UixPaginationType = {};
            listSet.postsPerPage       = postsPerPage;
            listSet.pageStart          = pageStartIndex;

        let list: DbCrudType[] = uixPaginationBasicService.list(listSet);    

        res.render('uix/pagination/basic/list', { page : page , list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const postList = async (req: Request, res: Response) => {
    try {

        let currentPageIndex: number = parseInt(req.params.currentPageIndex,10);

        let count: number            = uixPaginationBasicService.count();
        let postsPerPage: number     = 10;
        let pageStartIndex: number   = (currentPageIndex - 1) * postsPerPage;
        let page                     = PaginationTotal(currentPageIndex, postsPerPage, count);

        let listSet: UixPaginationType = {};
            listSet.postsPerPage       = postsPerPage;
            listSet.pageStart          = pageStartIndex;

        let list: DbCrudType[] = uixPaginationBasicService.list(listSet);    

        res.render('uix/pagination/basic/list', { page : page , list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

// 페이징 기능
// Util 패키지의 UtilPagination 로 따로 빼놓음.
// 같은 코드를 get과 post로 빼놓은 이유는 템플릿 페이지에서 페이지 전환 시 post로 데이터를 보내기 때문.
// getList 만 쓰고싶다면 listhref.ejs 를 쓰면 된다.
// 참고 : 첫번째 페이지 번호와 마지막 페이지 번호 출력 기능도 있다.
// startPageIndex 와 lastPageIndex