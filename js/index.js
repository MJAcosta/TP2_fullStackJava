function precio(){
        let cantidad = parseInt(document.getElementById("inputCantidad").value);
        let categoria = parseInt(document.getElementById("inputCategoria").value);
        let pagoTotal = document.getElementById("pagoTotal");
        let precio;
        let entrada=200;
        if(categoria==1){
            precio = (entrada*cantidad*0.20);
        }
    
        else if(categoria==2){
            precio = (entrada*cantidad*0.50);
        }
    
        else if(categoria==3){
            precio = (entrada*cantidad*0.85);
        }

        pagoTotal.innerHTML = "Total a pagar: $" + precio;
    }

    function borrar(){
        document.getElementById("inputNombre").value = "";
        document.getElementById("inputApellido").value = "";
        document.getElementById("inputCorreo").value = "";
        document.getElementById("inputCantidad").value = "";
        document.getElementById("inputCategoria").value = "0";
        document.getElementById("pagoTotal").innerHTML = "Total a pagar: $";
    }

    document.addEventListener("DOMContentLoaded", function(){
        const button = document.getElementById("resumen");
        button.addEventListener("click", precio);
    });

    document.addEventListener("DOMContentLoaded", function(){
        const button = document.getElementById("borrar");
        button.addEventListener("click", borrar);
    });

    function evitarNegativo(e) {
        if (e.key === "-")
          e.preventDefault();
      }