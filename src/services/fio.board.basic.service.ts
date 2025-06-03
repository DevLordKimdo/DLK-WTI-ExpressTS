import { FioBoardModel } from '../models/fio.board.model';
import { FioBoardType }  from '../types/fio.board.type';

export class FioBoardBasicService {
    private fioBoardModel = new FioBoardModel();

    list(): FioBoardType[] {
        let prevGroupIdx: number;
        let currentGroupIdx: number;
        let list: FioBoardType[] = this.fioBoardModel.list();

        // 객체배열의 key 이름을 변경하는 작업. group_idx -> groupIdx , group_count -> groupCount
        list = list.map(item => {
            let { group_idx, group_count, ...rest } = item;
            return { groupIdx: group_idx, groupCount: group_count, ...rest };
        });

        // GroupIdx 그룹화. 같은 GroupIdx 번호 끼리는 대표자 번호를 제외한 나머지 GroupIdx 는 null로 변환
        if (list.length) {
            prevGroupIdx = list[0].groupIdx ?? 0;

            for (let i = 1; i < list.length; i++) {
                currentGroupIdx = list[i].groupIdx ?? 0;

                if (currentGroupIdx != null && currentGroupIdx == prevGroupIdx) {
                    list[i].groupIdx = null;
                } else {
                    prevGroupIdx = currentGroupIdx;
                }
            }
        }

        return list
    }

    upload(files: Express.Multer.File[]): void {
        let newGroupIdx: number = this.fioBoardModel.newGroupIdx();
        // 순차적으로 DB에 INSERT
        for(let i = 0; i < files.length; i++) {
            let uploadList: FioBoardType = {};
                uploadList.groupIdx      = newGroupIdx;
                uploadList.name          = files[i].originalname;
                uploadList.size          = files[i].size;
                uploadList.seq           = i+1;
                this.fioBoardModel.upload(uploadList);
        }
    }
}