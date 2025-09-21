import { UixFormModel } from '../models/uix.form.model';
import { UixFormType } from '../types/uix.form.type';

export class UixFormSearchSelectboxService {
    private uixFormModel = new UixFormModel();

    listUser(): UixFormType[] {
        return this.uixFormModel.listUser();
    }

}