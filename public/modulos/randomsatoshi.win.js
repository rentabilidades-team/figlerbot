import {espera_carga, cerrar_modulo} from "../core/resources/libglobal.js";

async function iniciar_modulo() {
    if(window.location.pathname.indexOf('/autofaucet/claims.php')>=0){
        cerrar_modulo();
    }
}
espera_carga(iniciar_modulo());
