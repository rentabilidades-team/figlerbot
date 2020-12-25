function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.')}
    var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);
async function iniciar_modulo() {
    importar_libreria('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/modulos/templates/freefamily.js',null);
}