async function iniciarBot() {
    if(window.location.pathname=='/'){
        if(document.referrer.indexOf('/payout')>=0){
            global.cerrarmodulo();
        }
    }
    if(window.location.pathname.indexOf('/payout')>=0 || window.location.pathname.indexOf('/start')>=0){
        global.cerrarmodulo();
    }
    /*Código no terminado
    if(window.location.pathname.indexOf('/shortlinks')>=0){
        $('form').prop('target', '_self');
        if($('form > button:not(.views-completed)').length!=0){
            $(document).ready(function(){
                setInterval(function(){
                    $('form > button:not(.views-completed):first').click();
                },10000);
            });
        }
        else{
            $(document).ready(function(){try{window.close();}catch(e){}});
        }
    }
    */
}
iniciarBot();
