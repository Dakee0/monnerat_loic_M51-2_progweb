import { shuffle } from "lodash";
import Game from "./modules/Game";
//import Country from './modules/Country';

"use strict";

const paysTableau = [];
//Récupération des données à travers l'API
async function getAPI() {
    try {
        const fetchedAPI = await fetch(`https://restcountries.com/v3.1/all`);
        const dataAPI = await fetchedAPI.json();
        //console.log(dataAPI);
        return dataAPI;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

//Exécution d'opérations sur la data
getAPI()
    .then(dataAPI => {
        shuffleDatas(dataAPI);
        answerExtractor(dataAPI);//Test de la fonction answerExtractor();
    })
    .catch(error => {
        console.error("Error in getAPI:", error);
    });

//Fonction pour shuffle la data
function shuffleDatas(dataAPI){
    dataAPI = shuffle(dataAPI);
    paysTableau.push(dataAPI);
    //console.log(dataAPI);
    //console.log(paysTableau);
    return dataAPI;
};

//Création d'un Game
const newGame = new Game(paysTableau);

//Sélection d'un clic pour l'envoi de la réponse
document.querySelector("input[name='form']").addEventListener("click", (e =>{
    e.preventdefault();

    if(isSessionFinishedvar = false){
        if(document.querySelector("input[type='text']") === true){

        }
    }
}));


//Test de la méthode answerExtractor de Country pour localiser les problèmes
function answerExtractor(datas) {
    console.log(datas);
    console.log(datas.translations);
    datas.translations.forEach(data => {
        //console.log(datas.name);
        const name = data.common;

        //console.log(name);
        
    });

}

