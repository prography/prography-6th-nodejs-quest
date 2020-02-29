import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testComment', () => {
  test('createComment', async () => {
    const payloads = [
      { contents: '프로그라피 사전과제를 언제까지 할 수 있을까?' },
      { contents: '프로그라피 사전과제는 금방 하지 않을까?' },
      { contents: '프로그라피 사전과제는 정말 쉽지!' },
    ]
    for (let i = 0; i < 3; i += 1) {
      const payload = payloads[i];
      const res = await testClient
        .post(`/todos/${process.env.TEST_TODO_ID}/comments`)
        .send(payload);
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject(payload);
      process.env[`TEST_COMMENT_ID_${i}`] = res.body.id;
    }
    // 첫번째 test comment id를 수정, 삭제 키로 사용
    process.env.TEST_COMMENT_ID = process.env.TEST_COMMENT_ID_0;
  })
})
