$(document).ready(function(){
    if(window.location.pathname.indexOf('/ultra-bot-plus')>=0){
        document.getElementById('btnstartstopbot').setAttribute("disabled",true);
        document.getElementById('alertabot').style.display = "none";
    }
    if(window.location.pathname.indexOf('/modulo-digitask')>=0){
        $('input#importardigi').prop('disabled', false);
    }
    if(window.location.pathname.indexOf('/faucetpay')>=0){
        document.getElementById('importarfaucetpay').setAttribute("disabled",false);
        document.getElementById("importarfaucetpay").onclick = function() {
            window.location.href='//faucetpay.io/page/user-admin/deposit?r=368874&importar=1';
        };
    }
    if(window.location.pathname.indexOf('/expresscrypto')>=0){
        document.getElementById('importarexpresscrypto').setAttribute("disabled",false);
        document.getElementById("importarexpresscrypto").onclick = function() {
            window.location.href='//expresscrypto.io/dashboard?referral=98071&importar=1';
        };
    }
    if(window.location.pathname.indexOf('/payeer')>=0){
        document.getElementById('importarpayeer').setAttribute("disabled",false);
        document.getElementById("importarexpresscrypto").onclick = function() {
            window.location.href='//payeer.com/en/account/log/?session=402608&importar=1';
        };
    }
});
