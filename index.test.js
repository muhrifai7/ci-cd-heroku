const request = require("supertest");
const app = require(".");

describe("Test the root path", () => {
  // test("It should response the GET method", () => {
  // const res = await request(app).get("/");
  // expect(res.statusCode).toBe(200);
  // });

  // test("It should response the text Hello World!", () => {
  //   request(app)
  //     .get("/")
  //     .then((response) => {
  //       expect(response.text).toBe("Hello World!");
  //     });
  // });

  // test("it should return empty array", () => {
  //   const users = request(app).get("/users");
  //   expect(users.req.outputData).toEqual([]);
  // });
  test("should return sum", () => {
    expect(app.sum(1, 2)).toBe(3);
  });
});
