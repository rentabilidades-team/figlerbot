import * as libglobal from "https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js";
async function iniciar_modulo() {
    setInterval(function(){
        if($("input#roll_button").is(":visible")==true){
            try {do_free_roll();}catch(e) {}
        }else{if($("p#roll_wait_text").is(":visible")==true){libglobal.cerrar_modulo();}}
    },3000);
}
iniciar_modulo();
