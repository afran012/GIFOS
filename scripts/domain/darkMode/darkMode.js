import { $ } from "./../../utils/domUtils.js";


// verify Dark Mode in Local Storage
let darkLocal = JSON.parse(localStorage.getItem('darkLocal'))
console.log( "darkLocal inicio:" , darkLocal )

if ( !darkLocal ) {
    localStorage.setItem( 'darkLocal' , JSON.stringify("light"))
}

const darkMode = async () =>{
    try{
        let darkLocal = JSON.parse(localStorage.getItem('darkLocal'))
        console.log( "darkLocalentro" , typeof(darkLocal) )
        if (darkLocal == "light") {
            console.log( "Entro" , darkLocal )  
            darkLocal = "dark"
            /*
            await changeColors(darkLocal)
            return localStorage.setItem( 'darkLocal' , JSON.stringify("dark"))*/
        }
        else {
            darkLocal = "light"
        }

        await changeColors(darkLocal)
        return localStorage.setItem( 'darkLocal' , JSON.stringify(darkLocal))

    } catch (error) { console.log(error) }

}


const changeColors = async (valueMode) => {
    try{
        if (  valueMode == "dark") {
            await changeClassElement( "light-mode-1" , "dark-mode-1" )
            await changeClassElement( "light-mode-2" , "dark-mode-2" )
            await changeClassElement( "light-mode-3" , "dark-mode-3" )
        }
        else {
            await changeClassElement( "dark-mode-1" , "light-mode-1" )
            await changeClassElement( "dark-mode-2" , "light-mode-2" )
            await changeClassElement( "dark-mode-3" , "light-mode-3" )
        }
    } catch(error) { console.log(error)}
}


const changeClassElement = async ( elementToRemove , elementToAdd ) => {
    try {
        console.log("etro")
        $( `.${elementToRemove}` ).htmlAllElements.forEach(element => {
            element.classList.add( `${elementToAdd}` )    
            element.classList.remove( `${elementToRemove}` )
        })
    }catch (error) { console.log(error) }

}



changeColors(darkLocal)


$("#dark-mode").on("click", darkMode)

export {darkMode};