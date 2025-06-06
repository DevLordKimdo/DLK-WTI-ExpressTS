import { DbCrudModel } from '../models/db.crud.model';
import { DbCrudType } from '../types/db.crud.type';

export class DbCrudReturnIdxService {
    private dbCrudModel = new DbCrudModel();

    createPost(form : DbCrudType): void {
        let returnIdx = this.dbCrudModel.createReturnIdx(form);
        console.log('Return Idx : ' , returnIdx);
    }
}