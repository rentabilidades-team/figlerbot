// ==UserScript==
// @name         Ultra Bot Plus
// @namespace    https://rentabilidadesweb.runkodapps.com/
// @version      0.3
// @description  Complemento para el navegador del Ultra Bot Plus, aumenta tus ganancias.
// @author       Rentabilidades Team
// @updateURL    https://universales.gitlab.io/rentabilidades-team/Ultra-Bot-Plus.user.js
// @supportURL   https://gitlab.com/universales/rentabilidades-team/-/issues
// @contributionURL https://rentabilidadesweb.runkodapps.com/donaciones/
// @license      Mit
// @compatible   Compatible con firefox, chrome, opera y safari.


// @include      http*://rentabilidadesweb.runkodapps.com/*
// @include      http*://faucetpay.io/*
// @include      http*://expresscrypto.io/*
// @include      http*://payeer.com/en/account/log/*
// @include      http*://digitask.ru/*
// @include      http*://freesteam.io/*
// @include      http*://freenem.com/*
// @include      http*://freecardano.com/*
// @include      http*://coinfaucet.io/*
// @include      http*://freebitcoin.io/*
// @include      http*://freetether.com/*
// @include      http*://freeusdcoin.com/*
// @include      http*://freebinancecoin.com/*
// @include      http*://freeethereum.com/*
// @include      http*://free-tron.com/*
// @include      http*://free-ltc.com/*
// @include      http*://freedash.io/*
// @include      http*://freechain.link/*
// @include      http*://freeneo.io/*
// @include      http*://bigfreegiveaway.com/*
// @include      http*://webflex24.com/*
// @include      http*://rollerbit.net/*
// @include      http*://freegridco.in/*
// @include      http*://popspins.com/*
// @include      http*://randomsatoshi.win/*
// @include      http*://freebitco.in/*
// @include      http*://firefaucet.win/*
// @include      http*://adbtc.top/*

// @include      http*://*.freebcc.org/*
// @include      http*://dogemate.com/*
// @include      http*://faupto.com/*
// @include      http*://*theblogcash.in/*
// @include      http*://*.dutchycorp.space/*
// @include      http*://dutchycorp.ovh/*
// @include      http*://*linkdesh.xyz/*
// @include      http*://*.100count.net/*
// @include      http*://100count.net/*
// @include      http*://zagl.info/*

// @include      http*://goldenmines.biz/*
// @include      http*://golden-mines.biz/*
// @include      http*://money-gnomes.pro/*
// @include      http*://money-gnomes.ru/*
// @include      http*://cosmo-sfera.biz/*
// @include      http*://me-farm.me/*
// @include      http*://wood-man.biz/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    import('https://thingproxy.freeboard.io/fetch/https://universales.gitlab.io/rentabilidades-team/core/global.js');
    import('https://thingproxy.freeboard.io/fetch/https://universales.gitlab.io/rentabilidades-team/modulos/'+location.hostname+'.js');

/*Todo lo mostrado a continuación forma parte de la versión antigua del bot, próximamente se irán implementando mejoras.*/

//El bot mostrado a continuación es un bot "Universal", funciona con todas las webs rusas tipicas de "Juegos de inversión", no está acabado, falta algo de codigo...
    if(location.hostname=='goldenmines.biz' || location.hostname=='golden-mines.biz' || location.hostname=='cosmo-sfera.biz' || location.hostname=='me-farm.me' || location.hostname=='money-gnomes.ru' || location.hostname=='money-gnomes.pro' || location.hostname=='wood-man.biz'){
    async function autoclick() {
        var temp=0;
        setInterval(function(){
            if(window.location.pathname=='/'){
                if($(":submit:first").length>0){
                    try{$(":submit:first").click();}catch(e){}
                }else{
                    try{$("form").submit();}catch(e){}
                }
            }

            if(window.location.pathname.indexOf('/login')>=0){
                if($("body").html().indexOf('submit()')>=0){
                    try{$(":button").click();}catch(e){}
                }else{
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                }
            }
            if(window.location.pathname.indexOf('/account')>=0 && window.location.pathname.indexOf('/account/')<0){
                window.location.href=window.location.href+'/store';
            }
            if($("body").html().indexOf('/store')>=0){//Contiene store
                if(window.location.pathname.indexOf('/store')>=0){//Clasico
                    if($('form').length==1){
                        if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                            try{$("form").submit();}catch(e){}
                        }else{
                            try{$(":submit").click();}catch(e){}
                        }
                        if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){
                            window.location.href=window.location.href.replace("store", "market");
                        }
                    }
                    if($('form').length==2){//Ajustar código
                        if(sessionStorage.getItem('paso')==null){
                            if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){sessionStorage.setItem('paso',1);}
                            if($('form:first').attr('action')!='' && $('form:first').attr('action')!='#'){
                                try{$("form:first").submit();}catch(e){}
                            }else{
                                try{$(":submit:first").click();}catch(e){}
                            }
                        }
                        if(sessionStorage.getItem('paso')==1){//Boton segundo
                            if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){sessionStorage.setItem('paso',2);}
                            if($('form:last').attr('action')!='' && $('form:last').attr('action')!='#'){
                                try{$("form:last").submit();}catch(e){}
                            }else{
                                try{$(":submit:last").click();}catch(e){}
                            }
                        }
                        if(sessionStorage.getItem('paso')==2){
                            if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){//Reenvio
                                sessionStorage.removeItem('paso');
                                window.location.href=window.location.href.replace("store", "bonus");
                            }
                        }
                    }
                }
            }
            if($("body").html().indexOf('/market')>=0){//Contiene market
                if(window.location.pathname.indexOf('/market')>=0){
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){
                        window.location.href=window.location.href.replace("market", "bonus");
                    }
                }
            }
            if($("body").html().indexOf('/bonus')>=0){//Bonos

                if(window.location.pathname.indexOf('bonus')>=0 && window.location.pathname.indexOf('bonus_')<0 && window.location.pathname.indexOf('bonus1')<0 && window.location.pathname.indexOf('bonus2')<0 && window.location.pathname.indexOf('bonus3')<0){//Bono 24h
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus_hour')>=0){
                            window.location.href=window.location.href.replace("bonus", "bonus_hour");
                        }
                        if($("body").html().indexOf('/bonus1h')>=0){
                            window.location.href=window.location.href.replace("bonus", "bonus1h");
                        }else{
                            if($("body").html().indexOf('/bonus1')>=0){
                                window.location.href=window.location.href.replace("bonus", "bonus1");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }

                    }
                }

                if(window.location.pathname.indexOf('/bonus_hour')>=0 || window.location.pathname.indexOf('/bonus1')>=0){//Bono 1h - Bono 1
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus3h')>=0){
                            window.location.href=window.location.href.replace("bonus1h", "bonus3h");
                        }
                        if($("body").html().indexOf('/bonus2h')>=0){
                            window.location.href=window.location.href.replace("bonus1h", "bonus2h");
                        }else{
                            if($("body").html().indexOf('/bonus2')>=0){
                                window.location.href=window.location.href.replace("bonus1h", "bonus2");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }
                    }
                }

                if(window.location.pathname.indexOf('/bonus2')>=0){//Bono 2
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus3h')>=0){
                            window.location.href=window.location.href.replace("bonus2", "bonus3h");
                        }else{
                            if($("body").html().indexOf('/bonus3')>=0){
                                window.location.href=window.location.href.replace("bonus2", "bonus3");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }
                    }
                }

                if(window.location.pathname.indexOf('/bonus3')>=0){//Bono 3h - Bono 3
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus4h')>=0){
                            window.location.href=window.location.href.replace("bonus3", "bonus4h");
                        }else{
                            if($("body").html().indexOf('/bonus4')>=0){
                                window.location.href=window.location.href.replace("bonus3", "bonus4");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }
                    }
                }

                if(window.location.pathname.indexOf('/bonus4')>=0){//Bono 4h - Bono 4
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        $(document).ready(function(){try{window.close();}catch(e){}});
                    }
                }

            }
        },5000);
    }
    autoclick();
}

/*Shortlinks Pass*/
    if(location.hostname.indexOf(".freebcc.org")>=0){
        window.location.href=$('button#makingdifferenttimer.btn-captchas').attr('onclick').replace(/ /g, "").substring(70).replace("');",'');
    }
    if(location.hostname.indexOf("zagl.info")>=0){
        if(typeof $('a.btn.btn-primary').attr("href") !== "undefined"){window.location.href='//'+location.hostname+$('a.btn.btn-primary').attr("href");}
    }
    if(location.hostname=='dogemate.com' || location.hostname=='faupto.com' || location.hostname=='linkdesh.xyz'){
        $('button#bdt:submit').click();
    }
    if(location.hostname=='theblogcash.in' || location.hostname=='linkdesh.xyz'){
        $('button#mdt:submit').click();
    }
    if(location.hostname=='100count.net'){
        if($("div#cl1 > a").length > 0){
            window.location.href=$('div#cl1 > a').attr("href");
        }
    }
    if(location.hostname.indexOf(".100count.net")>=0){
        if($('button#mdt:submit').length > 0){
            $('button#mdt:submit').click();
        }
    }
    if(location.hostname.indexOf(".dutchycorp.space")>=0){
        duerme('10000');
        if($("div#cl1 > center > a").length > 0){
            window.location.href=$("div#cl1 > center > a").attr("href");
        }
    }
    if(location.hostname=='dutchycorp.ovh'){
        duerme('10000');
        if($("div#cl0").length > 0){
            showElem('cl1');
        }
        if($("div#cl1").length > 0){
            showElem('cl2');
        }
    }

    

})();
