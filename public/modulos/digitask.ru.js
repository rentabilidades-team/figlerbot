async function iniciar_modulo(global) {
    if(window.location.pathname.indexOf('/notimer_fp')>=0){
        if(obtenget('fpdoge')!=null){$('form > div > input[type=text]:nth-child(1)').val(obtenget('fpdoge'));}
        if(obtenget('importar')==1){$('form').append( "<input type='hidden' name='guardarurl' value='1'>");}
    }
    if(window.location.pathname.indexOf('/notimer_fp/faucet.php')>=0){
        if(obtenget('guardarurl')=='1'){
            location.replace('//'+global.dominio_base()+'/modulo-digitask?digitaskurl='+encodeURIComponent(window.location.href));
        }else{
            global.cerrar_modulo();
        }
    }
}
export default {iniciar_modulo};
