import Lampa from "./Lampa.js";

class Jatekter {
    #db;
    #allapoLista=[];
    #kivalaszottKepekLista=[];

    constructor (allapotLista) {
        this.#allapotLista = allapotLista;
        let szuloElem = $("main");
        for (let index = 0; index < this.#id.length; index++) {
            let lampa = new Lampa(this.#allapotLista[index], szuloElem);
        }

        $(window).on("felkapcsol", (event)=>{

        });
       
    }

    



}

export default Jatekter;