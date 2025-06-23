import { UixPaginationType } from '../types/uix.pagination.type';
import { DbCrudType } from '../types/db.crud.type';
import { UixPaginationModel } from '../models/uix.pagination.model';

export class UixPaginationBasicService {

    private uixPaginationModel = new UixPaginationModel;

    list(listSet: UixPaginationType): DbCrudType[] {
        return this.uixPaginationModel.list(listSet);
    }

    count(): number {
        return this.uixPaginationModel.count();
    }

}