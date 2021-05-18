/*const autocompleteTemplate = ({tags,position}) => {
    const autocompleteTemp =`
        <div class="autocompleteContainer">
            <div class="separator"></div>

                ${tags.map((tag,index) => {`<div class="autocomplete ${index + 1}"><img src="./assets/images/icon-search-mod-noc.svg" alt="magnifying glass">${tag.name}</div>`}).join("")
                }</div>`;
    console.log(autocompleteTemp) 
    return autocompleteTemp
}*/

const searchDiv = document.getElementById(search)

const autocompleteTemplate = (tags) => {
    let  autoContain= document.createElement("div")
    autoContain.classList.add("autocompleteContainer")
    searchDiv.appendChild(autoContain)
    let  separator= document.createElement("div")
    autoContain.classList.add("separator")
    searchDiv.appendChild(separator) 

    let index = 0

    tags.forEach(tag => {
        let  icons= document.createElement("div")
        icons.classList.add("autocompleteContainer")

        index += 1;
        
    });
    let  icons= document.createElement("div")
    icons.classList.add("div-icons-gifo")


    
}

export {autocompleteTemplate}