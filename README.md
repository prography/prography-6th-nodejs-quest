# Prography 6th NodeJS Quest

> NodeJS 전형의 점수는 **면접(70%), 과제(30%)** 입니다. 과제의 미완성이 합격에 큰 영향을 주지 않습니다.

## 개요

이 과제는 프로그라피 활동에 필요한 기초적인 서버 개발 능력을 확인합니다. 간단한 기획이 주어지고, 기획에 맞춰서 요구사항에 맞게 API 서버를 구현할 수 있는 능력을 확인합니다. 과제는 전체 API 목록 중 **정상 작동하는 API의 갯수를 세는 방식** 으로 개발이 정상적으로 수행 되었음을 판단합니다. 작성한 API에 적절한 요청을 넣었을 때, 기대되는 응답이 나오는지 확인을 하는 e2e 테스트를 통해 채점을 합니다.

과제의 진행은 **이 레포지토리를 fork 한 뒤에 지원자의 깃헙에 올리는 방식** 으로 진행합니다. fork하는 방법을 잘 모르신다면, [여기](./../../fork)를 눌러 진행 해주시기 바랍니다. fork 후에도 지원자의 깃헙에서 과제를 확인할 수 있습니다.

더 궁금한 것이 있으시면 **NodeJS 운영진 [오픈채팅방]()** 으로 오세요! ~~(날씨 물어보셔도 되요)~~

## 개발환경

- Node 10 이상
- ES6 이상 문법 사용(babel-node)
- nodemon(코드 수정시 자동 재시작)
- express
- body-parser
- dotenv

개발에만 집중할 수 있도록, 일부 서버 환경이 포함되어 있습니다.([express](https://www.npmjs.com/package/express)), 이 레포지토리를 클론한 후에 다음의 명령어로 시작할 수 있습니다.

```bash
# 기본 라이브러리 설치
> npm install

# 서버 실행
> npm start

# 테스트 실행
> npm test
``` 


## 과제
다음의 기획과 API목록을 읽고, 적절한 **Restful API 서버** 를 구현해주시기 바랍니다.

#### 기획
철수는 할일을 만들고 관리할 수 있는 프로그램을 제작하고자한다. 이 프로그램에는 다음과 같은 기능이 있다.
- 할일이 있다.
- 할일은 다음의 필드를 가지고 있다.

  ```Typescript
  Todo {
    id: number; // 숫자, 자동 생성
    title: string; // 문자열, 필수값
    description: string; // 문자열, 필수 값,
    tags: string[]; // 배열, 옵션 ex) ["prography", "nodejs"]
    isCompleted: boolean; // 참불, 초깃값: false
    createdAt: Date; // 날짜, 생성시 자동 생성
    updatedAt: Date; // 날짜, 생성시 자동 생성, 수정시 자동 갱신,
  }
  ```

- 할일을 등록/수정/삭제 할 수 있다.
- 할일을 완료 표시를 할 수 있다.
- 할일에 태그를 삽입할 수 있다.
- (옵션)할일을 태그로 모아서 볼 수 있다.
- (옵션)할일을 생성된 순서로 정렬할 수 있다.
- (옵션)할일을 제목 또는 설명의 내용의 일부분으로 검색할 수 있다.
- 할일에 댓글을 등록/수정/삭제 할 수 있다.
- 댓글은 다음의 필드를 가지고 있다.

  ```Typescript
    Comment {
      id: number; // 숫자, 자동 생성
      contents: string; // 문자열, 필수값
      createdAt: Date; // 날짜, 생성시 자동 생성
      updatedAt: Date; // 날짜, 생성시 자동 생성, 수정시 자동 갱신,
    }
    ```

#### 작성해야하는 API
이 서버에서 요구하는 **API는 총 11개**입니다.

1. 할일 등록: `POST /todos`
2. 할일 목록: `GET /todos`
3. 할일 읽기: `GET /todos/:todoId`
4. 할일 수정: `PUT /todos/:todoId`
5. 할일 완료: `PUT /todos/:todoId/complete`
6. 할일 삭제: `DELETE /todos/:todoId`
7. 할일에 댓글 등록: `POST /todos/:todoId/comments`
8. 할일의 댓글 목록: `GET /todos/:todoId/comments`
9. 할일의 댓글 읽기: `GET /todos/:todoId/comments/:commentId`
10. 할일의 댓글 수정: `PUT /todos/:todoId/comments/:commentId`
11. 할일의 댓글 삭제: `DELETE /todos/:todoId/comments/:commentId`

각 API의 [요청, 응답 예시](./example.md)를 확인해주세요.

### 제출방법

fork가 된 이후에 진행하기 때문에, 제출이 필요 없습니다. 마감일 기준 23:59:59 까지의 커밋까지 인정이됩니다.

### 가산점 항목

- 브랜치를 나누어서 개발
- validation 처리, 빈값의 경우 클라이언트 측 에러임을 알려주기
- 아래의 기능을 추가로 개발합니다.
  1. 할일 정렬: `GET /todos?order[createdAt]=desc`
  2. 할일 검색1: `GET /todos?title=%과제%`
  3. 할일 검색2: `GET /todos?description=%프로그라피%`
  4. 할일 검색3: `GET /todos?tags[]=prography&tags[]=nodejs`

> **Tip**: 위의 URL쿼리(`?order[createdAt]=desc`)의 경우 [qs 라이브러리](https://www.npmjs.com/package/qs)를 사용하시면 쉽게 구현이 가능합니다.

***

### 채점

`npm test` 명령어를 실행하면, 각 API들에 대하여 e2e 테스트를 미리 진행할 수 있습니다.

테스트 내용은 [test](./test) 폴더에 정의되어있습니다. 테스트 라이브러리는 [jest](https://jestjs.io/)와 [supertest](https://github.com/visionmedia/supertest)를 사용합니다.