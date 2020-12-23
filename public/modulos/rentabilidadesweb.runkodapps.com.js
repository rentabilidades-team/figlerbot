async function iniciar_modulo() {
    if(window.location.pathname.indexOf('/ultra-bot-plus')>=0){
        document.getElementById('btnstartstopbot').disabled = false;
        document.getElementById('alertabot').style.display = "none";
    }
    if(window.location.pathname.indexOf('/modulo-digitask')>=0){
        document.getElementById('importardigi').disabled = false;
    }
    if(window.location.pathname.indexOf('/faucetpay')>=0){
        document.getElementById('importarfaucetpay').disabled = false;
        document.getElementById("importarfaucetpay").onclick = function() {
            window.location.href='//faucetpay.io/page/user-admin/deposit?r=368874&importar=1';
        };
    }
    if(window.location.pathname.indexOf('/expresscrypto')>=0){
        document.getElementById('importarexpresscrypto').disabled = false;
        document.getElementById("importarexpresscrypto").onclick = function() {
            window.location.href='//expresscrypto.io/dashboard?referral=98071&importar=1';
        };
    }
    if(window.location.pathname.indexOf('/payeer')>=0){
        document.getElementById('importarpayeer').disabled = false;
        document.getElementById("importarexpresscrypto").onclick = function() {
            window.location.href='//payeer.com/en/account/log/?session=402608&importar=1';
        };
    }
}
iniciar_modulo();
