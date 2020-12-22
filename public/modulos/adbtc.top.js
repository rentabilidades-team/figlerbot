let importarglobal = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
async function iniciarBot() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            importarglobal.cerrar_modulo();
        }
    }
}
iniciarBot();
