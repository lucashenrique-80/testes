module.exports = class Leilao{
    constructor(desc){
        this.descricao = desc;
        this.lances = [];
        this.maiorlance = 0;
    }

    getDescricao(){
        return this.descricao;
    }

    getLances(){
        return this.lances;
    }

    getMaiorLance(){
        return this.maiorlance;
    }

    propoe(lance){
        this.lances.push(lance);
    }

    avalia(){
        this.lances.forEach(
            (elemento) =>{
                if(elemento => this.maiorlance){ 
                    this.maiorlance = elemento;
              }
           }
        );
    }
}