//No soporta anticaptcha por ahora
async function iniciarBot() {
    setInterval(function(){
        if($("input#free_play_form_button:submit").is(':visible')==true){
            $("input#free_play_form_button:submit").click();
        }else{
            cerrar_modulo();
        }
    },5000);
}
iniciarBot();
