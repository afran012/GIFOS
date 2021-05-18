import * as GifService from "../services/giftService.js";
import * as AutoTempleate from "../domain/autocompleteTemplate.js";

const createContainerAutocomplete = async (tag , limit , offset) =>{
    try{
        const autocompleteTags = await GifService.gifAutocomplete(tag,limit,offset)

        if (autocompleteTags===0) {
            throw new Error("No se pudo obtener el tag")
        }
        console.log(autocompleteTags)

        return await AutoTempleate.autocompleteTemplate(autocompleteTags)
    } catch (error){
        console.error(error);
    }   
}

export {createContainerAutocomplete}