import { DbCrudType } from '../types/db.crud.type';
import { DbCrudModel } from '../models/db.crud.model';

export class DbFormRowSubmitService {
    private dbCrudModel = new DbCrudModel();

    submit(form: DbCrudType[]): void {
        form.forEach(data => {
            this.dbCrudModel.create(data);
        });
    }
    
}