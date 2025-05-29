import { Request, Response } from 'express';
import { DbCrudModel } from '../models/db.crud.model';

const dbCrudModel = new DbCrudModel();

export const getList = async (req: Request, res: Response) => {
    try {
        const list = dbCrudModel.getPostList();
        res.render('db/crud/basic/list', { list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const getCreateForm = async (req: Request, res: Response) => {
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
        dbCrudModel.createPost({ title, content, name });
        res.redirect('/tmpl' + '/db/crud/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const getPost = async (req: Request, res: Response) => {
    try {
        let idx : number = parseInt(req.params.idx,10);
        dbCrudModel.increaseHit(idx);
        let read = dbCrudModel.getPost(idx);
        res.render('db/crud/basic/read', { read : read });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const updatePost = async (req: Request, res: Response) => {
    try {
        let idx : number = parseInt(req.params.idx,10);
        let { title, content, name } = req.body;
        dbCrudModel.updatePost({ title, content, name } , idx);
        res.redirect('/tmpl' + '/db/crud/basic/read/' + idx);
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        let idx : number = parseInt(req.params.idx,10);
        dbCrudModel.deletePost(idx);
        res.redirect('/tmpl' + '/db/crud/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};