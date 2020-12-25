function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.')}
    var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);
async function iniciar_modulo() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){
            cerrar_modulo();
        }
    }
}
