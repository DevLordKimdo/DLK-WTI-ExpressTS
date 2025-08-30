import sqlite3               from 'better-sqlite3';
import path                  from 'path';
import fs                    from 'fs';
import { DatabaseConfig } from '../types/config.type';

let db: sqlite3.Database;

export const initDatabase = (): sqlite3.Database => {

    try {

        // 데이터베이스 메모리 선택
        const dbConfigMemory: boolean = process.env.DB_MEMORY === 'true';
        let dbMode : string;

        // 데이터베이스 기본 설정
        const dbConfigMain  : DatabaseConfig = {
            readonly    : Boolean(process.env.DB_READONLY === 'true'),
            timeout     : Number(process.env.DB_TIMEOUT || 5000),
            memoryLimit : Number(process.env.DB_MEMORYLIMIT),
            pageSize    : Number(process.env.DB_PAGESIZE),
            mode        : String(process.env.DB_MODE),
            path        : String(process.env.DB_PATH)
        }

        // 데이터베이스 부가 옵션설정
        const dbConfigOption: DatabaseConfig = {
            journal     : String(process.env.DB_JOURNAL)
        }

        // db 모드 선택
        if (dbConfigMemory) {
            // 메모리 모드
            dbMode = ':memory:';
        } else {
            // 로컬(파일) 모드. 지정한 경로가 있으면 지정한 경로로 .db파일 저장. 경로가 없으면 프로젝트 폴더 내부(./root)에 저장.
            dbMode = dbConfigMain.path || path.join(process.cwd(), 'sql', 'database.db');
            // 해당 경로 확인. 경로가 없을 시 폴더 생성
            const dir = path.dirname(dbMode);
            if (!fs.existsSync(dir)) { fs.mkdirSync(dir); }
        }
        // DB 작동
        db = new sqlite3(dbMode, dbConfigMain);

        // 저널모드.  데이터베이스 변경사항을 어떻게 추적하고 저장할지 결정. (주의. 메모리모드에서는 사용불가. 파일모드에서만 사용가능)
        // (delete / truncate / persist / memory / wal / off)
        // wal : 변경사항을 별도의 WAL 파일에 기록. 읽기와 쓰기 작업을 동시에 처리
        if (dbConfigOption.journal && dbConfigOption.journal !== 'delete') { 
            db.pragma(`journal_mode = ${dbConfigOption.journal}`); 
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