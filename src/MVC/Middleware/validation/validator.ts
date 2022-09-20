/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from "joi";
import { NextFunction, Request, Response } from "express";

const validator =
  (validationSchema: Joi.ObjectSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = validationSchema.validate(req.body, {
      abortEarly: false,
    }); // abortEarly: true => stop validation with the first error

    if (error) {
      console.log("Request Value: ", value);
      console.log(error);

      res
        .status(422)
        .json({ msg: "Request Validation error", data: error.details });
    } else {
      next();
    }
  };

export default validator;
