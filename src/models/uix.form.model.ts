import { getDatabase } from '../database/connection';
import { UixFormType } from '../types/uix.form.type';

export class UixFormModel {
    private db = getDatabase();

    createCopy(params: string): void {
        let query  = " INSERT INTO post_board (title , content , username)           ";
            query += " SELECT                  title , content , username            ";
            query += "   FROM      post_board                                        ";
            query += "  WHERE      idx        IN (SELECT value FROM json_each(:idx)) ";

            this.db.prepare(query).run({ idx : params });
    }

    updateMulti(params: UixFormType): void {
        let query  = " UPDATE post_board SET                   ";
            query += "        title    =   :title              ";
            query += "      , username =   :username           ";
            query += "      , content  =   :content            ";
            query += "      , hit      =   :hit                ";
            query += "  WHERE idx     IN   (SELECT value FROM json_each(:idx)) ";

            this.db.prepare(query).run({
                 title    : params.title
                ,username : params.username
                ,content  : params.content
                ,hit      : params.hit
                ,idx      : params.checkIdx
            });
    }

    deleteMulti(params: string): void {
        let query  = " DELETE FROM post_board WHERE idx IN (SELECT value FROM json_each(:idx)) ";

            this.db.prepare(query).run({ idx : params });
    }
}