
import { SEARCH_SECTION } from "../../configs/config.js"
import { $ } from "../../utils/domUtils.js";
import {createSearchSection} from '../../domain/gifcard/gifcard.js'

const autocompleteTemplate = (tags) => {
    const searchDiv = document.getElementById("search")
    const searchIn = document.getElementById("search-gif")
    const searchAuto = document.getElementById("autoContain")
    searchAuto.innerHTML = ""
    const  separator= document.createElement("div")
    separator.classList.add("separator")
    searchAuto.appendChild(separator) 

    tags.forEach(tag => {
        let  tagDiv = document.createElement("div")
        tagDiv.classList.add("autocomplete")
        searchAuto.appendChild(tagDiv)
        tagDiv.textContent = tag.name;
        tagDiv.addEventListener('click', async ()=>{
            searchIn.value = tag.name
            $("#autoContain").htmlElement.innerHTML = ""
            $("#gifs-search-container").htmlElement.innerHTML = ""
            const pInputSearch = document.getElementById('search-gif')
            await createSearchSection(pInputSearch.value, SEARCH_SECTION.limitSearch , SEARCH_SECTION.offsetSearch)
            SEARCH_SECTION.inputSearchValue = pInputSearch.value
            pInputSearch.value = ""

            
        })
    }); 
    return searchDiv.appendChild(searchAuto)
}

export {autocompleteTemplate}