import {VolumeModel as VModel} from "../models/Volume.js"


export async function getVolumes() {
    return VModel.find({},{
        year:1,number:1
    }).sort({number:-1})
}

export async function create (){
    const year = new Date().getFullYear()
    const existing = await VModel.findOne({year: year});

    if(existing){
        throw new Error("VOLUME_FOR_THIS_YEAR_HAS_ALREADY_CREATED");
    }
    const lastVolume = await VModel.findOne().sort({ _id: -1 });
    if(lastVolume){
       return VModel.create({
           year,
           number:lastVolume.number + 1
       })
    }
    return VModel.create({
        year,
        number: 1
    })
}