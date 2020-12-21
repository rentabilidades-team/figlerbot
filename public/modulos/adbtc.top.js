async function iniciarBot() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            global.cerrarmodulo();
        }
    }
}
iniciarBot();
