import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testTodo', () => {
  test('removeTodo', async () => {
    const res = await testClient
      .delete(`/todos/${process.env.TEST_TODO_ID}`);
    expect(res.status).toBe(200);
    expect(res.body).matchObject({
      msg: 'success',
    });
  })
})
