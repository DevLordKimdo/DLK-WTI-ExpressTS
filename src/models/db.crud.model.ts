import { getDatabase } from '../database/connection';


export interface PostBoard {
    idx: number;
    title: string;
    content: string;
    name: string;
    datetime: string;
    hit: number;
}

export interface PostData {
    title: string;
    content: string;
    name: string;
}

export class DbCrudModel {
    private db = getDatabase();

    getPostList(): PostBoard[] {
        let query  = " SELECT idx        ";
            query += "      , title      ";
            query += "      , content    ";
            query += "      , name       ";
            query += "      , datetime   ";
            query += "      , hit        ";
            query += "   FROM post_board ";
        
        const result = this.db.prepare(query).all() as PostBoard[];
        return result;
    }

    getPost(idx: number): PostBoard | undefined {
        let query  = " SELECT idx        ";
            query += "      , title      ";
            query += "      , content    ";
            query += "      , name       ";
            query += "      , datetime   ";
            query += "      , hit        ";
            query += "   FROM post_board ";
            query += "  WHERE idx = :idx ";


        const result = this.db.prepare(query).get({idx : idx}) as PostBoard | undefined;
        return result;
    }

    createPost(postData: PostData): void {
        let query  = " INSERT INTO post_board ( title,  content,  name, datetime, hit) ";
            query += "      VALUES            (:title, :content, :name, datetime('now', 'localtime'), 0) ";
        
        this.db.prepare(query).run({
             title   : postData.title
            ,content : postData.content
            ,name    : postData.name
        });
    }

    increaseHit(idx: number): void {
        let query  = " UPDATE post_board SET hit = hit + 1 WHERE idx = :idx ";

        this.db.prepare(query).run({idx : idx});
    }

    updatePost(postData: PostData, idx: number): void {
        let query    = " UPDATE post_board         ";
            query   += "    SET title   = :title   ";
            query   += "      , content = :content ";
            query   += "      , name    = :name    ";
            query   += "  WHERE idx     = :idx     ";

        this.db.prepare(query).run({
            title   : postData.title,
            content : postData.content,
            name    : postData.name,
            idx     : idx
        });
    }

    deletePost(idx: number): void {
        let query  = " DELETE FROM post_board WHERE idx = :idx ";

        this.db.prepare(query).run({idx : idx});
    }
}