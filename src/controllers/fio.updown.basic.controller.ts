import { Request, Response } from 'express';
import { FioUpdownBasicService } from '../services/fio.updown.basic.service';

const fioUpdownBasicService = new FioUpdownBasicService();
const fioPath: string = process.env.FIO_PATH || '';

export const form = async (req: Request, res: Response) => {
    try {

        res.render('fio/updown/basic/form', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const sampleDownload = async (req: Request, res: Response) => {
    try {
        let sampleFile: string = 'sample.png';
        let { stream, mimeType, fileName } = fioUpdownBasicService.sampleDownload(res, fioPath, sampleFile);

        // 다운로드. mime 타입을 적용하는 방법
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', mimeType);

        // 다운로드 옵션2. mime 타입을 지정하지 않고 무조건 모두 다운로드 하는 방법
        // res.setHeader('Content-Disposition', `attachment; filename="${sampleFile}"`);
        // res.setHeader('Content-Type', 'application/octet-stream');

        stream.pipe(res);
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const singleUpload = async (req: Request, res: Response) => {
    try {

        res.redirect('/tmpl' + '/fio/updown/basic/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const multiUpload = async (req: Request, res: Response) => {
    try {

        res.redirect('/tmpl' + '/fio/updown/basic/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deleteTarget = async (req: Request, res: Response) => {
    try {
        let deleteTarget: string = req.body.deleteTarget;
        fioUpdownBasicService.deleteTarget(fioPath, deleteTarget);
        res.redirect('/tmpl' + '/fio/updown/basic/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};

export const deleteAll = async (req: Request, res: Response) => {
    try {
        fioUpdownBasicService.deleteAll(fioPath);
        res.redirect('/tmpl' + '/fio/updown/basic/form');
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
};