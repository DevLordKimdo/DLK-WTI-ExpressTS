import { Request, Response } from 'express';
import { DbSearchBasicService } from '../services/db.search.basic.service';
import { DbSearchType } from '../types/db.search.type';

const dbSearchBasicService = new DbSearchBasicService();

export const list = async (req: Request, res: Response) => {
    try {
        let search: DbSearchType = {};
        let list: DbSearchType[] = dbSearchBasicService.search(search);
        res.render('db/search/basic/list', { list : list , search : search });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const search = async (req: Request, res: Response) => {
    try {
        let search: DbSearchType = req.body;
        let list: DbSearchType[] = dbSearchBasicService.search(search);
        res.render('db/search/basic/list', { list : list , search : search });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};