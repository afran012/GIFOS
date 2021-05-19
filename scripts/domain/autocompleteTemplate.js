/*const autocompleteTemplate = ({tags,position}) => {
    const autocompleteTemp =`
        <div class="autocompleteContainer">
            <div class="separator"></div>

                ${tags.map((tag,index) => {`<div class="autocomplete ${index + 1}"><img src="./assets/images/icon-search-mod-noc.svg" alt="magnifying glass">${tag.name}</div>`}).join("")
                }</div>`;
    console.log(autocompleteTemp) 
    return autocompleteTemp
}*/

const searchDiv = document.getElementById("search")
const searchIn = document.getElementById("search-gif")
const searchAuto = document.getElementById("autoContain")

const autocompleteTemplate = (tags) => {
    searchDiv.parentNode.removeChild(searchAuto)
    const  autoContain= document.createElement("div")
    autoContain.classList.add("autocompleteContainer")
    autoContain.setAttribute('id',"autoContain")
    const  separator= document.createElement("div")
    separator.classList.add("separator")
    autoContain.appendChild(separator) 

    tags.forEach(tag => {
        let  tagDiv = document.createElement("div")
        tagDiv.classList.add("autocomplete")
        autoContain.appendChild(tagDiv)
        tagDiv.textContent = tag.name;
        tagDiv.addEventListener('click', ()=>{searchIn.value = tag.name})
    }); 
    searchDiv.appendChild(autoContain)
}

export {autocompleteTemplate}