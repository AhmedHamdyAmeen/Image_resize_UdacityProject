import supertest from "supertest";
import { app } from "../../server";

const request = supertest(app);

/** Test the resize endpoint
 */
describe("Testing the resize endpoint: ", () => {
  it("Using the resize endpoint without providing parameters ==>  return 400", async () => {
    await request.get("/resize").expect(400);
  });

  it("Using the resize endpoint when width or height is less than 1 ==>  return 400", async () => {
    await request.get("/resize?width=0&height=700&imgName=d").expect(400);
  });

  it("Using the resize endpoint when width or height isn't a valid Integer ==>  return 404", async () => {
    await request.get("/resize?width=5a&height=700&imgName=d").expect(400);
  });

  it("Using the resize endpoint when imageName isn't found or has a different extensions ==>  return 400", async () => {
    await request.get("/resize?width=1150&height=700&imgName=y").expect(404);
  });

  it("Using the resize endpoint with a valid parameters ==>  return 200", async () => {
    await request.get("/resize?width=1150&height=700&imgName=d").expect(200);
  });
});
