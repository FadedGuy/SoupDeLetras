'use strict';

window.addEventListener('load', main);

let sum_lines = 0;
let list_langs = [];
let langs_hashcolor = {};
let nb_projects = 0;

async function https_get_github(user){
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const json_response = await response.json();
    return json_response;
}

async function get_languages(url){
    return await new Promise((res, err) => {
        fetch(url).then(response => {
            res(response.json());
        });
    })
}

async function lang_array(repo, card){
    get_languages(repo.languages_url).then(langs => {
        const arr_langs = Object.entries(langs);
        let card_tags = ""
        
        arr_langs.forEach(lang => {
            sum_lines += lang[1];
            if(list_langs.find(element => element == lang[0]) == undefined){
                list_langs.push(lang[0]);
                let hashed = intToRGB(hashCode(lang[0]));
                langs_hashcolor[lang[0]] = `background:#${hashed};` +  `color:${calculateLuminance(hashed) ? "white" : "black"}`;
            }
           card_tags += `
                <span class="card-tag" style=${langs_hashcolor[lang[0]]}>${lang[0]}</span>
           `;
        });      

        card.innerHTML += html`
            <div class="project-card">
                <div class="card-head">
                    <p class="card-title">${repo.name}</p>
                    <a class="card-link" href="${repo.html_url}" target="blank">${repo.html_url}</a>
                </div>
                <div class="card-body">
                    <p class="card-description">${repo.description !== null ? repo.description : "No description available"}</p>
                    <br>
                    <div class="card-tags">
                        ${card_tags}
                    </div>
                </div>
            </div>
        `;

        /*Ik bad idea*/
        document.getElementById("nb-projects").innerHTML = nb_projects;
        document.getElementById("nb-langs").innerHTML = list_langs.length;
        document.getElementById("nb-lines").innerHTML = sum_lines;
    });
}

function main(){
    let body = document.getElementById('head');

    if(body === null){
        return;
    }

    let languagePref = prefLanguage();

    body.innerHTML = html`
        ${language[languagePref]}
    `;
    
    https_get_github("fadedguy").then(json => {
        let div_cards = document.getElementById('app');
        nb_projects = Object.entries(json).length;
        
        if(div_cards === null){
            return null;
        }
        
        div_cards.innerHTML = "";

        json.forEach((repo) => {
            lang_array(repo, div_cards);
        });
    });
}
