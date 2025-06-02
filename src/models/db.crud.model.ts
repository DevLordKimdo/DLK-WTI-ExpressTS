import { getDatabase } from '../database/connection';
import { DbCrudType } from '../types/db.crud.type';

export class DbCrudModel {
    private db = getDatabase();

    list(): DbCrudType[] {
        let query  = " SELECT idx        ";
            query += "      , title      ";
            query += "      , content    ";
            query += "      , name       ";
            query += "      , datetime   ";
            query += "      , hit        ";
            query += "   FROM post_board ";
        
        const result = this.db.prepare(query).all() as DbCrudType[];
        return result;
    }

    read(idx: number): DbCrudType | undefined {
        let query  = " SELECT idx        ";
            query += "      , title      ";
            query += "      , content    ";
            query += "      , name       ";
            query += "      , datetime   ";
            query += "      , hit        ";
            query += "   FROM post_board ";
            query += "  WHERE idx = :idx ";

        const result = this.db.prepare(query).get({idx : idx}) as DbCrudType | undefined;
        return result;
    }

    create(form: DbCrudType): void {
        let query  = " INSERT INTO post_board ( title,  content,  name, datetime, hit) ";
            query += "      VALUES            (:title, :content, :name, datetime('now', 'localtime'), 0) ";
        
        this.db.prepare(query).run({
             title   : form.title
            ,content : form.content
            ,name    : form.name
        });
    }

    updateHit(idx: number): void {
        let query  = " UPDATE post_board SET hit = hit + 1 WHERE idx = :idx ";

        this.db.prepare(query).run({idx : idx});
    }

    update(form: DbCrudType): void {
        let query    = " UPDATE post_board         ";
            query   += "    SET title   = :title   ";
            query   += "      , content = :content ";
            query   += "      , name    = :name    ";
            query   += "  WHERE idx     = :idx     ";

        this.db.prepare(query).run({
            title   : form.title,
            content : form.content,
            name    : form.name,
            idx     : form.idx
        });
    }

    deletePost(idx: number): void {
        let query  = " DELETE FROM post_board WHERE idx = :idx ";

        this.db.prepare(query).run({idx : idx});
    }
}