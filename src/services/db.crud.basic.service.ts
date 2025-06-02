import { DbCrudModel } from '../models/db.crud.model';
import { DbCrudType } from '../types/db.crud.type';

export class DbCrudService {
    private dbCrudModel = new DbCrudModel();

    list() {
        return this.dbCrudModel.list();
    }

    createPost(form : DbCrudType) {
        this.dbCrudModel.create(form);
    }

    updateHit(idx : number) {
        this.dbCrudModel.updateHit(idx);
    }

    read(idx : number) {
        return this.dbCrudModel.read(idx);
    }

    update(form : DbCrudType) {
        this.dbCrudModel.update(form);
    }

    deletePost(idx : number) {
        this.dbCrudModel.deletePost(idx);
    }
}