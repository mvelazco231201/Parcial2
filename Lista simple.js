class listasimple{
    constructor(){
        this.inicio= null;
        this.totalNodos=0;
    }
    agregar(nuevo){
      if(this.inicio===null)
          this.inicio = nuevo;
      else {
          let temp=this.inicio;
          while(temp.siguiente!=null){
          temp=temp.siguiente;
            }
      temp.siguiente=nuevo;
        }
        this.totalNodos++;
    }
    agregarInicio(nuevo){
        nuevo.siguiente=this.inicio;
        this.inicio=nuevo;
    }
    buscar(info){
        let nodo=null;
        let temp=this.inicio;
        while(temp != null && nodo===null){
            if(temp.nombre===info)
            nodo=temp;
            temp=temp.siguiente;
        }
        return nodo;
    }
    listar(){
        let salida="";
        let temp=this.inicio;
        while(temp!=null){
            salida+= "<p>" + temp.showTextInfo() + "</p>";
            temp=temp.siguiente;
        }
        return salida;
    }
    //eliminar();
    hallaMenorCosto(){
        let menor=this.inicio;
        if(this.inicio!=null){
        let temp=this.inicio;
        while(temp!=null){
            if(temp.costo<menor.costo)
            menor=temp;
            temp=temp.siguiente;
            }
        }
        return menor;
    }
    promedioValorMercancia(){
        let suma=0;
        let temp=this.inicio;
        while(temp!=null){
            suma += temp.valorMercancia;
            temp= temp.siguiente;
        }
         return suma/this.totalNodos;
    }
}