//No soporta anticaptcha por ahora
async function iniciarBot() {
    setInterval(function(){
        if($("input#free_play_form_button:submit").is(':visible')==true){
            $("input#free_play_form_button:submit").click();
        }else{$(document).ready(function(){try{window.close();}catch(e){}});}
    },5000);
}
iniciarBot();
