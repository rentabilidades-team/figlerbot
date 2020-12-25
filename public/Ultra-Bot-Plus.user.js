// ==UserScript==
// @name         Ultra Bot Plus
// @namespace    https://rentabilidadesweb.runkodapps.com/
// @version      0.3
// @description  Complemento para el navegador del Ultra Bot Plus, aumenta tus ganancias.
// @author       Rentabilidades Team
// @updateURL    https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/Ultra-Bot-Plus.user.js
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
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// ==/UserScript==

(function() {
    'use strict';
    if(){
        import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/modulos/'+location.hostname+'.js');
    }

/*Todo lo mostrado a continuación forma parte de la versión antigua del bot, próximamente se irán implementando mejoras.*/

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
