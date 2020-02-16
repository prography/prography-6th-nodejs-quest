import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testTodo', () => {
  test('completeTodo', async () => {
    const res = await testClient
      .put(`/todos/${process.env.TEST_TODO_ID}/complete`);
    expect(res.status).toBe(200);
    expect(res.body.data.isCompleted).toBe(true);
  })
})