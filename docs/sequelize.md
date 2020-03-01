# Sequelize

- operatorsAliases : operatorsAliases는 보안에 취약한 연산자를 사용할지 여부를 설정하는 옵션이다.
- Sequelize는 기본적으로 Promise 기반이기 때문에, 모든 CRUD 작업이 Promise의 형태로 시작하고 끝난다는 점을 감안, 위의 코드의 sync()가 실행되면 index.js 내에서 작성된 Sequelize 작업이 실제 DB와 동기화되면서 실행됩니다. 따라서 테이블 정의, 연결 관계 정의 등과 같은 작업은 sync() 이전에 완료해야 합니다. sync()의 결과는 Promise로, 동기화가 완료된 뒤 .then()을 통하여 원하는 CRUD 작업을 수행할 수 있게 됩니다.
- index.js의 config 객체에 적은 database의 이름에 맞춰서 실제 DB에 동일한 이름의 데이터베이스를 생성해줘야 합니다. 그렇지 않으면 Sequelize가 동기화를 하지 못합니다.
