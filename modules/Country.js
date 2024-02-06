
export default class Country {
    countryData;
    answerCountry;
    flagCountry;

    constructor(countryData) {
        this.countryData = countryData;
        this.answerCountry = [];
    };

    answerExtractor(datas) {
        datas.translations.common.forEach(data => {
            const name = data;

            //const extractData = new Country(name);
            //this.answerCountry.push(extractData);$
            //console.log(extractData);

        });

        /* Essai avec Set
            const answerSet = new Set(answerCountry);

            answerSet.toLowerCase();
            answerSet.values();
            console.log(answerSet);
        */

    }

    verifyer(formAnswer) {
        if (this.answerCountry.has(formAnswer.toLowerCase())) {
            return true;
        } else {
            false;
        }
    }

    get flagRender() {
        const containerMain = document.createElement("div");
        containerMain.idList.add("flag"); //ADD PAS ENCORE JUST POUR ADD ID

        const childHTML = `
       <h1>${this.flagCountry}</h1>
       `

        containerMain.insertAdjacentElement("afterbegin", childHTML);

        console.log(containerMain);

        return containerMain;

    }
}
