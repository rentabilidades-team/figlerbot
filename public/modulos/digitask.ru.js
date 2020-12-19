function obtenvariable(variable) {var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0; i < vars.length; i++) {var pair = vars[i].split("=");if(pair[0] == variable) {return decodeURIComponent(pair[1]);}}return '';}

async function iniciarBot() {
    if(window.location.pathname.indexOf('/notimer_fp')>=0){
        if(obtenvariable('fpdoge')!=null){$('form > div > input[type=text]:nth-child(1)').val(obtenvariable('fpdoge'));}
        if(obtenvariable('importar')==1){$('form').append( "<input type='hidden' name='guardarurl' value='1'>");}
    }
    if(window.location.pathname.indexOf('/notimer_fp/faucet.php')>=0){
        if(obtenvariable('guardarurl')=='1'){
            location.replace('//'+urlbase+'/modulo-digitask?digitaskurl='+encodeURIComponent(window.location.href));
        }else{
            $(document).ready(function(){try{window.close();}catch(e){}});
        }
    }
}
iniciarBot();
