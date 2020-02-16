import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testTodo', () => {
  test('getTodos', async () => {
    const res = await testClient
      .get('/todos')
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    res.body.forEach((todo) => {
      expect(
        Object.keys(todo)
      ).toEqual(expect.arrayContaining([
        'id',
        'title',
        'description',
        'isCompleted',
        'tags',
        'createdAt',
        'updatedAt',
      ]))
    })
  })
})
