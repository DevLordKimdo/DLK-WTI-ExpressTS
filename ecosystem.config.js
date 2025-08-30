module.exports = {
    apps: [
        {
            name         :  'DLK-WTI-ExpressTS',    // PM2에서 표시될 애플리케이션 이름
            script       :  './dist/server.js',     // 실행할 스크립트 경로 (컴파일된 JS 파일)
            watch        :  false,                  // 파일 변경 감지 자동 재시작 기능
            instances    :  1,                      // 생성할 애플리케이션 인스턴스 수. CPU 프로세스 개수에 따라 할당이 가능. "MAX"값을 하면 프로세스 최대로 가동.
            exec_mode    :  'cluster',              // 실행 모드 (cluster 또는 fork) fork로 설정하면 instances 값은 무시하고 단일로 설정함
            env_local    :  { NODE_ENV : 'local' }, // 개발 환경 변수
            env_dev      :  { NODE_ENV : 'dev'   }, // 개발 환경 변수
            env_prod     :  { NODE_ENV : 'prod'  }, // 프로덕션 환경 변수
            ignore_watch : ['node_modules'],        // watch 모드로 돌릴 시 해당 경로는 변화가 감지되어도 재시작 하지 않도록 설정정
        }
    ]
};