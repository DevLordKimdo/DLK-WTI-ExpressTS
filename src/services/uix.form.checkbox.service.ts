import { DbCrudModel } from '../models/db.crud.model';
import { UixFormModel } from '../models/uix.form.model';
import { DbCrudType } from '../types/db.crud.type';

export class UixFormCheckboxService {
    private dbCrudModel = new DbCrudModel();
    private uixFormModel = new UixFormModel();

    list(): DbCrudType[] {
        return this.dbCrudModel.list();
    }

    copy(idxList: string): void {
        this.uixFormModel.createCopy(idxList);
    }

    update(idxList: string, form: DbCrudType): void {
        this.uixFormModel.updateMulti(idxList, form);
    }

    delete(idxList : string): void {
        this.uixFormModel.deleteMulti(idxList);
    }
}