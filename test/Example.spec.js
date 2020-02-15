import app from '../src/app';
import supertest from 'supertest';

const testClient = supertest(app);

describe('testExample', () => {
  test('hello-world', async () => {
    const res = await testClient.get('/hello-world');
    expect(res.status).toBe(200);
  })
})