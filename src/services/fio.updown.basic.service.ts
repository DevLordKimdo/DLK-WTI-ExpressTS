import fsPromises      from 'fs/promises';
import fs              from 'fs';
import { Response }    from 'express';
import mime            from 'mime-types';

export class FioUpdownBasicService {

    sampleDownload(res: Response, fioPath: string, sampleFile: string): {stream: fs.ReadStream, mimeType: string, fileName: string } {
        let sampleFilePath: string    = fioPath + '/' + sampleFile;
        let fileStream: fs.ReadStream = fs.createReadStream(sampleFilePath);
        let mimeType: string          = mime.lookup(sampleFilePath) || 'application/octet-stream';

        return {stream: fileStream, mimeType, fileName: sampleFile}
    }

    async deleteTarget(fioPath: string, deleteTarget: string): Promise<void> {
        let filePath: string = fioPath + '/' + deleteTarget;
        console.log(filePath);

        if (fs.existsSync(filePath)) {
            try {
                await fsPromises.rm(filePath);
                console.log(deleteTarget + ' 파일이 삭제되었습니다.');
            } catch (err) {
                console.log(deleteTarget + ' 파일 삭제에 실패했습니다.' + err);
            }
        } else {
            console.log(deleteTarget + ' 파일이 존재하지 않습니다.');
        }
    }

    async deleteAll(fioPath: string): Promise<void> {
        let files = await fsPromises.readdir(fioPath);
        for(const file of files) {
            await fsPromises.rm(fioPath + '/' + file);
        }
    }

}