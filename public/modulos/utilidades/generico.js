function importarLibreria(url,callback) {//Permite importar librerias en los módulos
if(url==null || callback==null){console.log('Error: Es necesario completar los dos valores.')}
    var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);
}

function cerrarmodulo(valor){//Permite cerrar ventanas cuando la página acabe de cargar (Valor 1 fuerza el cierre en webs que no lo permiten)
    if(valor==null){valor=0;}
    try{valor=parseInt(valor);}catch(e){console.log(e);}
    if(valor==0){
        var loader = setInterval(function () {if(document.readyState !== "complete") return;clearInterval(loader);try{window.close();}catch(e){console.log(e);}}, 300);
    }
    if(valor==1){
        var loader = setInterval(function () {if(document.readyState !== "complete") return;clearInterval(loader);window.location.href='//rentabilidadesweb.runkodapps.com/tarea-finalizada';}, 300);
    }   
}
