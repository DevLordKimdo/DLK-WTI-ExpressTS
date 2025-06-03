import { FioBoardModel } from '../models/fio.board.model';
import { FioBoardType } from '../types/fio.board.type';

export class FioBoardBasicService {
    private fioBoardModel = new FioBoardModel();

    list(): void {
        let list: FioBoardType[] = this.fioBoardModel.list();
    }

    upload(): void {

    }

}