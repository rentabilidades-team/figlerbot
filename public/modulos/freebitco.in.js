import {espera_carga, click, cerrar_modulo} from "../core/libglobal.js";

async function iniciar_modulo() {
    setInterval(function(){
        click('input#free_play_form_button');
        cerrar_modulo();
    },5000);
}
espera_carga(iniciar_modulo);
