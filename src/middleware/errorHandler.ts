import type {NextFunction, Response} from "express";
import {CustomError} from "../errors/customError.js";

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.log(err)
    if (err instanceof CustomError) {
        return res.status(err.statusCode)
            .json(err.serializeError());
    }

    console.error(err);

    res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Internal server error"
        }
    });
};