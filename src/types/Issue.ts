import Types from "mongoose";
export interface LocalizedString {
    en: string;
    ru: string;
    uz: string;
    kz: string;
}
export interface IIssue {
    _id: Types.ObjectId;

    volumeId: Types.ObjectId;

    number: number;

    title: LocalizedString;

    description: LocalizedString | null;

    isSpecial: boolean;

    specialTheme: LocalizedString | null;

    publishedAt: Date | null;

    createdAt: Date;
    updatedAt: Date;
}

