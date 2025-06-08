import { getDatabase } from '../database/connection';
import { DbCrudType } from '../types/db.crud.type';

export class DbTransactionalModel {
    private db = getDatabase();

    createWithTrans(params: DbCrudType, errorParams: DbCrudType, errorOption: string): void {
        try {
            this.db.prepare('BEGIN TRANSACTION').run();

            let query  = " INSERT INTO post_board ( title,  content,  name, datetime, hit) ";
                query += "      VALUES            (:title, :content, :name, datetime('now', 'localtime'), 0) ";
            
            this.db.prepare(query).run({
                 title   : params.title
                ,content : params.content
                ,name    : params.name
            });

            if(errorOption == 'Y') {
                this.db.prepare(query).run({
                    title   : errorParams.title
                    ,content : errorParams.content
                    ,name    : errorParams.name
                });
            }
            console.log('DB 작업 완료');
            this.db.prepare('COMMIT').run();
        } catch(error) {
            console.log('DB 오류로 인한 롤백 : ', error);
            this.db.prepare('ROLLBACK').run();
        }
    }
}