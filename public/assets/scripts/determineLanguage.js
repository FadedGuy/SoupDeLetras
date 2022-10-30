// Crappy way to determine pref language to display default english
function prefLanguage(){
    let prefLanguage = navigator.language;
    let prefLanguageprefix = "en";
    if(prefLanguage.startsWith("es")){
        prefLanguageprefix = "es";        
    }
    else if(prefLanguage.startsWith("fr")){
        prefLanguageprefix = "fr";
    }

    return prefLanguageprefix;
}