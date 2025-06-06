import { DbCrudType } from '../types/db.crud.type';
import { DbCrudModel } from '../models/db.crud.model';

export class DbFormRowSubmitService {
    private dbCrudModel = new DbCrudModel();

    submit(listTitle: string[], listName: string[], listContent: string[]): void {
        let form: DbCrudType;
        for(let i = 0; i < listTitle.length; i++) {
            form         = {};
            form.title   = listTitle[i];
            form.name    = listName[i];
            form.content = listContent[i];
            this.dbCrudModel.create(form);
        }
    }
    
}