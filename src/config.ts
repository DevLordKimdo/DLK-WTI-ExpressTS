import config from 'config';
import { DatabaseConfig, ServerConfig } from './types/config.type';

export const getServerConfig = (): ServerConfig => {
    return config.get<ServerConfig>('server');
};

export const getDatabaseConfig = (): DatabaseConfig => {
    return config.get<DatabaseConfig>('database');
};

export const fioPath: string = "C:/fio";