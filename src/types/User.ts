import Types from "mongoose"
export type UserRole = "author" | "admin" | "editor";

export interface IUser {
    _id: Types.ObjectId;

    firstName: string;
    lastName: string;

    email: string;
    phone: string;

    role: UserRole;

    degree: string | null;
    workplace: string | null;

    country: string | null;
    orcid: string | null;

    avatarUrl: string | null;

    isVerified: boolean;

    lastLoginAt: Date | null;

    createdAt: Date;
    updatedAt: Date;
}