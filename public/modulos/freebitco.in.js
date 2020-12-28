function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.');}
    else{var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);}
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);

async function iniciar_modulo() {
    setInterval(function(){
        if($("input#free_play_form_button:submit").is(':visible')==true){
            $("input#free_play_form_button:submit").click();
        }else{
            cerrar_modulo();
        }
    },5000);
}
