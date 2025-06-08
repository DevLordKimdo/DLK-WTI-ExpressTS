import { DbSearchType } from '../types/db.search.type';
import { DbSearchModel } from '../models/db.search.model';

export class DbSearchBasicService {
    private dbSearchModel = new DbSearchModel();

    search(search: DbSearchType): DbSearchType[] {
        return this.dbSearchModel.search(search);
    }   
}