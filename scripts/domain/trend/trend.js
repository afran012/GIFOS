import * as GifService from "../services/giftService.js";
import * as TrendTempleate from "../domain/trendtemplate.js";

const createTrendSection = async (limit , offset) =>{
    try{
        const trendTags = await GifService.getGifTrend(limit,offset)
/*
        if (trendTags.length===0) {
            return {}
            throw new Error("No se pudo obtener el tag")
        }
        //return console.log(trendTags)*/

        return await TrendTempleate.trendTemplate(trendTags)
    } catch (error){
        console.error(error);
    }   
}

export {createTrendSection}
