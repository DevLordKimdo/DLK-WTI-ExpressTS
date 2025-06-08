import { getDatabase } from '../database/connection';
import { DbSearchType } from '../types/db.search.type';

export class DbSearchModel {
    private db = getDatabase();

    search(params: DbSearchType): DbSearchType[] {
        let query  = " SELECT idx        ";
            query += "      , title      ";
            query += "      , content    ";
            query += "      , name       ";
            query += "      , datetime   ";
            query += "      , hit        ";
            query += "   FROM post_board ";
            query += "  WHERE 1 = 1      ";

            if(params.searchKeyword) {
                     if(params.searchOption == 'title')   { query += " AND title   LIKE '%' || :searchKeyword || '%' "; }
                else if(params.searchOption == 'content') { query += " AND content LIKE '%' || :searchKeyword || '%' "; }
                else if(params.searchOption == 'name')    { query += " AND name    LIKE '%' || :searchKeyword || '%' "; }
            }

            if(params.searchDateStart && params.searchDateStart) {
                query += " AND datetime BETWEEN :searchDateStart AND :searchDateEnded ";
            }
        
            const result = this.db.prepare(query).all({
                  searchKeyword   : params.searchKeyword 
                , searchDateStart : params.searchDateStart
                , searchDateEnded : params.searchDateEnded
            }) as DbSearchType[];

        return result;
    }
}