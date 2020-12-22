let importarglobal = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
//No soporta anticaptcha por ahora
async function iniciarBot() {
    setInterval(function(){
        if($("input#free_play_form_button:submit").is(':visible')==true){
            $("input#free_play_form_button:submit").click();
        }else{
            importarglobal.cerrar_modulo();
        }
    },5000);
}
iniciarBot();
