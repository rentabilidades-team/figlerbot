function obtenvariable(variable) {var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0; i < vars.length; i++) {var pair = vars[i].split("=");if(pair[0] == variable) {return decodeURIComponent(pair[1]);}}return '';}

if(obtenvariable('importar')==1){
        if(window.location.pathname.indexOf('/page/user-admin/deposit')>=0){
            sessionStorage.setItem('btc',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(1) > div > div.card-body.text-center > input').val().trim());
            sessionStorage.setItem('doge',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(3) > div > div.card-body.text-center > input').val().trim());
            sessionStorage.setItem('ltc',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(4) > div > div.card-body.text-center > input').val().trim());
            sessionStorage.setItem('bch',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(5) > div > div.card-body.text-center > input').val().replace('bitcoincash:', '').trim());
            sessionStorage.setItem('dash',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(6) > div > div.card-body.text-center > input').val().trim());
            sessionStorage.setItem('dgb',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(7) > div > div.card-body.text-center > input').val().trim());
            sessionStorage.setItem('trx',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(8) > div > div.card-body.text-center > input').val().trim());
            sessionStorage.setItem('usdt',$('body > div.content.content-fixed > div > div.row.row-xs > div > div.row > div:nth-child(9) > div > div.card-body.text-center > input').val().trim());
            location.replace('//'+window.location.hostname+'/account/settings?importar=1');
        }
        if(window.location.pathname.indexOf('/account/settings')>=0){
            location.replace('//'+urlbase+'/faucetpay?fpemail='+$('input[name=email]').val().trim()+'&fpbtc='+sessionStorage.getItem("btc")+'&fpdoge='+sessionStorage.getItem("doge")+'&fpltc='+sessionStorage.getItem("ltc")+'&fpbch='+sessionStorage.getItem("bch")+'&fpdash='+sessionStorage.getItem("dash")+'&fpdgb='+sessionStorage.getItem("dgb")+'&fptrx='+sessionStorage.getItem("trx")+'&fpusdt='+sessionStorage.getItem("usdt"));
        }
    }else{
        if(window.location.pathname.indexOf('/page/user-admin')>=0){
            if(document.referrer.indexOf(urlbase)>=0){
                $(document).ready(function(){try{window.close();}catch(e){}});
            }
        }
}