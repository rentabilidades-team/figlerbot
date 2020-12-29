import * as libglobal from "../core/libglobal.js";

async function iniciar_modulo() {
    if(libglobal.obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/dashboard')>=0){
            location.replace('//'+libglobal.dominio_base()+'/expresscrypto?ecid='+libglobal.obtener('u#copyIdTarget.glow','val'));
        }
    }
}
iniciar_modulo();
