import { Request, Response } from 'express';
import { FioCrudService } from '../services/fio.crud.basic.service';
import { FioCrudType } from '../types/fio.crud.type';
import { fioPath } from '../config';

const fioCrudService = new FioCrudService();

export const list = async (req: Request, res: Response) => {
    try {
        let list = await fioCrudService.list(fioPath);
        res.render('fio/crud/basic/list', { list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const createForm = async (req: Request, res: Response) => {
    try {

        res.render('fio/crud/basic/create', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const createFile = async (req: Request, res: Response) => {
    try {
        let { name, content } = req.body;
        let form: FioCrudType = { name, content };
        fioCrudService.create(fioPath, form);
        res.redirect('/tmpl' + '/fio/crud/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const read = async (req: Request, res: Response) => {
    try {
        let fileName: string = req.params.name;
        let read: FioCrudType = await fioCrudService.read(fioPath, fileName);
        res.render('fio/crud/basic/read', {read : read});
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        let preName = req.params.preName;
        let { name, content } = req.body;
        let form: FioCrudType = { name, content };
        await fioCrudService.update(fioPath, preName, form);
        res.redirect('/tmpl' + '/fio/crud/basic/read/' + name);
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deleteFile = async (req: Request, res: Response) => {
    try {
        let name = req.params.name;
        await fioCrudService.deleteFile(fioPath, name);
        res.redirect('/tmpl' + '/fio/crud/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};