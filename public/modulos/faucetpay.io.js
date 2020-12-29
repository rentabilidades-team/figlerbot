import * as libglobal from "../core/libglobal.js";

async function iniciar_modulo() {
    if(libglobal.obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/page/user-admin/deposit')>=0){
            var temp=null;
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(1) > div > div.card-body.text-center > input','val');
            sessionStorage.setItem('btc',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(3) > div > div.card-body.text-center > input','val');
            sessionStorage.setItem('doge',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(4) > div > div.card-body.text-center > input','val');
            sessionStorage.setItem('ltc',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(5) > div > div.card-body.text-center > input','val');
            temp=temp.replace('bitcoincash:','');
            sessionStorage.setItem('bch',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(6) > div > div.card-body.text-center > input','val');
            sessionStorage.setItem('dash',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(7) > div > div.card-body.text-center > input','val');
            sessionStorage.setItem('dgb',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(8) > div > div.card-body.text-center > input','val')
            sessionStorage.setItem('trx',temp.trim());
            temp=libglobal.obtener('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(9) > div > div.card-body.text-center > input','val');
            sessionStorage.setItem('usdt',temp.trim());
            location.replace('//'+window.location.hostname+'/account/settings?importar=1');
        }
        if(window.location.pathname.indexOf('/account/settings')>=0){
            var temp=libglobal.obtener('input[name=email]','val');
            location.replace('//'+libglobal.dominio_base()+'/faucetpay?fpemail='+temp.trim()+'&fpbtc='+sessionStorage.getItem("btc")+'&fpdoge='+sessionStorage.getItem("doge")+'&fpltc='+sessionStorage.getItem("ltc")+'&fpbch='+sessionStorage.getItem("bch")+'&fpdash='+sessionStorage.getItem("dash")+'&fpdgb='+sessionStorage.getItem("dgb")+'&fptrx='+sessionStorage.getItem("trx")+'&fpusdt='+sessionStorage.getItem("usdt"));
        }
    }else{
        if(window.location.pathname.indexOf('/page/user-admin')>=0){
            if(document.referrer.indexOf(libglobal.dominio_base())>=0){
                libglobal.cerrar_modulo();
            }
        }
    }
}
iniciar_modulo();
