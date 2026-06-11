import type {NextFunction, Request, Response} from "express";
import * as ArticleService from "../services/Articles.js"
import {findSimilarArticlesBySlug} from "../services/Articles.js";

export async function getArticleBySlug(req: Request, res: Response, next: NextFunction) {
    try {
        const slug = String(req.params.slug);
        if (!slug) {
            res.status(400).json({
                success: false,
                code:"SLUG_IS_REQUIRED",
            });
            return
        }
        const article = await ArticleService.findBySlug(slug)
        if (!article) {
            const fallback = await findSimilarArticlesBySlug(slug);

            if (!fallback || fallback.length === 0) {
                return res.status(404).json({
                    success: false,
                    code:"ARTICLE_NOT_FOUND",
                });
            }

            return res.json({
                message: "Article not found, sent similar articles",
                // redirectTo: fallback.slug,
                data: fallback
            });
        }


        res.status(200).json(article);
    } catch (err) {
        next(err)
    }
}

export async function createArticle(req: Request, res: Response, next: NextFunction) {
    try {
        const newArticle = await ArticleService.create(req.body)

        if (!newArticle) {
            return res.status(400).json({
                success: false,
                code:"ARTICLE_WAS_NOT_CREATED",
            })
        }
        res.status(201).json(newArticle)
    } catch (err) {
        console.log(err)
        next(err)
    }
}