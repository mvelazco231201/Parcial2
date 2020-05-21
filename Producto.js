class Producto{
    //Variable estatica
    static cont=0;
    constructor(nombre, descripcion, cantidad, costo){
        this.id=++Producto.cont;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.costo=costo;
        this.siguiente=null;
    }
    showTextInfo(){
        return "id: " + this.id + " Nombre: " + this.nombre + " Costo: "+ this.costo + " $$: " + this.valorMercancia;
    }
    get valorMercancia(){
        return this.costo*this.cantidad;
    }
    showInfo(){//json
        return {
            id: this.id, 
            nombre: this.nombre, 
            descripcion: this.descripcion,
            cantidad: this.cantidad, 
            costo: this.costo
        };
    }
}