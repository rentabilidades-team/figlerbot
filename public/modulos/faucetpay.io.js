function importar_libglobal(url,callback) {//Permite importar la libreria global
    if(url==null){console.log('Error: Es necesario introducir la url de la libreria.')}
    else{var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);}
}
importar_libglobal('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/libglobal.js',iniciar_modulo);

async function iniciar_modulo() {
    if(obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/page/user-admin/deposit')>=0){
            sessionStorage.setItem('btc',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(1) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('doge',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(3) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('ltc',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(4) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('bch',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(5) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('dash',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(6) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('dgb',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(7) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('trx',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(8) > div > div.card-body.text-center > input','val'));
            sessionStorage.setItem('usdt',obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(9) > div > div.card-body.text-center > input','val'));
            location.replace('//'+window.location.hostname+'/account/settings?importar=1');
        }
        if(window.location.pathname.indexOf('/account/settings')>=0){
            location.replace('//'+dominio_base()+'/faucetpay?fpemail='+obtener('input[name=email]','val')+'&fpbtc='+sessionStorage.getItem("btc")+'&fpdoge='+sessionStorage.getItem("doge")+'&fpltc='+sessionStorage.getItem("ltc")+'&fpbch='+sessionStorage.getItem("bch")+'&fpdash='+sessionStorage.getItem("dash")+'&fpdgb='+sessionStorage.getItem("dgb")+'&fptrx='+sessionStorage.getItem("trx")+'&fpusdt='+sessionStorage.getItem("usdt"));
        }
    }else{
        if(window.location.pathname.indexOf('/page/user-admin')>=0){
            if(document.referrer.indexOf(dominio_base())>=0){
                cerrar_modulo();
            }
        }
    }
}
