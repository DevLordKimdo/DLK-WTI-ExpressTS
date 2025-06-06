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

    read(idx: number): DbCrudType {
        let query  = " SELECT idx        ";
            query += "      , title      ";
            query += "      , content    ";
            query += "      , name       ";
            query += "      , datetime   ";
            query += "      , hit        ";
            query += "   FROM post_board ";
            query += "  WHERE idx = :idx ";

        const result = this.db.prepare(query).get({idx : idx}) as DbCrudType;
        return result;
    }

    create(params: DbCrudType): void {
        let query  = " INSERT INTO post_board ( title,  content,  name, datetime, hit) ";
            query += "      VALUES            (:title, :content, :name, datetime('now', 'localtime'), 0) ";
        
        this.db.prepare(query).run({
             title   : params.title
            ,content : params.content
            ,name    : params.name
        });
    }

    updateHit(idx: number): void {
        let query  = " UPDATE post_board SET hit = hit + 1 WHERE idx = :idx ";

        this.db.prepare(query).run({idx : idx});
    }

    update(params: DbCrudType): void {
        let query    = " UPDATE post_board         ";
            query   += "    SET title   = :title   ";
            query   += "      , content = :content ";
            query   += "      , name    = :name    ";
            query   += "  WHERE idx     = :idx     ";

        this.db.prepare(query).run({
            title   : params.title,
            content : params.content,
            name    : params.name,
            idx     : params.idx
        });
    }

    deletePost(idx: number): void {
        let query  = " DELETE FROM post_board WHERE idx = :idx ";

        this.db.prepare(query).run({idx : idx});
    }

    createReturnIdx(params: DbCrudType): number {
        let query  = " INSERT INTO post_board ( title,  content,  name, datetime, hit) ";
            query += "      VALUES            (:title, :content, :name, datetime('now', 'localtime'), 0) ";
        
        let result = this.db.prepare(query).run({
             title   : params.title
            ,content : params.content
            ,name    : params.name
        });

        return result.lastInsertRowid as number;
    }

}