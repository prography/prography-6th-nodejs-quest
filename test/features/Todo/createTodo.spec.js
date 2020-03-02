import app from "../../../src/app";
import supertest from "supertest";

const testClient = supertest(app);

describe("testTodo", () => {
  test("createTodo", async () => {
    const payloads = [
      {
        title: "프로그라피 사전과제하기",
        description:
          "프로그라피 NodeJS 사전과제가 상당히 까다롭다고 한다. 한번 도전 해보자!",
        tags: ["prography", "nodejs"]
      },
      {
        title: "면접 준비",
        description:
          "깔끔한 복장, 웃기는 아재개그 일발 장전. 멋진 인상으로 임팩트를 주자!",
        tags: ["prography", "interview", "ajae-gag"]
      },
      {
        title: "프로그라피에서 시원하게 개발하기",
        description: "내가 만든 서비스가 세상을 바꾼다.",
        tags: ["prography", "new-project"]
      }
    ];
    for (let i = 0; i < 3; i += 1) {
      const payload = payloads[i];
      const res = await testClient.post("/todos").send(payload);
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject(payload);
      process.env[`TEST_TODO_ID_${i}`] = res.body.id;
    }
    // 첫번째 test todo id를 수정, 삭제 키로 사용
    process.env.TEST_TODO_ID = process.env.TEST_TODO_ID_0;
  });
});
