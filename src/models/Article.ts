import { Schema, model } from "mongoose";
import type { IArticle } from "../types/Article.js";

const ArticleAuthorSchema = new Schema(
    {
        order: {
            type: Number,
            default: 0,
        },

        corresponding: {
            type: Boolean,
            default: false,
        },
    },
    { _id: false }
);

const ArticleSchema = new Schema<IArticle>(
    {
        slug: {
            type: String,
            required: true,
            trim: true,
        },
        issueId: {
            type: Schema.Types.ObjectId,
            ref: "Issue",
            default: null,
        },
        issueNumber:{
            type: Number,
            required: true,
        },

        volumeNumber:{
            type: Number,
            required: true,
        },

        authors: {
            type: [ArticleAuthorSchema],
            default: [],
        },

        editorId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        status: {
            type: String,
            default: "created",
        },

        reviewNote: {
            type: String,
            default: null,
        },

        title: {
            en: { type: String, required:true },
            ru: { type: String, required:true },
            uz: { type: String, required:true },
            kz: { type: String, required:true },
        },

        abstract: {
            en: { type: String, default: null },
            ru: { type: String, default: null },
            uz: { type: String, default: null },
            kz: { type: String, default: null },
        },

        body: {
            en: { type: String, default: null },
            ru: { type: String, default: null },
            uz: { type: String, default: null },
            kz: { type: String, default: null },
        },

        pdfUrl: {
            en: { type: String, default: null },
            ru: { type: String, default: null },
            uz: { type: String, default: null },
            kz: { type: String, default: null },
        },

        topicCode: {
            type: String,
            required: true,
        },

        keywords: {
            type: [String],
            default: [],
        },

        doi: {
            type: String,
            default: null,
        },

        pageStart: {
            type: Number,
            default: null,
        },

        pageEnd: {
            type: Number,
            default: null,
        },

        isOpenAccess: {
            type: Boolean,
            default: true,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        viewCount: {
            type: Number,
            default: 0,
        },

        downloadCount: {
            type: Number,
            default: 0,
        },

        submittedAt: {
            type: Date,
            default: null,
        },

        publishedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

ArticleSchema.index({ slug: 1 }, { unique: true });

ArticleSchema.index({ "authors.userId": 1 });

ArticleSchema.index({ createdBy: 1 });

ArticleSchema.index({ status: 1 });

ArticleSchema.index({ topicCode: 1 });

ArticleSchema.index({ issueId: 1 });

ArticleSchema.index({ publishedAt: -1 });

ArticleSchema.index(
    { doi: 1 },
    { unique: true, sparse: true }
);

// комбинированный индекс (очень полезен для фильтров)
ArticleSchema.index({
    status: 1,
    topicCode: 1,
});

export const ArticleModel = model<IArticle>("Article", ArticleSchema);