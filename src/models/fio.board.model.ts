import { getDatabase } from '../database/connection';
import { FioBoardType } from '../types/fio.board.type';

export class FioBoardModel {
    private db = getDatabase();

    list(): FioBoardType[] {
        let query  = " SELECT a.idx                                                                            ";
            query += "      , a.group_idx                                                                      ";
            query += "      , a.name                                                                           ";
            query += "      , a.size                                                                           ";
            query += "      , a.seq                                                                            ";
            query += "      , a.datetime                                                                       ";
            query += "      , ( SELECT COUNT(*) FROM file_board WHERE group_idx = a.group_idx ) AS group_count ";
            query += "   FROM file_board AS a                                                                  ";
        
        const result = this.db.prepare(query).all() as FioBoardType[];
        return result;
    }

    newGroupIdx(): number {
        let query  = " SELECT CASE WHEN MAX(group_idx) is null THEN 1 ";
		    query += " 	   		   ELSE MAX(group_idx) + 1            ";
		    query += "         END AS NewPostIdx                      ";
		    query += "   FROM file_board                              ";
            const result = this.db.prepare(query).get() as { NewPostIdx: number };
            return result.NewPostIdx;
    }

    upload(params: FioBoardType): void {
        let query  = " INSERT INTO file_board (            ";
            query += "        group_idx                    ";
            query += "      , name                         ";
            query += "      , size                         ";
            query += "      , seq                          ";
            query += "      , datetime                     ";
            query += "  ) VALUES (                         ";
            query += "        :groupIdx                    ";
            query += "      , :name                        ";
            query += "      , :size                        ";
            query += "      , :seq                         ";
            query += "      , datetime('now', 'localtime') ";
            query += "  )                                  ";

            this.db.prepare(query).run({
                 groupIdx : params.groupIdx
               , name     : params.name
               , size     : params.size
               , seq      : params.seq
            });
    }
}