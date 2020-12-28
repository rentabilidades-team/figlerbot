import * as libglobal from "https://cors-anywhere.herokuapp.com/universales.gitlab.io/rentabilidades-team/core/libglobal.js";

async function iniciar_modulo() {
    if(window.location.pathname.indexOf('/notimer_fp')>=0){
        if(libglobal.obtener_get('fpdoge')!=null){
            libglobal.insertar('form > div > input[type=text]',obtener_get('fpdoge'));
        }
        if(libglobal.obtener_get('importar')==1){
            libglobal.inyectar('form','<input type="hidden" name="guardarurl" value="1">');
        }
    }
    if(window.location.pathname.indexOf('/notimer_fp/faucet.php')>=0){
        if(libglobal.obtener_get('guardarurl')=='1'){
            location.replace('//'+libglobal.dominio_base()+'/modulo-digitask?digitaskurl='+encodeURIComponent(window.location.href));
        }else{
            libglobal.cerrar_modulo();
        }
    }
}
iniciar_modulo();
