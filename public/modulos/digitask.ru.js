async function iniciarBot() {
    if(window.location.pathname.indexOf('/notimer_fp')>=0){
        if(obtenget('fpdoge')!=null){$('form > div > input[type=text]:nth-child(1)').val(obtenget('fpdoge'));}
        if(obtenget('importar')==1){$('form').append( "<input type='hidden' name='guardarurl' value='1'>");}
    }
    if(window.location.pathname.indexOf('/notimer_fp/faucet.php')>=0){
        if(obtenget('guardarurl')=='1'){
            location.replace('//'+dominiobase()+'/modulo-digitask?digitaskurl='+encodeURIComponent(window.location.href));
        }else{
            cerrarmodulo();
        }
    }
}
iniciarBot();
