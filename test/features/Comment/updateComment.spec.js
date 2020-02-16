import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testComment', () => {
  test('updateComment', async () => {
    const payload = {
      contents: '프로그라피 과제 제출일은 면접 전날 까지더라!',
    }
    const res = await testClient
      .put(`/todos/${process.env.TEST_TODO_ID}/comments/${process.env.TEST_COMMENT_ID}`)
      .send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(payload);
  })
})
