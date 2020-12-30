import { espera_carga, click, espera, cerrar_modulo} from "../core/libglobal.js";

async function iniciar_modulo() { 
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        click('form > button');
        espera(5000);
        cerrar_modulo();
    }
}
espera_carga(iniciar_modulo);
