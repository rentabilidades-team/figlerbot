import * as libglobal from "https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js";
async function iniciar_modulo() {
    if(libglobal.obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/en/account/log/')>=0){
            location.replace('//'+libglobal.dominio_base()+'/payeer?payeerid='+$('a#PayeerAccount').attr('data-clipboard-text').trim());
        }
    }
}
iniciar_modulo();
