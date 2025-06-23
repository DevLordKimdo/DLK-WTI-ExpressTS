const clients = new Set();
let clientIdCnt = 0;

export const wsConnectBasicConfig = {
    connect: (ws: any) => {
        ws.id = `client-${++clientIdCnt}`;

        // 클라이언트 목록에 추가
        clients.add(ws);
        console.log(`클라이언트 연결됨: ${ws.id} (총 연결: ${clients.size})`);
        
        // 메시지 수신 처리
        ws.on('message', (message: any) => {
            let receivedMessage = message.toString();
            console.log(`[${ws.id}] 수신: ${receivedMessage}`);
            ws.send(`서버가 받은 메시지: ${receivedMessage}`);
        });
        
        // 연결 종료 처리
        ws.on('close', (code: any, reason: any) => {
            clients.delete(ws);
            console.log(`클라이언트 연결 종료: ${ws.id} (총 연결: ${clients.size})`);
        });
    }
};