import express      from 'express';
import path         from 'path';
import cookieParser from 'cookie-parser';

const app = express();

// 세션 설정
const session     = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// 정적 파일 설정
app.use(express.static(path.join(__dirname, '..', 'public')));

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 세션 설정
app.use(session({
    secret            : '1234', // 세션 암호화 키
    resave            : false,  // 세션이 변경되지 않았더라도 다시 저장할지 여부
    saveUninitialized : false,  // 초기화되지 않은 세션을 저장할지 여부
    store             : new SQLiteStore(
        { db: ':memory:' }                  // 세션 저장소 설정. SQLite 의 메모리 저장소 모듈을 사용. (메모리모드)
    //  { db: 'sessions.db', dir: './db' }  // (로컬모드, 경로는 './db')
    )
}));

// 메인 라우트
// app.use('/', require('./routes'));
import mainRoutes from './routes';
app.use('/', mainRoutes);

export default app;