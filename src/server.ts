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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
