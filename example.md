## request response 예시

1. 할일 등록: `POST /todos`

   ex) localhost:3000/todos

   - request - body

     ```json
     {
       "title": "할일의 제목",
       "description": "할일 설명",
       "tags": ["prograpy", "Nodejs"],
     }
     ```

   - response

     ```json
     {
       "id": 1,
       "title": "할일의 제목",
       "description": "할일 설명",
       "tags": ["prograpy", "Nodejs"],
       "isCompleted": false,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00",
     }
     ```

     

2. 할일 목록: `GET /todos`

   ex) localhost:3000/todos

   - response

     ```json
     [
       {
         "id": 1,
         "title": "할일의 제목",
         "description": "할일 설명",
       	 "tags": ["prograpy", "Nodejs"],
       	 "isCompleted": false,
       	 "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       	 "updatedAt": "2019-02-17T08:00:00"
     	},
       {
         "id": 2,
         "title": "할일의 제목",
       	 "description": "할일 설명",
       	 "tags": ["prograpy", "Nodejs"],
       	 "isCompleted": true,
       	 "createdAt": "2019-02-17T09:00:00",
       	 "updatedAt": "2019-02-17T12:0:00",
     	}
     ]
     ```

     

3. 할일 읽기: `GET /todos/:todoId`

   ex) localhost:3000/todos/1

   - response

     ```json
     {
       "id": 1,
       "title": "할일의 제목",
       "description": "할일 설명",
       "tags": ["prograpy", "Nodejs"],
       "isCompleted": false,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00",
     }
     ```

     

4. 할일 수정: `PUT /todos/:todoId`

   ex) localhost:3000/todos/1

   - request - body

     ```json
     {
       "title": "프로그라피 일정 수정"
     }
     
       /**
       title, description, tags 모두 수정 가능해야합니다!
       
       - description 수정 시
       { "description": "할일 설명 수정" }
       
       - tags 수정 시  
       { "tags": ["prograpy", "Nodejs", "Back"] }
       **/
     ```

   - response

     ```json
     {
       "id": 1,
       "title": "프로그라피 일정 수정",
       "description": "할일 설명",
       "tags": ["prograpy", "Nodejs"],
       "isCompleted": false,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-19T19:00:00",
     }
     ```

     

5. 할일 완료: `PUT /todos/:todoId/complete`

   ex) localhost:3000/todos/1/complete

   - response

     ```json
     {
       "id": 1,
       "title": "프로그라피 일정 수정",
       "description": "할일 설명",
       "tags": ["prograpy", "Nodejs"],
       "isCompleted": true,
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-28T19:30:00",
     }
     ```

   

6. 할일 삭제: `DELETE /todos/:todoId`

   ex) localhost:3000/todos/1

   - response

     ```json
     {
       "msg": "success"
     }
     ```

     

7. 댓글 등록: `POST /todos/:todoId/comments`

   ex) localhost:3000/todos/1/comments

   - request

     ```json
     {
       "contents": "댓글"
     }
     ```

   - response

     ```json
     {
       "id": 1,
       "contents": "댓글",
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00"
     }
     ```
     

8. 댓글 목록: `GET /todos/:todoId/comments`

   ex) localhost:3000/todos/1/comments

   - response

     ```json
     [
       {
        "id": 1,
       	"contents": "댓글",
       	"createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       	"updatedAt": "2019-02-17T08:00:00"
     	},
       {
         "id": 2,
         "contents": "댓글22222",
       	 "createdAt": "2019-02-17T12:00:00",
       	 "updatedAt": "2019-02-17T12:00:00"
       }
     ]
     ```

     

     

9. 댓글 읽기: `GET /todos/:todoId/comments/:commentId`

   ex) localhost:3000/todos/1/comments/1

   - response

     ```json
     {
       "id": 1,
       "contents": "댓글",
       "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
       "updatedAt": "2019-02-17T08:00:00"
     }
     ```

     

10. 댓글 수정: `PUT /todos/:todoId/comments/:commentId`

    ex) localhost:3000/todos/1/comments/1

    - request - body

      ```json
      {
        "contents": "댓글 수정"
      }
      ```

    - response

      ```json
      {
        "id": 1,
        "contents": "댓글 수정",
        "createdAt": "2019-02-17T08:00:00", // 날짜의 포맷은 예시일뿐 어떤 포맷이어도 상관없습니다
        "updatedAt": "2019-02-18T012:00:00"
      }
      ```

      

11. 댓글 삭제: `DELETE /todos/:todoId/comments/:commentId`

    ex) localhost:3000/todos/1/comments/1

    - response

      ```json
      {
        "msg": "success"
      }
      ```

      

## :warning: 유의사항

:one: **request**(요청)은/는 **예시와 key가 동일**해야합니다. <span style="color: red">그외 key가 있을 시 테스트가 제대로 안될 수 있습니다!</span> 

:two: **response**​(응답)은/는 **필수 key** 만 적은 것 입니다. 더 많은 내용이 존재해도 상관없습니다.