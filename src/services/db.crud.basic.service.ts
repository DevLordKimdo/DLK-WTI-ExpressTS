import { DbCrudModel } from '../models/db.crud.model';
import { DbCrudType } from '../types/db.crud.type';

export class DbCrudBasicService {
    private dbCrudModel = new DbCrudModel();

    list(): DbCrudType[] {
        return this.dbCrudModel.list();
    }

    createPost(form : DbCrudType): void {
        this.dbCrudModel.create(form);
    }

    updateHit(idx : number): void {
        this.dbCrudModel.updateHit(idx);
    }

    read(idx : number): DbCrudType {
        return this.dbCrudModel.read(idx);
    }

    update(form : DbCrudType): void {
        this.dbCrudModel.update(form);
    }

    deletePost(idx : number): void {
        this.dbCrudModel.deletePost(idx);
    }
}