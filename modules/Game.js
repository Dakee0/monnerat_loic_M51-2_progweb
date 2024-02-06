import Country from "./Country";

export default class Game{
    #actualScore;
    dataAllCountry;
    countryIndex;
    currentCountry;
    scorePartie;

    constructor(tabPays){
        this.dataAllCountry = tabPays;
        this.countryIndex = 0;
        this.currentCountry = new Country(this.countries[this.countryIndex]).flagRender();
        this.scorePartie = 0;
    }

    ajoutPoint(){
        this.#actualScore ++;
        console.log(this.#actualScore);
    }

    isSessionFinished(){
        const isSessionFinishedvar = false;
        if(this.countryIndex >= paysTableau){
            isSessionFinishedvar = true;
        } else{
            isSessionFinishedvar = false;
        }
        console.log(isSessionFinishedvar);
    }

    nextCountry(){
        isSessionFinished();


    }





}