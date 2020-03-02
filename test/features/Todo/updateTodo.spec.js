import app from "../../../src/app";
import supertest from "supertest";

const testClient = supertest(app);

describe("testTodo", () => {
  test("updateTodo", async () => {
    const payload = {
      title: "프로그라피 일정 수정 "
    };
    const res = await testClient
      .put(`/todos/${process.env.TEST_TODO_ID}`)
      .send(payload);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(payload);
  });
});
