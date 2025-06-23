import { getDatabase } from '../database/connection';
import { DbCrudType } from '../types/db.crud.type';
import { UixPaginationType } from '../types/uix.pagination.type';

export class UixPaginationModel {
    private db = getDatabase();

    list(params: UixPaginationType): DbCrudType[] {
        let query  = "   SELECT idx            ";
            query += "        , title          ";
            query += "        , content        ";
            query += "        , name           ";
            query += "        , datetime       ";
            query += "        , hit            ";
            query += "     FROM post_board     ";
            query += " ORDER BY idx DESC       ";
            query += "    LIMIT :postsPerPage  ";
            query += "   OFFSET :pageStart     ";
        
        const result = this.db.prepare(query).all({
                  postsPerPage : params.postsPerPage
                , pageStart    : params.pageStart
        }) as DbCrudType[];
        return result;
    }

    count(): number {
        let query  = " SELECT Count(*) AS cnt FROM post_board ";
        
        const result = this.db.prepare(query).get() as { cnt: number }
        return result.cnt;
    }
}