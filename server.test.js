const request = require("supertest");
const app = require("./server");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("It should response the text Hello World!", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.text).toBe("Hello World!");
        done();
      });
  });

  test("it should return empty array", async () => {
    const users = await request(app).get("/users");
    expect(users.req.outputData).toEqual([]);
  });
});
