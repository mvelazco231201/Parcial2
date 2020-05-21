const estruct = new Estructura();
const lista = new listasimple();

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener('click', () => {
    let nombre = document.getElementById("txtNombre").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let cantidad = parseInt(document.getElementById("txtCantidad").value);
    let costo = parseInt(document.getElementById("txtCosto").value);

    let p1 = new Producto(nombre, descripcion, cantidad, costo);

    let details = document.getElementById("details");
    details.innerHTML += `
    <div class="p-3 mb-2 bg-secondary text-white">
      <p class="card-title"><strong>ID ${p1.id} - </strong>${p1.nombre}</p>
      <p class="card-text">Desc: ${p1.descripcion}</p>
      <p class="card-text">Valor Total:${p1.valorMercancia}</p>
      <p class="card-text">${p1.showTextInfo()}</p>
    </div>
  `;
  estruct.agregar(p1);
  console.log(estruct.listar());
  console.log(p1.showInfo());
});

const btnAleatorio = document.getElementById("btnAleatorio");
btnAleatorio.addEventListener('click', () =>{
  let producto;
  //crear 25 productos y guardar
  for(let i=0; i<25; i++){
    let numero= Math.ceil(Math.random()*200);
    producto = new Producto(numero, numero, numero, numero);
    estruct.agregar(producto);
  }
  //listar en div los detalles
  let details = document.getElementById("details");
  details.innerHTML += "<div><p> Estructura </p><p>" + estruct.listar() + "</p></div>";
  //mostrar promedio
  details.innerHTML += "<div><p> Promedio </p><p>" + estruct.promedioValorMercancia() + "</p></div>";
  //mostrar menor
  details.innerHTML += "<div><p> Menor </p><p>" + estruct.hallaMenorCosto().showTextInfo() + "</p></div>";
}); 

const btnLista = document.getElementById("btnLista");
btnLista.addEventListener('click', () =>{
  let product;
   //crear 25 productos y guardar
   for(let i=0; i<25; i++){
    let num= Math.ceil(Math.random()*200);
    product = new Producto(num, num, num, num);
    lista.agregar(product);
  }
  //listar en div los detalles
  let details = document.getElementById("details");
  details.innerHTML += "<div><p> Lista </p><p>" + lista.listar() + "</p></div>";
  //mostrar promedio
  details.innerHTML += "<div><p> Promedio </p><p>" + lista.promedioValorMercancia() + "</p></div>";
  //mostrar menor
  details.innerHTML += "<div><p> Menor </p><p>" + lista.hallaMenorCosto().showTextInfo() + "</p></div>";
});

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar=addEventListener('click', () =>{
  let dato=getElementById("txtNombre");
  let nodo= estruct.buscar(dato);
  let details=document.getElementById("details");
  if(nodo===null){
    details.innerHTML += "<div><p> Buscar </p></p> No se encontró " + dato + "</p></div>";
  }
  else{
    details.innerHTML += "<div><p> Buscar Exitoso </p><p>" + nodo.showTextInfo() + "</p><div>";
  }
});



