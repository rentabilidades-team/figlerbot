function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.')}
    else{var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);}
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);

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
