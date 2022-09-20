import { NextFunction, Request, Response } from "express";
import path from "path";
import { existsSync } from "fs";

import { resizeImgSharp } from "./../Helpers/resizeImg";
import { imgs } from "../../Utils/imgs";

const resizeImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const { width, height, imgName } = req.query;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const imgName = req.query.imgName as string;
    const isImgFound: boolean = imgs.includes(imgName as string);
    const imgPath =
      path.resolve("./") +
      `/public/thumbnails/${imgName}_${width}_${height}.jpg`;

    /**  If No Parameters Found
     */
    if (
      [req.query.width, req.query.height, req.query.imgName].includes(undefined)
    ) {
      return res
        .status(400)
        .send(
          `<h1>Oops 😢, You should Enter: imgName, width, and height as a query string!</h1>`
        );
    }

    /**  If Parameters are not Correct
     */
    // a) if width or height is less than One or not valid Integer

    if (isNaN(width) || isNaN(height)) {
      return res.status(400).send(`
      <h1>Oops 😢, width, and height is must to be valid integer!</h1>
    `);
    }

    if ((width && height) <= 0) {
      return res.status(400).send(`
      <h1>Oops 😢, width, and height is must to be more than Zero!</h1>
    `);
    }

    // b) if imageName not found or has a different extensions

    if (!isImgFound) {
      return res
        .status(404)
        .send(
          `<h1>Oops 😢, This Image is not Found.. Please Enter a valid imgName</h1>`
        );
    }

    /**  If the Image Cashed
     */

    if (existsSync(imgPath) === true) {
      return res.status(200).sendFile(imgPath);
    }

    console.log("test Ya Man 😢😉");

    /**  If Image Not Cashed
     */

    if (existsSync(imgPath) === false) {
      await resizeImgSharp(width, height, imgName, imgPath, res);
      // return res.status(200).sendFile(imgPath);
    }

    // res.status(200).json({
    //   msg: "Image Resized",
    //   data: { width, height, imgName },
    //   path: `http://localhost:8080/thumbnails/${imgName}_${width}_${height}.jpg`,
    // });
  } catch (error) {
    next(error);
  }
};

export { resizeImage };
