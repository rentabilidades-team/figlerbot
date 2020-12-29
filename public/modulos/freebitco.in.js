import * as libglobal from "../core/libglobal.js";

async function iniciar_modulo() {
    setInterval(function(){
        libglobal.click('input#free_play_form_button');
        libglobal.cerrar_modulo();
    },5000);
}
iniciar_modulo();
