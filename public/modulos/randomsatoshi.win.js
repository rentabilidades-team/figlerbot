import { cerrar_modulo } from "../core/libglobal.js";

async function iniciar_modulo() {
    if(window.location.pathname.indexOf('/autofaucet/claims.php')>=0){
        cerrar_modulo();
    }
}
iniciar_modulo();
