import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testComment', () => {
  test('createComment', async () => {
    const payload = {
      contents: ' 프로그라피 사전과제를 언제까지 할 수 있을까?',
    };
    const res = await testClient
      .post(`/todos/${process.env.TEST_TODO_ID}/comments`)
      .send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(payload);
    process.env.TEST_COMMENT_ID = res.body.id;
  })
})
