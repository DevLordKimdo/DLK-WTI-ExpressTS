import { Request, Response } from 'express';
import { FioBoardBasicService } from '../services/fio.board.basic.service';

const fioBoardBasicService = new FioBoardBasicService();

export const list = async (req: Request, res: Response) => {
    try {
        const list = fioBoardBasicService.list();
        res.render('fio/board/basic/list', { list : list });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const upload = async (req: Request, res: Response) => {
    try {
        let files = req.files as Express.Multer.File[];
        fioBoardBasicService.upload(files);
        res.redirect('/tmpl' + '/fio/board/basic/list');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};