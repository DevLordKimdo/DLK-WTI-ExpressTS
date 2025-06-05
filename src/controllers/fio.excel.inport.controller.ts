import { Request, Response } from 'express';
import { FioExcelInportService } from '../services/fio.excel.inport.service';

const fioExcelInportService = new FioExcelInportService();

export const form = async (req: Request, res: Response) => {
    try {

        res.render('fio/excel/inport/form', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
}

export const upload = async (req: Request, res: Response) => {
    try {
        if(!req.file || !req.file.buffer) { res.status(400).send('파일 업로드 되지 않음'); }
        let xlsxBuffer = req.file?.buffer as Buffer;
        fioExcelInportService.upload(xlsxBuffer);
        res.redirect('/tmpl' + '/fio/excel/inport/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
}