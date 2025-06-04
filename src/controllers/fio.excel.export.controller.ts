import { Request, Response } from 'express';
import { FioExcelExportService } from '../services/fio.excel.export.service';

const fioExcelExportService = new FioExcelExportService();

export const index = async (req: Request, res: Response) => {
    try {

        res.render('fio/excel/export/index', { });
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
}

export const downExcel = async (req: Request, res: Response) => {
    try {
        let workbook = fioExcelExportService.downExcel();
        // 파일명 설정
        let fileName = 'ResultDATA.xlsx';
        // 응답 Header 설정
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
}

export const downExcelEnhance = async (req: Request, res: Response) => {
    try {
        let workbook = fioExcelExportService.downExcelEnhance();
        // HTTP 헤더 설정 및 응답 처리
        let fileName = 'ResultDataEnhance.xlsx';
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        // 엑셀 파일을 응답으로 전송
        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Error getting list:', error);
        res.status(500).send('Server Error');
    }
}