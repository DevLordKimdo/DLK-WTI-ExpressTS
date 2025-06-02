import fsPromises from 'fs/promises';
import fs         from 'fs';
import { FioCrudType } from '../types/fio.crud.type';

export class FioCrudService {

    async list(fioPath: string): Promise<FioCrudType[]> {
        
        let list : FioCrudType[] = [];
        // 해당 경로가 유효한지, 혹은 폴더가 맞는지 확인
        if (!fs.existsSync(fioPath) || !fs.statSync(fioPath).isDirectory()) {
            throw new Error('유효한 폴더 경로가 아닙니다.');
        }

        // 파일 이름 목록 반환
        let files: string[] = await fsPromises.readdir(fioPath);
        for(const [index, file] of files.entries()) {
            let filePath: string = fioPath + '/' + file;

            // 확장자 추출
            let extension : string = '';
            let lastIndex : number = file.lastIndexOf('.');
            if (lastIndex > 0) { extension = file.substring(lastIndex + 1); }

            // 해당 파일의 자세한 정보 가져오기.
            let stats = await fsPromises.stat(filePath);

            list.push({
                  listNo    : index + 1
                , name      : file
                , extension : extension
                , size      : stats.size
            });
        }
        
        return list;
    }

    async create(fioPath: string, form: FioCrudType): Promise<void> {
        let filePath = fioPath + '/' + form.name;
        let content: string = form.content ?? '';
        // 물리 파일 생성
        await fsPromises.writeFile(filePath, content, { encoding: 'utf8' });
    }
    
    async read(fioPath: string, name: string): Promise<FioCrudType> {
        let filePath: string = fioPath + '/' + name;
        let read: FioCrudType = {};
        read.content = await fsPromises.readFile(filePath, 'utf-8');
        read.name = name;
        return read;
    }
    
    async update(fioPath: string, preName: string, form: FioCrudType) {
        let filePath: string = fioPath + '/' + preName;
        let newFilePath: string = fioPath + '/' + form.name;
        let content: string = form.content ?? '';
        // 파일 내용 수정
        await fsPromises.writeFile(filePath, content, 'utf-8');
        // 파일 이름 변경
        if (preName !== form.name) {
            await fsPromises.rename(filePath, newFilePath);
        }
    }

    async deleteFile(fioPath: string, name: string) {
        // 파일 삭제
        let filePath: string = fioPath + '/' + name;
        await fsPromises.rm(filePath);
    }
}