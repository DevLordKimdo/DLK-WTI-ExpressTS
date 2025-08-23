import { DbCrudModel } from '../models/db.crud.model';
import { DbCrudType } from '../types/db.crud.type';
import { ExcelConvert }    from '../utils/export.excel.util';
import excel from 'exceljs';

export class FioExcelExportService {
    
    private dbCrudModel = new DbCrudModel();

    downExcel(): excel.Workbook {
        let list: DbCrudType[] = this.dbCrudModel.list();

        // ExcelJS 워크북 생성
        const workbook  = new excel.Workbook();
        const worksheet = workbook.addWorksheet('ResultDATA');

        // 엑셀 헤더(칼럼) 설정
        worksheet.columns = [
            { header: 'idx',      key: 'idx',      width: 10 },
            { header: 'title',    key: 'title',    width: 10 },
            { header: 'username', key: 'username', width: 10 },
            { header: 'content',  key: 'content',  width: 10 },
            { header: 'datetime', key: 'datetime', width: 10 },
            { header: 'hit',      key: 'hit',      width: 10 },
        ];
        // 스타일 적용 (필요하면 적용)
        // worksheet.getRow(1).font = { bold: true };
        // worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } };

        // 데이터 주입
        list.forEach(data => {
            worksheet.addRow({
                idx      : data.idx,
                title    : data.title,
                username : data.username,
                content  : data.content,
                datetime : data.datetime,
                hit      : data.hit
            });
        });

        return workbook;
    }

    downExcelEnhance(): excel.Workbook {
        let list: DbCrudType[] = this.dbCrudModel.list();
        return ExcelConvert(list, 'data');
    }

}