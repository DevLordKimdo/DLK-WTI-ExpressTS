import { FioExcelModel } from '../models/fio.excel.model';
import { DbCrudType } from '../types/db.crud.type';
import excel from 'exceljs';

export class FioExcelInportService {

    private fioExcelModel = new FioExcelModel();

    async upload(xlsxBuffer: ArrayBuffer): Promise<void> {
        let workbook: excel.Workbook = new excel.Workbook();
        await workbook.xlsx.load(xlsxBuffer);

        let worksheet = workbook.getWorksheet("Sheet1"); // 시트 이름 검색
        let dataList: DbCrudType[] = [];

        if(!worksheet) { throw new Error('Sheet1을 찾을 수 없습니다.'); }
        
        // 엑셀의 데이터를 뽑아 객체배열을 만드는 과정.
        for (let rowNum = 2; rowNum <= worksheet.rowCount; rowNum++) {
            let row = worksheet.getRow(rowNum);
            let rowData: excel.CellValue[] = [];

            // 고정방식. 무조건 아래의 틀을 지켜야함 (첫번째열 title, 두번째열 username, 세번째열 content)
            // | title | username  | content |
            // | ...   | ...       | ...     |
            // | ...   | ...       | ...     |
            for (let colNum = 1; colNum <= 3; colNum++) {
                let cell = row.getCell(colNum);
                let value: excel.CellValue = cell.value;
                rowData.push(value);
            }

            let data: DbCrudType = {
                title    : rowData[0]?.toString() || '',
                username : rowData[1]?.toString() || '',
                content  : rowData[2]?.toString() || ''
            };

            dataList.push(data);
        }
        
        this.fioExcelModel.excelUpload(dataList);
    }
}