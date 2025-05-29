import { getDatabase } from './connection';
import * as fs         from 'fs';
import * as path       from 'path';

export const setupSchema = (): void => {
    const db = getDatabase();

    try {
        // SQL 파일 경로
        const sqlFilePath = path.join(__dirname, 'StartQuery.sql');
        
        // SQL 파일 존재 확인
        if (!fs.existsSync(sqlFilePath)) {
            console.log('StartQuery.sql file not found');
            return;
        }

        // SQL 파일 읽기
        const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

        // SQL 실행 (여러 구문을 한번에 실행)
        db.exec(sqlContent);
    } catch (error) {
        console.error('❌ Error executing SQL file:', error);
        throw error;
    }
};