import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testComment', () => {
  test('getComments', async () => {
    const res = await testClient
      .get(`/todos/${process.env.TEST_TODO_ID}/comments`)
    expect(res.status).toBe(200);
  })
})
