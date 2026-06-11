import type { Request, Response, NextFunction } from 'express';
export default function checkLanguage(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { lang } = req.query;

    if (lang) {
        res.locals.language = lang;
        return next();
    }

    const cookielang = req.cookies?.lng;

    if (cookielang) {
        res.locals.language = cookielang;
        return next();
    }
    res.locals.language = 'ru';
    next();
}
