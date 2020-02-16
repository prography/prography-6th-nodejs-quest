/**
 * 테스트 시나리오에 맞춰서 순차 실행
 */

// 할일 생성
import './Todo/createTodo.spec'

// 할일 읽기
import './Todo/getTodos.spec'
import './Todo/getTodo.spec'

// 댓글 생성
import './Comment/createComment.spec'

// 댓글 보기
import './Comment/getComments.spec'
import './Comment/getComment.spec'

// 댓글 수정
import './Comment/updateComment.spec'

// 댓글 삭제
import './Comment/removeComment.spec'

// 할일 수정
import './Todo/updateTodo.spec'
import './Todo/createTodo.spec'

// 할일 삭제
import './Todo/removeTodo.spec'
