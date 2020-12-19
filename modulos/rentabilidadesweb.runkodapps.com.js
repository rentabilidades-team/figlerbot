$(document).ready(function(){
    if(window.location.pathname.indexOf('/ultra-bot-plus')>=0){
        $('input#btnstartstopbot').prop('disabled', false);
        $('div#alertabot').css("display", "none");
    }
    if(window.location.pathname.indexOf('/modulo-digitask')>=0){
        $('input#importardigi').prop('disabled', false);
    }
    if(window.location.pathname.indexOf('/faucetpay')>=0){
        $('input#importarfaucetpay').prop('disabled', false);
        $('input#importarfaucetpay').click(function(){
            window.location.href='//faucetpay.io/page/user-admin/deposit?r=368874&importar=1';
        });
    }
    if(window.location.pathname.indexOf('/expresscrypto')>=0){
        $('input#importarexpresscrypto').prop('disabled', false);
        $('input#importarexpresscrypto').click(function(){
            window.location.href='//expresscrypto.io/dashboard?referral=98071&importar=1';
        });
    }
    if(window.location.pathname.indexOf('/payeer')>=0){
        $('input#importarpayeer').prop('disabled', false);
        $('input#importarpayeer').click(function(){
            window.location.href='//payeer.com/en/account/log/?session=402608&importar=1';
        });
    }
});
