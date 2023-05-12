class Lampa {
    #allapot;
    #divElem;
    #id;

    constructor (id ,allapot, szuloElem) {
        this.#allapot = allapot;
        let txt = "";
        txt += '<div></div>';
        szuloElem.append(txt);
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img:last-child");
        this.allapot("felkapcsolt")
        this.#id.on("click",()=>{
            this.allapot(this.#allapot)

        })
        
    }

    
    SetAllapot(id){
        this.#imgElem.attr("src",allapot)
    }
    szinBeallit(){
        return this.#id;
    }

    kattintasTrigger(){
        const kapcsolas = new CustomEvent("kapcsolas", {detail: this.#id});
        dispatchEvent(kapcsolas);
    }
}

export default Lampa;