function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.')}
    var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);
async function iniciar_modulo() {
    if(window.location.pathname=='/backoffice/freeroll'){
        setInterval(function(){
            if($('button#start-roll').is(':visible')==true){
                try{$('button#start-roll').click();}catch(e){}
            }else{
                cerrar_modulo(1);
            }
        },5000);
    }
    if(window.location.pathname=='/backoffice/rollerbox'){
        setInterval(function(){
            if($('div#box-card-0 > div > div:nth-child(2) > div > div > div > button').is(':visible')==true){
                $('#useFreeboxModal > div > div > form').submit();
            }else{
                window.location.href=window.location.href.replace("rollerbox", "freeroll");
            }
        },5000);
    }
}