import { Request, Response } from 'express';
import { DbCrudBasicService } from '../services/db.crud.basic.service';
import { DbCrudType } from '../types/db.crud.type';

const dbCrudBasicService = new DbCrudBasicService();

export const list = async (req: Request, res: Response) => {
    try {
        const list = dbCrudBasicService.list();
        res.render('db/crud/basic/list', { list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const createForm = async (req: Request, res: Response) => {
    try {
        res.render('db/crud/basic/create', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        let { title, content, name } = req.body;
        let form: DbCrudType = { title, content, name };
        dbCrudBasicService.createPost(form);
        res.redirect('/tmpl' + '/db/crud/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const read = async (req: Request, res: Response) => {
    try {
        let idx : number = parseInt(req.params.idx,10);
        dbCrudBasicService.updateHit(idx);
        let read = dbCrudBasicService.read(idx);
        res.render('db/crud/basic/read', { read : read });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        let idx : number = parseInt(req.params.idx,10);
        let { title, content, name } = req.body;
        let form : DbCrudType = { idx, title, content, name };
        dbCrudBasicService.update(form);
        res.redirect('/tmpl' + '/db/crud/basic/read/' + idx);
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        let idx : number = parseInt(req.params.idx,10);
        dbCrudBasicService.deletePost(idx);
        res.redirect('/tmpl' + '/db/crud/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};