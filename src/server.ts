import dotenv           from 'dotenv';
import { initDatabase } from './database/connection';
import { setupSchema }  from './database/schema';

// ENV 설정
const env = process.env.NODE_ENV || 'local';
dotenv.config({ path: `./.env.${env}` });

// 데이터베이스 초기화
try {
    initDatabase();
    setupSchema();
} catch (error) {
    console.error('❌ Failed to initialize database:', error);
    process.exit(1);
}

// 서버 포트 설정
const PORT = process.env.SERVER_PORT;

// 앱 설정
import app from './app';

// ENV 타입 읽기
const ENV = process.env.ENV_TYPE;

// 웹소켓 설정
import { createServer } from 'http';
import { setupWebSocket } from './websocket/web.socket.setup';
const server = createServer(app);
setupWebSocket(server);

server.listen(PORT, () => {
    console.log(`SERVER is running`);
    console.log(`SERVER PORT :${PORT}`);
    console.log(`ENV TYPE: ${ENV}`);
});