'use strict'

window.addEventListener('load', load_content);

function click(click_id){
    let t1 = document.getElementById('t1');
    let t2 = document.getElementById('t2');
    let t3 = document.getElementById('t3');
    let t4 = document.getElementById('t4');
    let t1A = document.getElementById('t1A');
    let t2A = document.getElementById('t2A');
    let t3A = document.getElementById('t3A');
    let t4A = document.getElementById('t4A');


    if(t1 === null || t2 === null || t3 === null || t4 === null ||
        t1A === null || t2A === null || t3A === null || t4A === null){
        return;
    }

    if(click_id != "t1"){
        t1.className = "t1";
        t1A.className = "t1A";
    }
    if(click_id != "t2"){
        t2.className = "t2";
        t2A.className = "t2A";
    }
    if(click_id != "t3"){
        t3.className = "t3";
        t3A.className = "t3A";
    }
    if(click_id != "t4"){
        t4.className = "t4";
        t4A.className = "t4A";
    }
}

function click_t1(){
    let t1 = document.getElementById('t1');
    let t1A = document.getElementById('t1A');
    let extra = document.getElementById('extra');
    if(t1 === null || extra === null || t1A == null){
        return;
    }

    click("t1")

    if(t1.className === "t1"){
        t1.className = "t1 show";
        t1A.className = "t1A selected";
        extra.className = "dissapear";
    }
    else{
        t1.className = "t1";
        t1A.className = "t1A";
        extra.className = "";
    }
}

function click_t2(){
    let t2 = document.getElementById('t2');
    let t2A = document.getElementById('t2A');
    let extra = document.getElementById('extra');
    if(t2 === null || extra === null || t2A == null){
        return;
    }

    click("t2")

    if(t2.className === "t2"){
        t2.className = "t2 show";
        t2A.className = "t2A selected";
        extra.className = "dissapear";
    }
    else{
        t2.className = "t2";
        t2A.className = "t2A";
        extra.className = "";
    }
}

function click_t3(){
    let t3 = document.getElementById('t3');
    let t3A = document.getElementById('t3A');
    let extra = document.getElementById('extra');
    if(t3 === null || extra === null || t3A == null){
        return;
    }

    click("t3")

    if(t3.className === "t3"){
        t3.className = "t3 show";
        t3A.className = "t3A selected";
        extra.className = "dissapear";
    }
    else{
        t3.className = "t3";
        t3A.className = "t3A";
        extra.className = "";
    }
}

function click_t4(){
    let t4 = document.getElementById('t4');
    let t4A = document.getElementById('t4A');
    let extra = document.getElementById('extra');
    if(t4 === null || extra === null || t4A == null){
        return;
    }

    click("t4")

    if(t4.className === "t4"){
        t4.className = "t4 show";
        t4A.className = "t4A selected";
        extra.className = "dissapear";
    }
    else{
        t4.className = "t4";
        t4A.className = "t4A";
        extra.className = "";
    }
}

function change_name(){
    let nameTag = document.getElementById('name');
    if(nameTag === null){
        return;
    }

    nameTag.textContent === "Faded" ? nameTag.textContent = "Kevin" : nameTag.textContent = "Faded";
}

function load_content(){
    let body = document.getElementById('wrapper');
    if(body === null){
        return;
    }

    let prefLanguageprefix = prefLanguage();
    
    body.innerHTML = html`
        ${language[prefLanguageprefix]}
    `;

    setInterval(change_name, 2000);
    start();
}