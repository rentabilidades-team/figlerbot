async function iniciar_modulo() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            cerrar_modulo();
        }
    }
}
iniciar_modulo();