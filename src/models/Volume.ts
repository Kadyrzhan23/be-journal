import { Schema, model } from "mongoose";
import type { IVolume } from "../types/Volume.js";

const VolumeSchema = new Schema<IVolume>(
    {
        number: {
            type: Number,
            unique: true,
            required: true,
        },

        year: {
            type: Number,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

VolumeSchema.index(
    { number: 1, year: 1 },
    { unique: true }
);

VolumeSchema.index({ year: 1 });

export const VolumeModel = model<IVolume>("Volume", VolumeSchema);