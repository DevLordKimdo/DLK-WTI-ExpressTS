import fsPromises from 'fs/promises';
import fs         from 'fs';
import { FioCrudType } from '../types/fio.crud.type';

export class FioCrudBasicService {

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

// 물리적인 파일 CRUD 기능.
// 선행작업으로 C:/fio 경로의 폴더 만들기 필요.
// 주의. 한글로 입력/생성/저장 할 시 유니코드 오류가 발생되므로 영어로만 작성할것.
// 주의. 텍스트로 입력된 파일만 넣을 것.
// 비동기 모듈 fs와 동기식 모듈 fsPromises 를 혼용해서 사용함. fsPromises는 특정 경로가 폴더인지를 확인하는 기능이 없음.
// 생각해야할 점. 물리적인 파일 생성코드를 Model 쪽으로 옮겨야 할지에 대한 부분은 더 생각해보고 추후 결정을 해야 함.
// MVC 패턴의 구조를 맞추기 위해서는 물리적인 생성 파일 기능이 Model 쪽에 있어야 하느냐
// 아니면 Model은 쿼리문 실행 코드만을 올려놓는 계층이냐 에 대한 부분을 생각해야 함.