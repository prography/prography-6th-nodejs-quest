import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testComment', () => {
  test('getComment', async () => {
    const res = await testClient
      .get(`/todos/${process.env.TEST_TODO_ID}/comments/${process.env.TEST_COMMENT_ID}`)
    expect(res.status).toBe(200);
  })
})
