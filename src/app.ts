import express      from 'express';
import path         from 'path';
import cookieParser from 'cookie-parser';

const app = express();

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// 정적 파일 설정
app.use(express.static(path.join(__dirname, '..', 'public')));

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 메인 라우트
// app.use('/', require('./routes'));
import mainRoutes from './routes';
app.use('/', mainRoutes);

export default app;