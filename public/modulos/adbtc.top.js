async function iniciar_modulo(global) {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            global.cerrar_modulo();
        }
    }
}
export default {iniciar_modulo};
