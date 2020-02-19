# 요청-응답 예시

1. 할일 등록: `POST /todos`

   ex) `localhost:3000/todos`

   - request - body

     ```javascript
     {
       "title": "프로그라피 사전과제하기!", // 필수
       "description": "프로그라피 면접 전에 사전과제를 완성해야한다.", // 필수
       "tags": ["prography", "nodejs"], // 옵션
     }
     ```

   - response

     ```javascript
     {
       "id": 1,
       "title": "프로그라피 사전과제하기!",
       "description": "프로그라피 면접 전에 사전과제를 완성해야한다.",
       "tags": ["prography", "nodejs"],
       "isCompleted": false,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00",
     }
     ```


2. 할일 목록: `GET /todos`

   ex) `localhost:3000/todos`

   - response

     ```javascript
     [
       {
          "id": 1,
          "title": "프로그라피 사전과제하기!",
          "description": "프로그라피 면접 전에 사전과제를 완성해야한다.",
          "tags": ["prography", "nodejs"],
          "isCompleted": false,
          "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
          "updatedAt": "2019-02-17T08:00:00"
     	  },
        {
          "id": 2,
          "title": "로그라피 사전과제 테스트하기!",
          "description": "사전과제는 npm test 로 테스트를 해볼 수 있다는데??",
          "tags": ["prography", "nodejs", "test"],
          "isCompleted": true,
          "createdAt": "2019-02-17T09:00:00",
          "updatedAt": "2019-02-17T12:0:00",
     	  }
     ]
     ```


3. 할일 읽기: `GET /todos/:todoId`

   ex) `localhost:3000/todos/1`

   - response

     ```javascript
     {
       "id": 1,
       "title": "로그라피 사전과제하기!",
       "description": "프로그라피 면접 전에 사전과제를 완성해야한다.",
       "tags": ["prography", "nodejs"],
       "isCompleted": false,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00",
     }
     ```

     

4. 할일 수정: `PUT /todos/:todoId`

   ex) `localhost:3000/todos/1`

   - request - body

     ```javascript
     {
       "title": "프로그라피 면접은 편안한 마음으로!",
       "tags": ["prography", "nodejs", "backend"]
     }

      /**
     title, description, tags 모두 선택적으로 수정 가능해야합니다!

      - description 수정 시
      { "description": "할일 설명 수정" }
 
      - tags 수정 시  
      { "tags": ["prography", "nodejs", "backend"] }
      **/
     ```

   - response

     ```javascript
     {
       "id": 1,
       "title": "프로그라피 면접은 편안한 마음으로!",
       "description": "프로그라피 면접 전에 사전과제를 완성해야한다.",
       "tags": ["prography", "nodejs", "backend"],
       "isCompleted": false,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-19T19:00:00",
     }
     ```


5. 할일 완료: `PUT /todos/:todoId/complete`

   ex) `localhost:3000/todos/1/complete`

   - response

     ```javascript
     {
       "id": 1,
       "title": "프로그라피 일정 수정",
       "description": "프로그라피 면접 전에 사전과제를 완성해야한다.",
       "tags": ["prography", "nodejs"],
       "isCompleted": true,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-28T19:30:00",
     }
     ```

   

6. 할일 삭제: `DELETE /todos/:todoId`

   ex) `localhost:3000/todos/1`

   - response

     ```javascript
     {
       "msg": "success"
     }
     ```

     

7. 댓글 등록: `POST /todos/:todoId/comments`

   ex) `localhost:3000/todos/1/comments`

   - request

     ```javascript
     {
       "contents": "댓글"
     }
     ```

   - response

     ```javascript
     {
       "id": 1,
       "contents": "댓글",
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00"
     }
     ```
     

8. 댓글 목록: `GET /todos/:todoId/comments`

   ex) `localhost:3000/todos/1/comments`

   - response

     ```javascript
     [
       {
        "id": 1,
       	"contents": "오늘도 자신있다 아자아자!",
       	"createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       	"updatedAt": "2019-02-17T08:00:00"
     	},
       {
         "id": 2,
         "contents": "언제나 즐거운 마음으로!",
       	 "createdAt": "2019-02-17T12:00:00",
       	 "updatedAt": "2019-02-17T12:00:00"
       }
     ]
     ```


9. 댓글 읽기: `GET /todos/:todoId/comments/:commentId`

   ex) `localhost:3000/todos/1/comments/1`

   - response

     ```javascript
     {
       "id": 1,
       "contents": "오늘도 자신있다 아자아자!",
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00"
     }
     ```


10. 댓글 수정: `PUT /todos/:todoId/comments/:commentId`

    ex) `localhost:3000/todos/1/comments/1`

    - request - body

      ```javascript
      {
        "contents": "언제나 즐거운 마음으로!"
      }
      ```

    - response

      ```javascript
      {
        "id": 1,
        "contents": "언제나 즐거운 마음으로!",
        "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
        "updatedAt": "2019-02-18T012:00:00"
      }
      ```


11. 댓글 삭제: `DELETE /todos/:todoId/comments/:commentId`

    ex) `localhost:3000/todos/1/comments/1`

    - response

      ```javascript
      {
        "msg": "success"
      }
      ```

## :warning: 유의사항

:one: **Request**(요청)은/는 **예시와 key가 동일(camelCase)** 해야합니다. key이름을 다르게 할 경우에는 테스트에서 실패합니다. 자세한 내용은 <a href="./test/features/Todo/createTodo.spec.js">테스트 코드</a>를 확인해보시면 더 좋을 것 같습니다.

:two: **response**​(응답)은/는 **필수 key** 만 적은 것 입니다. 더 많은 내용이 존재해도 상관없습니다.