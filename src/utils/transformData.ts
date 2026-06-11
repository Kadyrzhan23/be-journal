import type { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

type Lang = 'en' | 'ru' | 'uz';

export function responseTransformer(
    _req: Request,
    res: Response,
    next: NextFunction,
) {
    const oldJson = res.json;

    res.json = function (data) {
        const lang: Lang = res.locals.language || 'en'; // гарантия
        const transformed = transformData(data, lang);
        return oldJson.call(this, transformed);
    };

    next();
}

function transformData(data: any, lang: Lang): any {
    // console.log(data);
    if (Array.isArray(data)) {
        return data.map((item) => transformData(item?._doc || item, lang));
    }

    if (data !== null && typeof data === 'object') {
        // Если это ObjectId → превращаем в строку
        if (data instanceof mongoose.Types.ObjectId) {
            return data.toString();
        }

        // Если это Buffer → в hex строку (или base64)
        if (Buffer.isBuffer(data)) {
            return data.toString('hex');
        }

        // Если объект содержит локализации en/ru/uz
        const keys = Object.keys(data);
        if (['en', 'ru', 'uz'].every((l) => keys.includes(l))) {
            return data[lang] || data['en'];
        }

        // Рекурсивный обход
        const result: Record<string, any> = {};
        for (const [key, value] of Object.entries(data)) {
            result[key] = transformData(value, lang);
        }
        return result;
    }

    return data;
}
