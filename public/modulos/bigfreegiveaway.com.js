import * as libglobal from "../core/libglobal.js";

async function iniciar_modulo() { 
    var estado=await libglobal.espera_carga();
    console.log(estado);
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        libglobal.click('form > button');
        libglobal.espera(5000);
        libglobal.cerrar_modulo();
    }
}
iniciar_modulo();
