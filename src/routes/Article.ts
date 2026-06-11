import express from "express";
import {createArticle, getArticleBySlug} from "../controllers/Articles.js";
import {createArticleValidator} from "../validations/Article.js";
import {slugValidation} from "../validations/Slug.js";
import checkLanguage from "../middleware/languageMiddleware.js";
import {responseTransformer} from "../utils/transformData.js";

const router = express.Router();
router.use(checkLanguage)
router.use(responseTransformer)

router.get("/:slug", slugValidation,  getArticleBySlug)

router.post("/", createArticleValidator, createArticle)

export default router;