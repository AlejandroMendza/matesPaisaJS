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
        `El mate ${this.tipo} cuenta con una virola de ${this.virola} cobertura de ${this.cobertura}, base de ${this.base} y su precio es $ ${this.precio}. La id del mate es ${this.id}`);
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

let divProductos = document.getElementById ("productos")
divProductos.setAttribute ("class", "productosEstilos")

estanteria.forEach ((mate)=> {
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML= ` <article id="${mate.id}" class="container">
                                    <div class="card">
                                        <h3 class="titulocard"> ${mate.tipo} </h3>
                                        <img src="${mate.imagen}" alt="${mate.tipo}"
                                        <div class="content">
                                            <p class="precioCard"> Precio: ${mate.precio}</p>
                                            <a href="" target="blank"> Agregar al carrito</a>
                                        </div>
                                    </div>
                                </article>`

    divProductos.appendChild (nuevoProducto)
})