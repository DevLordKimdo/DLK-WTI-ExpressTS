import app from './app';
import { getServerConfig, getDatabaseConfig } from './config';

const dbConfig  = getDatabaseConfig();
const svrConfig = getServerConfig();

const PORT = svrConfig.port;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
