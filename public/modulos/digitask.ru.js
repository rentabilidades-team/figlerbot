import { espera_carga, obtener_get, insertar, inyectar, dominio_base, cerrar_modulo} from "../core/libglobal.js";

async function iniciar_modulo() {
    if(window.location.pathname.indexOf('/notimer_fp')>=0){
        if(obtener_get('fpdoge')!=null){
            insertar('form > div > input[type=text]',obtener_get('fpdoge'));
        }
        if(obtener_get('importar')==1){
            inyectar('form','<input type="hidden" name="guardarurl" value="1">');
        }
    }
    if(window.location.pathname.indexOf('/notimer_fp/faucet.php')>=0){
        if(obtener_get('guardarurl')=='1'){
            location.replace('//'+dominio_base()+'/modulo-digitask?digitaskurl='+encodeURIComponent(window.location.href));
        }else{
            cerrar_modulo();
        }
    }
}
espera_carga(iniciar_modulo);
