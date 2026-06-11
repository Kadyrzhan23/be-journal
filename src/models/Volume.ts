import { Schema, model } from "mongoose";
import type { IVolume } from "../types/Volume.js";

const VolumeSchema = new Schema<IVolume>(
    {
        number: {type: Number, unique: true, required: true,},

        year: {type: Number, unique: true, required: true,},

        publishedAt:{
            type: Date,
            default: null,
        }
    },
    {
        timestamps: true,
    }
);

VolumeSchema.index(
    { number: 1, year: 1 },
    { unique: true }
);

export const VolumeModel = model<IVolume>("Volume", VolumeSchema);