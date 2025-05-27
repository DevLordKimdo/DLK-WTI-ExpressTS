export interface DatabaseConfig {
    driver: string;
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
    memory: boolean;
    readonly: boolean;
    timeout: number;
    memoryLimit: number;
    pageSize: number;
    init: boolean;
    journal: string;
    mode: string;
}

export interface ServerConfig {
    port: number;
}