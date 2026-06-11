import Types from "mongoose";
import type {LocalizedString} from "./Issue.js";

export interface IVolume {
    _id: Types.ObjectId;

    number: number;
    year: number;

    publishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}