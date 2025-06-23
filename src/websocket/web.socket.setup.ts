import { Server as HttpServer } from 'http';
import { WebSocketServer } from 'ws';
import { wsConnectBasicConfig } from './web.socket.config';

export function setupWebSocket(server: HttpServer) {
    const wsServer = new WebSocketServer({server, path:'/tmpl/ws/connect/basic/config'});
    wsServer.on('connection', wsConnectBasicConfig.connect);
}