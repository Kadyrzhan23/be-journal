import type {Request, Response, NextFunction} from 'express';
import * as VService from '../services/Volumes.js'


export async function getVolumes(req: Request, res: Response, next: NextFunction) {
    try{
        console.log("start")
    const volumes = await VService.getVolumes();
    if(!volumes){
        return res.status(404).json({
            success: false,
            message: "No volumes found",
            code:"NO_VOLUMES_FOUND"
        });
    }

    res.status(200).json(volumes)
    }catch(err){
        console.log(err)
        next(err);
    }
}
export async function createVolume(req: Request, res: Response, next: NextFunction) {
    try {
        await VService.create()
        res.status(201).json({
            success: true,
            message: 'Volume_Created_Successfully.',
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            if (err.message === "No such document found for this year") {
                return res.status(403).json({
                    message: "No such document found for this year",
                    code: err.message
                })
            }
            else if (err.message === "VOLUME_FOR_THIS_YEAR_HAS_ALREADY_CREATED") {
                return res.status(409).json({
                    message: "Volume for this year has already created",
                    code: err.message
                })
            }
        }
        next(err);
    }
}