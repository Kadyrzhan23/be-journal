import { model, Schema } from "mongoose";
import type { IUser } from "../types/User.js";

const UserSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        degree: {
            type: String,
            default: null,
        },

        workplace: {
            type: String,
            default: null,
        },

        country: {
            type: String,
            required: true,
        },

        orcid: {
            type: String,
            default: null,
        },

        avatarUrl: {
            type: String,
            default: null,
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        lastLoginAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// INDEXES (очень важно)
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ phone: 1 }, { unique: true });

export const UserModel = model<IUser>("User", UserSchema);