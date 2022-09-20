import Joi from "joi";

const resizeSchema = Joi.object({
  width: Joi.number().required(),
  height: Joi.number().required(),
  imgName: Joi.string().required(),
});

export { resizeSchema };
