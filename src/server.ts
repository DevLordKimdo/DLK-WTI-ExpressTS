import app from './app';
import { getServerConfig, getDatabaseConfig } from './config';
import { initDatabase } from './database/connection';
import { setupSchema }  from './database/schema';

const dbConfig  = getDatabaseConfig();
const svrConfig = getServerConfig();

const PORT = svrConfig.port;

try {
    initDatabase();
    setupSchema();
} catch (error) {
    console.error('❌ Failed to initialize database:', error);
    process.exit(1);
}

// 웹소켓 설정
import { createServer } from 'http';
import { setupWebSocket } from './websocket/web.socket.setup';
const server = createServer(app);
setupWebSocket(server);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});