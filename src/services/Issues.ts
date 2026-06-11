import { IssueModel as IModel} from "../models/Issue.js"
import type {IssueFromFR} from "../types/Issue.js";


export async function create({volumeId}:{volumeId:string}) {
    const existingVolume = await
        IModel.findOne({volumeId})
    console.log(volumeId)
    if(!existingVolume){
        throw new Error("NO_SUCH_VOLUME_FOUND")
    }

    const lastIssue = await
        IModel.findOne().sort({createdAt:-1})
    if(!lastIssue){
        return IModel.create({
            volumeId,
            number:1
        })
    }

    return IModel.create({
        volumeId,
        number:lastIssue.number + 1
    })
}