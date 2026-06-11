import { Schema, model } from "mongoose";
import type { IIssue } from "../types/Issue.js";

const IssueSchema = new Schema<IIssue>(
    {
        volumeId: {
            type: Schema.Types.ObjectId,
            ref: "Volume",
            required: true,
        },
        number: {type: Number, required: true,},
        title: {
            en: { type: String, required: true },
            ru: { type: String, required: true },
            uz: { type: String, required: true },
            kz: { type: String, required: true },
        },
        description: {
            en: { type: String, default: null },
            ru: { type: String, default: null },
            uz: { type: String, default: null },
            kz: { type: String, default: null },
        },
        isSpecial: {type: Boolean, default: false},
        specialTheme: {
            en: { type: String, default: null },
            ru: { type: String, default: null },
            uz: { type: String, default: null },
            kz: { type: String, default: null },
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

IssueSchema.index(
    { volumeId: 1, number: 1 },
    { unique: true }
);

IssueSchema.index({ volumeId: 1 });

IssueSchema.index({ publishedAt: -1 });

export const IssueModel = model<IIssue>("Issue", IssueSchema);