import {ArticleModel} from "../models/Article.js";
import type {ArticleBodyFromFR, IArticle} from "../types/Article.js";
import slugify from "slugify";


export async function create (dto:ArticleBodyFromFR) : Promise<IArticle>{
    const slug = await generateSlug(dto.title.en)
    return ArticleModel.create({...dto,slug});
}

export async function findBySlug(slug:string):Promise<IArticle | null>{
    return ArticleModel.findOne({slug})
}

export async function findSimilarArticlesBySlug(slug:string):Promise<IArticle[] | null>{
    return ArticleModel.find({
        slug: { $regex: `^${slug}` }
    })
}
export async function generateSlug(title: string): Promise<string> {
    const baseSlug = slugify(title, {
        lower: true,
        strict: true,
        trim: true,
    });

    let slug = baseSlug;
    let counter = 1;

    while (await ArticleModel.exists({ slug })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}
