class triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

class rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}

class cuadrado{
    constructor(base){
        this.base=base;
    }
    area(){
        return Math.pow(this.base,2);
    }
}

const b1=document.getElementById("trian");
b1.addEventListener('click', () => {
    let base=parseInt(document.getElementById("base").value);
    let altura=parseInt(document.getElementById("altura").value);
        let t1 = new triangulo(base,altura);
    let divR=document.getElementById("res");
        divR.innerHTML+="<p> Triángulo con área: " + t1.area() + "</p>";
});

const b2=document.getElementById("rectan");
b2.addEventListener('click', () => {
    let base=parseInt(document.getElementById("base").value);
    let altura=parseInt(document.getElementById("altura").value);
        let r1 = new rectangulo(base,altura);
    let divR1=document.getElementById("res1");
        divR1.innerHTML+="<p> Rectángulo con área: " + r1.area() + "</p>";
});

const b3=document.getElementById("cuadra");
b3.addEventListener('click', () => {
    let base=parseInt(document.getElementById("base").value);
        let c1 = new cuadrado(base);
    let divR2=document.getElementById("res2");
        divR2.innerHTML+="<p> Cuadrado con área: " + c1.area() + "</p>";
});
 

        