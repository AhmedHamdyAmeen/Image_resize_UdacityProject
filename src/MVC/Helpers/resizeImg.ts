import sharp from "sharp";
import { Response } from "express";

export const resizeImgSharp = async (
  width: number,
  height: number,
  imgName: string,
  imgPath: string,
  res: Response
) => {
  // I got this code from the Sharp Documentation: https://sharp.pixelplumbing.com/api-resize
  return sharp(`./public/imgs/${imgName}.jpg`)
    .resize(width, height, {
      kernel: sharp.kernel.nearest,
      fit: "cover",
      position: "center",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .toFile(`./public/thumbnails/${imgName}_${width}_${height}.jpg`)
    .then(() => {
      return res.status(200).sendFile(imgPath);
    })
    .catch((err) => {
      console.log(err);
    });
};
