const confirmaciones = document.querySelector(".confirmaciones");
const botonCargar = document.querySelector("#cargar");
const botonRefrescar = document.querySelector("#refrescar");
const lista = document.querySelector("ul");
const inputNombre = document.querySelector("#nombre");
const inputAutor = document.querySelector("#autor");
const inputDireccion = document.querySelector("#direccion");


class Pedido{
    constructor(titulo, autor, direccion){
        this.id=this.generateUniqueId();
        this.cargarItems(titulo, autor, direccion);
    }

    generateUniqueId(){
        return Date.now() + Math.floor(Math.random() * 1000);
    }

    cargarItems(titulo, autor, direccion){
       let elementos = document.querySelectorAll("li");

        if(elementos.length<5){
            
            if(  inputNombre.value.trim() === "" || inputAutor.value.trim() === "" || inputDireccion.value.trim() === "" ){
                alert("completa todos los campos antes de continuar")
            }else{
            this.crearDiv(titulo, autor, direccion);

            }
            

        }else{
            alert("has superado la cantidad máxima de pedidos");
            console.log(elementos)
        }
    }

   

    crearDiv(titulo, autor, direccion){
        const li = document.createElement("li");
        li.textContent = `✓ Pedido ${this.id}: El libro titulado ${titulo}, del autor ${autor} será llevado a la dirección ${direccion}`;
        lista.appendChild(li);
        
       
       
    }

    
}


botonCargar.addEventListener("click", ()=>{
    let libro1 = new Pedido(inputNombre.value, inputAutor.value, inputDireccion.value);
    console.log(libro1)
  
    inputNombre.value="";
    inputAutor.value="";
    inputDireccion.value="";


    
});

botonRefrescar.addEventListener("click", ()=>{
    let elementos = document.querySelectorAll("li");
    elementos.forEach(elemento => elemento.remove());

});




