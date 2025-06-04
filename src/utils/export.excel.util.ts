import excel from 'exceljs';

export function ExcelConvert(list: Record<string, any>[], sheetName: string): excel.Workbook {
    // 엑셀 관련 객체 불러오기
    const workbook: excel.Workbook = new excel.Workbook();
    const worksheet: excel.Worksheet = workbook.addWorksheet(sheetName);
    
    // 리스트에 데이터가 존재하는지 확인. 없으면 데이터가 없다는 열을 집어넣음
    if (!list || list.length === 0) {
        console.log('데이터 없음');
        worksheet.addRow(['데이터가 없습니다.']);
        return workbook;
    }

    // 첫 번째 객체의 키로 헤더(칼럼) 생성
    const headers: string[] = Object.keys(list[0]);
    worksheet.columns = headers.map((header: string) => ({
        header: header,
        key: header,
        width: 10 // 기본 너비
    }));

    // 스타일 설정 - 헤더부분 (필요할 시 스타일을 적용)
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = { 
        type: 'pattern', 
        pattern: 'solid', 
        fgColor: { argb: 'FFE0E0E0' } 
    };
    worksheet.getRow(1).alignment = { 
        vertical: 'middle', 
        horizontal: 'center' 
    };

    // 데이터 추가
    list.forEach((data: Record<string, any>) => {
        const row: excel.Row = worksheet.addRow(data);
        // 스타일 설정 - 행 부분 (필요할 시 스타일을 적용)
        row.alignment = { vertical: 'middle' };
        row.fill = { 
            type: 'pattern', 
            pattern: 'solid', 
            fgColor: { argb: 'FFF8F8F8' } 
        };
        row.eachCell((cell: excel.Cell) => { 
            cell.border = { 
                top: { style: 'thin' }, 
                left: { style: 'thin' }, 
                bottom: { style: 'thin' }, 
                right: { style: 'thin' }
            };
        });
    });

    return workbook;
}