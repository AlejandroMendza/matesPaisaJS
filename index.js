//Declaración de los Mates
class Mates {
    constructor(id, mate, virola, cuero, base, precio, imagen) {
      //propiedades de nuestra clase
      (this.id = id),
        (this.tipo = mate),
        (this.virola = virola),
        (this.cobertura = cuero),
        (this.base = base),
        (this.precio = precio),
        (this.imagen = imagen)
    }
    //Método de la class
    mostrarDatos() {
        console.log(`El mate ${this.tipo} cuenta con una virola de ${this.virola} cobertura de ${this.cobertura}, base de ${this.base}`)
    }
}

 //Arrays
 let estanteria = [];
 let productosEnCarrito = [];

//Instanciación de objetos

  const mate1 = new Mates(1,"Imperial Premium", "plata moldeada", "cuero vaqueta negro", "plata pulida", 7000, "assets/imperialPremium.jpg");
  estanteria.push(mate1);

  const mate2 = new Mates(2,"Imperial", "plata moldeada","cuero vaqueta negro","cuero prensado",5000, "assets/imperial.jpg");
  estanteria.push(mate2);

  const mate3 = new Mates(3,"Torpedo","acero pulido","cuero marrón","cuero prensado",4000, "assets/torpedo.jpg");
  estanteria.push(mate3);

  const mate4 = new Mates(4,"Acero Inox","acero pulido","acero pintado al relieve","acero pulido",3000, "assets/aceroInox.jpg");
  estanteria.push(mate4);

 
   //Elementos Dom

   let botonCarrito = document.getElementById("botonCarrito")
   let modalBody = document.getElementById("Modal-body")
   let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
   let parrafoCompra = document.getElementById(`precioTotal`)
   let acumulador
  

 

//Capturo guardarMate boton y asignamos evento
const guardarMateBtn = document.getElementById("guardarMateBtn")
guardarMateBtn.addEventListener("click", guardarMate)

// Evento del boton carrito

botonCarrito.addEventListener(`click`, () => {
    cargarProductosCarrito (productosEnCarrito)
})

//Array estantería
if(localStorage.getItem("estantería")){
    //array que declaro vacío
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
    console.log(estanteria)
}else{ 
    console.log(`primera carga en estanteria`)
    estanteria.push(mate1, mate2, mate3, mate4)
    localStorage.setItem("estantería", JSON.stringify(estanteria))
}
console.log (estanteria)

//iniciar array carrito

if(localStorage.getItem("carrito")){
    productosEnCarrito=JSON.parse(localStorage.getItem("carrito"))
}else{
    console.log(`primera vez`)
    localStorage.setItem("carrito",[])
}

//Plantillas

let divProductos = document.getElementById ("productos")
divProductos.setAttribute ("class", "productosEstilos")
function mostrarCatalogo(){
    divProductos.innerHTML= ""
    estanteria.forEach ((mate)=>{
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML= `<article id="${mate.id}" class="container">
                                    <div class="card">
                                        <h3 class="titulocard"> ${mate.tipo} </h3>
                                        <img src="${mate.imagen}" alt="${mate.tipo}"
                                        <div class="content">
                                            <p class="precioCard"> Precio: ${mate.precio}</p>
                                            <p>El mate ${mate.tipo} cuenta con una virola de ${mate.virola}, cobertura de ${mate.cobertura} y base de ${mate.base}</p>
                                            <button id="agregarBtn${mate.id}">Agregar al carrito<button>
                                        </div>
                                    </div>
                                </article>`

    divProductos.appendChild (nuevoProducto)
    })
    let btnAgregar = document.getElementsById(`agregarBtn${mate.id}`)
    btnAgregar.forEach((mateBoton)=>{
    mateBoton.addEventListener("click", () =>{agregarAlCarrito(mate)})
    })
}

  //Boton mostrar catálogo
  let mostrarCatalogoBtn = document.getElementById("verCatalogo")
  mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)
  
  //Boton ocultar catálogo
  let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
  ocultarCatalogoBtn.onclick = ocultarCatalogo

function agregarAlCarrito (mate){
    console.log(`El mate ${mate.tipo} ha sido agregado`)
    productosEnCarrito.push(mate)
    console.log(productosEnCarrito);

    //Cargar al storage
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function ocultarCatalogo(){
    divProductos.innerHTML =""
}

//Función crear nuevo mate por el usuario 
function guardarMate(){
    let nombreInput = document.getElementById("nombreInput")
    let virolaInput = document.getElementById("virolaInput")
    let coberturaInput = document.getElementById("coberturaInput")
    let baseInput = document.getElementById("baseInput")
    let precioInput = document.getElementById("precioInput")
    let mateCreado = new Mates(estanteria.length+1, nombreInput.value, virolaInput.value, coberturaInput.value, baseInput.value, precioInput.value, "assets/mateNuevo.png")
    //Push de libroCreado al array
    estanteria.push(mateCreado)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}

function cargarProductosCarrito(productosDelStorage) {
    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito) => {
    modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
                <div class="card-body">
                        <h4 class="card-title">${productoCarrito.titulo}</h4>
                    
                        <p class="card-text">$${productoCarrito.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
                </div>           
            </div>`
})
//Function del total
//productosEnCarritos
compraTotal(productosDelStorage)
}

function compraTotal(productosTotal) {
    acumulador = 0;
    //recorrer productosTotal
    productosTotal.forEach((productoCarrito)=>{
        acumulador += productoCarrito.precio 
    })
    console.log(acumulador)
    //if acumulador = 0 o !=
    if(acumulador == 0){
        parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
    }else{
        parrafoCompra.innerHTML = `Importe de su compra ${acumulador}`
    }
   
}