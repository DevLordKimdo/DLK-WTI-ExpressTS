import { DbCrudModel } from '../models/db.crud.model';
import { DbCrudType } from '../types/db.crud.type';

export class DbCrudService {
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

    read(idx : number): DbCrudType | undefined {
        return this.dbCrudModel.read(idx);
    }

    update(form : DbCrudType): void {
        this.dbCrudModel.update(form);
    }

    deletePost(idx : number): void {
        this.dbCrudModel.deletePost(idx);
    }
}