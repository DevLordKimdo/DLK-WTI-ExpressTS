import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, cb) {
        // 엑셀 파일만 허용
        const allowedTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
            'application/vnd.ms-excel', // .xls
            'text/csv' // .csv
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('엑셀 파일(.xlsx, .xls) 또는 CSV 파일만 업로드 가능합니다.'));
        }
    },
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB 제한
    }
});

export const excelUpload = upload.single('excelUpload');