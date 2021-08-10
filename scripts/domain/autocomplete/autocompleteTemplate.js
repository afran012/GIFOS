
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
        tagDiv.addEventListener('click', ()=>{searchIn.value = tag.name})
    }); 
    return searchDiv.appendChild(searchAuto)
}

export {autocompleteTemplate}