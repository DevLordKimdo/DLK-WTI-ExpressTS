import { getDatabase } from './connection';
import * as fs         from 'fs';
import * as path       from 'path';

export const setupSchema = (): void => {
    const db = getDatabase();

    try {
        // SQL 파일 경로. 서버 root 폴더 최상위에 위치
        const sqlFilePath = path.join(process.cwd(), 'StartQuery.sql');
        
        // SQL 파일 존재 확인
        if (!fs.existsSync(sqlFilePath)) {
            console.log('StartQuery.sql file not found');
            return;
        }

        // SQL 파일 읽기
        const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

        // SQL 실행 (여러 구문을 한번에 실행)
        db.exec(sqlContent);
        console.log('DB 초기화 완료!');
    } catch (error) {
        console.error('❌ Error executing SQL file:', error);
        throw error;
    }
};