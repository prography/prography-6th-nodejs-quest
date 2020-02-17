import app from '../../../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testTodo', () => {
  test('createTodo', async () => {
    const payload = {
      title: '프로그라피 사전과제하기',
      description: '프로그라피 NodeJS 사전과제가 상당히 까다롭다고 한다. 한번 도전 해보자!',
      tags: ['prography', 'nodejs'],
    };
    const res = await testClient
      .post('/todos')
      .send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(payload);
    process.env.TEST_TODO_ID = res.body.id;
  })
})
