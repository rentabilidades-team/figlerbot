import * as libglobal from "../core/libglobal.js";

async function iniciar_modulo() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            libglobal.cerrar_modulo();
        }
    }
}
iniciar_modulo();
