import { espera_carga, cerrar_modulo } from "../core/libglobal.js";

async function iniciar_modulo() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            cerrar_modulo();
        }
    }
}
espera_carga(iniciar_modulo);
