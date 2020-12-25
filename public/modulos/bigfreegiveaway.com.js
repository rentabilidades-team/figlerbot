function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.')}
    else{var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);}
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);

async function iniciar_modulo() { 
    importar_libreria('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js',final);//Importo Jquery
    async function final() {
        if(window.location.pathname.indexOf("/my-tickets")>=0){
            if($('form > button:submit').is(':visible')==true){
                $('form > button:submit').click();
                $('form > button:submit').hide();
            }else {
                cerrar_modulo();
            }
        }
    }
}
