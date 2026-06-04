import type {LocalizedString} from "./Issue.js";
import Types from "mongoose";

export interface IArticle {
    _id: Types.ObjectId;
    slug: string;
    issueId: Types.ObjectId | null;
    issueNumber: number;
    volumeNumber: number;
    authors: IArticleAuthor[];
    editorId: Types.ObjectId | null;
    createdBy: Types.ObjectId;
    status: ArticleStatus;
    reviewNote: string | null;
    title: LocalizedString;
    abstract: LocalizedString;
    body?: LocalizedString;
    pdfUrl: {
        en?: string;
        ru?: string;
        uz?: string;
        kz?: string;
    };
    topicCode: TopicCode;
    keywords: string[];
    doi: string | null;
    pageStart: number | null;
    pageEnd: number | null;
    isOpenAccess: boolean;
    isFeatured: boolean;
    viewCount: number;
    downloadCount: number;
    submittedAt: Date | null;
    publishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export type ArticleStatus = "created" | "submitted" | "revision_requested" |
    "approved" | "rejected" | "published" | "retracted" | "updated"

export type TopicCode = "chemical" | "biological" | "technical" |
    "agricultural" | "economic" | "veterinary"


export interface IArticleAuthor {
    userId: Types.ObjectId;

    order: number;

    corresponding: boolean;
}