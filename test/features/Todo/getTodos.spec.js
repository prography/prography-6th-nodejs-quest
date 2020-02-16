import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testTodo', () => {
  test('getTodos', async () => {
    const res = await testClient
      .get('/todos')
    expect(res.status).toBe(200);
  })
})
