async function iniciarBot() {
    if(window.location.pathname=='/'){
        if($('body > div.row > div.col.s12.m12.l6 > div > center:nth-child(4) > div:nth-child(6) > div:nth-child(2) > span > b').html()=='0'){//Revisar bug
            $(document).ready(function(){try{window.close();}catch(e){}});
        }
    }
    if(window.location.pathname.indexOf('/payout')>=0 || window.location.pathname.indexOf('/start')>=0){
        $(document).ready(function(){try{window.close();}catch(e){}});
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
