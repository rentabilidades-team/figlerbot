import * as libglobal from "https://cors-anywhere.herokuapp.com/universales.gitlab.io/rentabilidades-team/core/libglobal.js";

async function iniciar_modulo() {
    if(libglobal.obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/en/account/log/')>=0){
            location.replace('//'+libglobal.dominio_base()+'/payeer?payeerid='+libglobal.obtener('#btn-account > b').replace(/<[^>]*>?/gm, ''));//Revisar
        }
    }
}
iniciar_modulo();
