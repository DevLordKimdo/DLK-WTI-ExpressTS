import sqlite3               from 'better-sqlite3';
import { getDatabaseConfig } from '../config';
import path                  from 'path';
import fs                    from 'fs';

let db: sqlite3.Database;

export const initDatabase = (): sqlite3.Database => {
    
    const dbConfig = getDatabaseConfig();
    let dbMode : string;

    try {
        // 데이터베이스 옵션
        const dbOption = {
            readonly:    dbConfig.readonly,
            timeout:     dbConfig.timeout,
            memoryLimit: dbConfig.memoryLimit,
            pageSize:    dbConfig.pageSize,
            mode:        dbConfig.mode
        }

        // db 모드 선택
        if (dbConfig.memory) {
            // 메모리 모드
            dbMode = ':memory:';
        } else {
            // 로컬(파일) 모드
            dbMode = path.join('C:/SQL/database.db');
            // dbMode = path.join(process.cwd(), 'sql', 'database', `${dbConfig.name}.db`); // root/sql/DLK.db 경로에 db파일 생성

            // 해당 경로 확인. 경로가 없을 시 폴더 생성
            const dir = path.dirname(dbMode);
            if (!fs.existsSync(dir)) { fs.mkdirSync(dir); }
        }

        // DB 작동
        db = new sqlite3(dbMode, dbOption);

        // 저널모드.  데이터베이스 변경사항을 어떻게 추적하고 저장할지 결정. (주의. 메모리모드에서는 사용불가. 파일모드에서만 사용가능)
        // (delete / truncate / persist / memory / wal / off)
        // wal : 변경사항을 별도의 WAL 파일에 기록. 읽기와 쓰기 작업을 동시에 처리
        if (dbConfig.journal && dbConfig.journal !== 'delete') { 
            db.pragma(`journal_mode = ${dbConfig.journal}`); 
        }
        return db;
    } catch (error) {
        throw error;
    }
};

export const getDatabase = (): sqlite3.Database => {
    if (!db) { return initDatabase(); }
    return db;
};

export const closeDatabase = (): void => {
    if (db) { db.close(); }
};