import { DbCrudType } from "./db.crud.type";

export interface UixPaginationType extends DbCrudType {
    postsPerPage?: number;
    pageStart?: number;
}