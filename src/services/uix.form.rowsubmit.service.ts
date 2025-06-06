import { DbCrudType } from '../types/db.crud.type';

export class UixFormRowSubmitService {

    submit(listTitle: string[], listName: string[], listContent: string[]): DbCrudType[] {
        let list: DbCrudType[] = [];
        for(let i = 0; i < listTitle.length; i++) {
            list.push({
                  title   : listTitle[i]
                , name    : listName[i]
                , content : listContent[i]
            });
        }
        return list;
    }
    
}