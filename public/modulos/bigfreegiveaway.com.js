let global = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
global.importar_libreria('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js',iniciarBot);//Importo Jquery

async function iniciarBot() { 
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        if($('form > button:submit').is(':visible')==true){
            $('form > button:submit').click();
            $('form > button:submit').hide();
        }else
           global.cerrar_modulo();
        }
    }
}
