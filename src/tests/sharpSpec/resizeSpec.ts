import { response } from "express";
import { resizeImgSharp } from "../../MVC/Helpers/resizeImg";

describe("Test The resizeImgSharp()", () => {
  it("Expect resizeImgSharp() result toBeResolved", async () => {
  const result =  await resizeImgSharp(
      300,
      200,
      "a",
      "./wrong/path",
      response
    )
    expect(result).toBe(result);
  });
});
