import {celebrate, Joi, Segments} from "celebrate";

export const slugValidation = celebrate({
    [Segments.PARAMS]: Joi.object({
        slug: Joi.string()
            .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
            .required()
    })
});