import { $ } from "./../../utils/domUtils.js";



const closeMaximize = async () => {
    let close = $("#full-size-gif").htmlElement
    close.style.display = "none"
}

const openMaximize = async (urlGif) => {
    let close = $("#full-size-gif").htmlElement
    $("#img-full-size-mode").attr("src", urlGif)
    close.style.display = "grid" 
}

$("#close-full-size-mode").on("click", closeMaximize)

export {closeMaximize, openMaximize}