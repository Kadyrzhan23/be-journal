import Types from "mongoose";

export interface IVolume {
    _id: Types.ObjectId;

    number: number;
    year: number;

    createdAt: Date;
    updatedAt: Date;
}