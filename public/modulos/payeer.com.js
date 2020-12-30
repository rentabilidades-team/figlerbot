import { obtener_get, dominio_base, obtener} from "../core/libglobal.js";

async function iniciar_modulo() {
    if(obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/en/account/log/')>=0){
            location.replace('//'+dominio_base()+'/payeer?payeerid='+obtener('#btn-account > b').replace(/<[^>]*>?/gm, '').trim());//Revisar
        }
    }
}
iniciar_modulo();
