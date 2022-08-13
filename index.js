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
    console.log(
    `El mate ${this.tipo} cuenta con una virola de ${this.virola} cobertura de ${this.cobertura}, base de ${this.base}`);
    }
  }
 //Array
  let estanteria = [];

 //Instanciación de objetos

  const mate1 = new Mates(1,"Imperial Premium", "plata moldeada", "cuero vaqueta negro", "plata pulida", 7000, "assets/imperialPremium.jpg");
  estanteria.push(mate1);

  const mate2 = new Mates(2,"Imperial", "plata moldeada","cuero vaqueta negro","cuero prensado",5000, "assets/imperial.jpg");
  estanteria.push(mate2);

  const mate3 = new Mates(3,"Torpedo","acero pulido","cuero marrón","cuero prensado",4000, "assets/torpedo.jpg");
  estanteria.push(mate3);

  const mate4 = new Mates(4,"Acero Inox","acero pulido","acero pintado al relieve","acero pulido",3000, "assets/aceroInox.jpg");
  estanteria.push(mate4);

  //Plantillas
let divProductos = document.getElementById ("productos")
divProductos.setAttribute ("class", "productosEstilos")
function mostrarCatalogo(){
    estanteria.forEach ((mate)=> {
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML= ` <article id="${mate.id}" class="container">
                                    <div class="card">
                                        <h3 class="titulocard"> ${mate.tipo} </h3>
                                        <img src="${mate.imagen}" alt="${mate.tipo}"
                                        <div class="content">
                                            <p class="precioCard"> Precio: ${mate.precio}</p>
                                            <p></p>
                                            <button href="" class="agregarBtn"> Agregar al carrito</button>
                                        </div>
                                    </div>
                                </article>`

    divProductos.appendChild (nuevoProducto)
})

let btnAgregar = document.getElementsByClassName("agregarBtn")
btnAgregar.forEach((libroBoton)=>{
  libroBoton.addEventListener("click", ()=>{console.log(`Usted ha comprado éste mate`)})
})
}


//Boton mostrar catálogo
let mostrarCatalogoBtn = document.getElementById("verCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

//Boton ocultar catálogo
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

//Función crear nuevo mate por el usuario 
function guardarMate(){
    let nombreInput = document.getElementById("nombreInput")
    let virolaInput = document.getElementById("virolaInput")
    let coberturaInput = document.getElementById("coberturaInput")
    let baseInput = document.getElementById("baseInput")
    let precioInput = document.getElementById("precioInput")
    let mateCreado = new Mates(estanteria.length+1, nombreInput.value, virolaInput.value, coberturaInput.value, baseInput.value, precioInput.value, "./assets/mateNuevo.jpg")
    //Push de libroCreado al array
    estanteria.push(mateCreado)
}

//Capturo guardarLibro boton y asignamos evento
const guardarMateBtn = document.getElementById("guardarMateBtn")
guardarMateBtn.addEventListener("click", guardarMate)
