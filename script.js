/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */

'use strict';

async function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

async function requestData(){
    const theForm = document.getElementById(`fields`);
    category = document.querySelector.getElementById('selCat').value;
    language = document.querySelector.getElementById('selLang').value;
    number = document.querySelector.getElementById('selNum').value;
    id = document.querySelector.getElementById('selID').value;
    console.log("Hello");

    if(id){
        let jokes = await getData(`https://vuesa01.herokuapp.com/api/v1/jokes?category=${category}&language=${language}&id=${id}`);
    }

    else if(number){
        let jokes = await getData(`https://vuesa01.herokuapp.com/api/v1/jokes?category=${category}&language=${language}&number=${number}`);
    }
    else{
        let jokes = await getData(`https://vuesa01.herokuapp.com/api/v1/jokes?category=${category}&language=${language}`);
    }
    jokesList = document.querySelector.getElementById('jokes');
    jokesList.innerHTML = "";

    for(aJoke in jokes){
        let jokeParagraph = document.createElement("p");
        jokeParagraph.setAttribute("class", "text-justify");
        jokesList.append(jokeParagraph);
    }

    // jokesList.innerHTML = jokes;
    console.log(jokesList);
}