import { getDatabase } from '../database/connection';
import { DbCrudType } from '../types/db.crud.type';
import { UixFormType } from '../types/uix.form.type';

export class UixFormModel {
    private db = getDatabase();

    createCopy(params: string): void {
        let query  = " INSERT INTO post_board (title , content , name)               ";
            query += " SELECT                  title , content , name                ";
            query += "   FROM      post_board                                        ";
            query += "  WHERE      idx        IN (SELECT value FROM json_each(:idx)) ";

            this.db.prepare(query).run({ idx : params });
    }

    updateMulti(params: UixFormType): void {
        let query  = " UPDATE post_board SET                   ";
            query += "        title    =   :title              ";
            query += "      , name     =   :name               ";
            query += "      , content  =   :content            ";
            query += "      , hit      =   :hit                ";
            query += "  WHERE idx     IN   (SELECT value FROM json_each(:idx)) ";

            this.db.prepare(query).run({
                 title   : params.title
                ,name    : params.name
                ,content : params.content
                ,hit     : params.hit
                ,idx     : params.checkIdx
            });
    }

    deleteMulti(params: string): void {
        let query  = " DELETE FROM post_board WHERE idx IN (SELECT value FROM json_each(:idx)) ";

            this.db.prepare(query).run({ idx : params });
    }
}