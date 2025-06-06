import { getDatabase } from '../database/connection';
import { DbCrudType } from '../types/db.crud.type';

export class FioExcelModel {
    private db = getDatabase();

    excelUpload(params: DbCrudType[]): void {
        let valueHolders = '';
        let values: Record<string, string> = {};

        params.forEach((data, index) => {
            valueHolders += `(:title${index}, :name${index}, :content${index}),`;
            values[`title${index}`]   = data.title ?? '';
            values[`name${index}`]    = data.name ?? '';
            values[`content${index}`] = data.content ?? '';
        });
        valueHolders = valueHolders.slice(0, -1);

        let qry  = ` INSERT INTO post_board               `;
            qry += `             ( title, name, content ) `;
            qry += `      VALUES                          `;
            qry += `             ${valueHolders}          `;

        this.db.prepare(qry).run( values );
    }
}

// 중요. DB INSERT 시 한번에 2개 이상의 데이터를 INSERT 하는 쿼리문 작성하는 코드