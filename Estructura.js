class Estructura{
    constructor(){
        this.estruct= new Array();
        this.totalNodos=0;
    }
    agregar(nuevo){
        this.estruct.push(nuevo);
        this.totalNodos++;
    }
    buscar(info){
        let nodo=null;
        let i=0;
        while(i<this.estruct.length && nodo===null){
            if(this.estruct[i].nombre===info)
            nodo=this.estruct[i];
            i++;
        }
        return nodo;
    }
    listar(){
        let salida="";
        for(let i=0; i<this.estruct.length; i++){
            salida+= "<p>" + this.estruct[i].showTextInfo() + "</p>";
        }
        return salida;
    }
    //eliminar();
    hallaMenorCosto(){
        let menor=this.estruct[0];
        for(let i=1; i<this.totalNodos; i++){
            if(this.estruct[i].costo<menor.costo)
            menor=this.estruct[i];
        }
        return menor;
    }
    promedioValorMercancia(){
        let suma=0;
        for(let i=0; i<this.totalNodos; i++){
            suma += this.estruct[i].valorMercancia;
        }
        return suma/this.totalNodos;
    }
}