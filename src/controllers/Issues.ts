import type {NextFunction, Request, Response} from "express";
import * as IService from '../services/Issues.js'
export async function createIssue(req: Request, res: Response, next: NextFunction) {
    try{
        const newIssue = await IService.create(req.body)

        if(!newIssue){
            return res.status(403).json({
                code:"ISSUE_WAS_NOT_CREATED",
            })
        }

        res.status(201).json(newIssue)
    }catch(err){
        console.log(next)
        if(err instanceof Error){
            if(err.message === "NO_SUCH_VOLUME_FOUND"){
                return res.status(404).json({
                    success: false,
                    code:err.message,
                    message:"No such VOLUME_FOUND"
                })            }
        }
        next(err)
    }
}