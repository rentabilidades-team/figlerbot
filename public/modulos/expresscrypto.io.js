import { espera_carga, obtener_get, dominio_base, obtener} from "../core/libglobal.js";

async function iniciar_modulo() {
    if(obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/dashboard')>=0){
            location.replace('//'+dominio_base()+'/expresscrypto?ecid='+obtener('u#copyIdTarget.glow','val'));
        }
    }
}
espera_carga(iniciar_modulo);
