import multer, { StorageEngine } from 'multer';
import { Request } from 'express';
import { fioPath } from '../config';

// multer 설정
const storage: StorageEngine = multer.diskStorage({
    // 파일 경로 지정
    destination: function(req: Request, file: Express.Multer.File, cb) { cb(null, fioPath); },
    // 파일 이름 지정
    filename: function(req: Request, file: Express.Multer.File, cb) { cb(null, file.originalname); }
});

const upload = multer({ storage: storage });

export const multipleUpload = upload.array('upload', 20);