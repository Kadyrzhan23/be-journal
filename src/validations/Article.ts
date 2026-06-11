import {celebrate, Joi, Segments} from "celebrate";


export const articleAuthorValidator = Joi.object({
    userId: Joi.string().optional(),

    firstname: Joi.string()
        .trim()
        .required(),

    lastname: Joi.string()
        .trim()
        .required(),

    order: Joi.number()
        .integer()
        .min(1)
        .required(),

    corresponding: Joi.boolean()
        .required(),
})

const validateLocalizeFields = Joi.object({
    ru: Joi.string().trim().required(),
    en: Joi.string().trim().required(),
    uz: Joi.string().trim().required(),
    kz: Joi.string().trim().required(),
})

const partialValidateFields = Joi.object({
    ru: Joi.string().trim(),
    en: Joi.string().trim(),
    uz: Joi.string().trim(),
    kz: Joi.string().trim(),
}).min(1)

const topicCodeValidator = Joi.string()
    .valid(
        "chemical",
        "biological",
        "technical",
        "agricultural",
        "economic",
        "veterinary"
    )
    .required();

const keywordValidator = Joi.string().valid(
    "Research Article",
    "Crop Science",
    "Open Access",
    "Public Health",
    "Review"
)

export const createArticleValidator = celebrate({
    [Segments.BODY]:Joi.object().keys({
        issueNumber:Joi.number().integer().required(),
        volumeNumber:Joi.number().integer().required(),
        authors:Joi.array().items(articleAuthorValidator).min(1).required(),
        createdBy:Joi.string().hex().length(24).required(),
        title: validateLocalizeFields.required(),
        abstract:validateLocalizeFields.required(),
        body: partialValidateFields.optional(),
        pdfUrl:partialValidateFields.required(),
        topicCode:topicCodeValidator,
        keywords:Joi.array().items(keywordValidator).min(1).required(),
        doi:Joi.string().required(),
        pageStart:Joi.number().integer(),
        pageEnd:Joi.number().integer(),
        isOpenAccess:Joi.boolean().optional(),
        isFeatured:Joi.boolean().optional(),
    })
})


