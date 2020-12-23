async function iniciar_modulo(global) {
    setInterval(function(){
        if($("input#free_play_form_button:submit").is(':visible')==true){
            $("input#free_play_form_button:submit").click();
        }else{
            global.cerrar_modulo();
        }
    },5000);
}
module.exports = {iniciar_modulo};
