function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.');}
    else{var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);}
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);

async function iniciar_modulo() {
    setInterval(function(){
        if($("input#roll_button").is(":visible")==true){
            try {do_free_roll();}catch(e) {}
        }else{if($("p#roll_wait_text").is(":visible")==true){cerrar_modulo();}}
    },3000);
}
