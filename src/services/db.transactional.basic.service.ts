import { DbSearchType } from '../types/db.search.type';
import { DbTransactionalModel } from '../models/db.transactional.model';
import { DbCrudModel } from '../models/db.crud.model';


export class DbTransactionalBasicService {
    private dbTransactionalModel = new DbTransactionalModel();
    private dbCrudModel = new DbCrudModel();

    submit(form: DbSearchType, errorForm: DbSearchType, errorOption: string, transOption: string): void {
        if(transOption == 'Y') {
            this.dbTransactionalModel.createWithTrans(form, errorForm, errorOption);
        } else { 
            this.dbCrudModel.create(form);
            if(errorOption == 'Y') { this.dbCrudModel.create(errorForm); }
        }
        
    }
}