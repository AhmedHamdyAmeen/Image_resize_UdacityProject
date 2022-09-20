import { Router } from "express";
import { resizeImage } from "../../Controllers/resize.controller";

/** Request Validation Using Joi
 */
import validator from "../../Middleware/validation/validator";
import { resizeSchema } from "../../Middleware/validation/validation.schema";

const resize_route = Router();

/** Resize route
 */

resize_route.route("/resize").get(validator(resizeSchema), resizeImage);

export default resize_route;
