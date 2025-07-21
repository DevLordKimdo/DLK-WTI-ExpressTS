import { DbCrudModel } from '../models/db.crud.model';
import { UixFormModel } from '../models/uix.form.model';
import { UixFormType } from '../types/uix.form.type';

export class UixFormCheckboxService {
    private dbCrudModel = new DbCrudModel();
    private uixFormModel = new UixFormModel();

    list(): UixFormType[] {
        return this.dbCrudModel.list();
    }

    copy(idxList: string): void {
        this.uixFormModel.createCopy(idxList);
    }

    update(form: UixFormType): void {
        this.uixFormModel.updateMulti(form);
    }

    delete(idxList : string): void {
        this.uixFormModel.deleteMulti(idxList);
    }
}