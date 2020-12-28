import * as libglobal from "https://cors-anywhere.herokuapp.com/universales.gitlab.io/rentabilidades-team/core/libglobal.js";

async function iniciar_modulo() { 
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        libglobal.click('form > button');
        libglobal.espera(5000);
        libglobal.cerrar_modulo();
    }
}
iniciar_modulo();
