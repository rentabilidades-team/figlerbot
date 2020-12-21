function dominiobase() {return 'rentabilidadesweb.runkodapps.com';}//Aporta la base del proyecto

function importarlibreria(url,callback) {//Permite importar librerias en los módulos
if(url==null || callback==null){console.log('Error: Es necesario completar los dos valores.')}
    var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);
}

function cerrarmodulo(valor){//Permite cerrar ventanas cuando la página acabe de cargar (Valor 1 fuerza el cierre en webs que no lo permiten)
    if(valor==null){valor=0;}
    try{valor=parseInt(valor);}catch(e){console.log(e);}
    var loader = setInterval(function () {if(document.readyState !== "complete") return;clearInterval(loader);
    if(valor==0){try{window.close();}catch(e){console.log(e);}}
    if(valor==1){window.location.href='//'+dominioBase()+'/tarea-finalizada';}
    }, 300);  
}

function obtenerget(variable) {var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0; i < vars.length; i++) {var pair = vars[i].split("=");if(pair[0] == variable) {return decodeURIComponent(pair[1]);}}return '';}

function controlNavegador(variable) {
    if(variable==0){}
    if(variable==1){GM.setValue("foo", "bar");}
}

/*Anticaptcha*/
function anticaptcha() {
    if($("div.g-recaptcha").length>=0){//Recaptcha v2 detectado
        $('div.recaptcha-checkbox-checkmark').click();
        if($("button#solver-button").is(':visible')==true){//Captcha requerido
            try{$('button#solver-button').click();}catch(e){}//Hack
        }
    }
    if($("div.h-captcha").length>=0){//Hcaptcha detectado
        $('div#checkbox').click();
    }
}
