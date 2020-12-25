function dominio_base() {return 'rentabilidadesweb.runkodapps.com';}//Aporta la base del proyecto

/*Gestión de tiempo*/
function espera(ms){//Tiempo de espera - espera(ms);
  if(ms==null){console.log('Error: espera(ms); El valor ms es null');}
  else{
    try{ms=parseInt(ms);}catch(e){console.log(e);}
    var d = new Date(),d2;
    do {d2 = new Date();}
    while(d2-d < ms);
  }
}

/*Generar numero aleatorio*/
function numero_aleatorio(min,max) {//Permite obtener un numero aleatorio
  if(min==null || max==null){console.log('Error: numero_aleatorio(min,max); El valor min o max es null.');}
  else{
    try{min=parseInt(min);max=parseInt(max);}catch(e){console.log(e);}
    return Math.floor((Math.random() * max) + min);
  }
}

/*Importación de librerias*/
function importar_libreria(url,callback) {//Permite importar librerias en los módulos
  if(url==null){console.log('Error: importar_libreria(url,callback); El valor url es null.')}
  else{
    var s = document.createElement("script");s.onload = callback;s.src = url;document.querySelector("head").appendChild(s);
  }
}

/*Realizar click humano*/
function click(identificador) {//Ejemplo click('button#id-del-boton.class-del-boton.otra-class-del-boton');
  var tiempoespera=numero_aleatorio(1000,5000), x, i;
  x = document.querySelectorAll(identificador);
  if(x.length<0){console.log('Error: click(identificador); No se pudo encontrar el elemento '+identificador+' .');}
  else{
    espera(tiempoespera);
    for (i = 0; i < x.length; i++) {
      if(x[i].disabled){console.log('Click ignorado: El boton está deshabilidado.');}
      if(x[i].style.visibility=='hidden'){console.log('Click ignorado: El boton está escondido.');}
      if(x[i].disabled==false && x[i].style.visibility=='visible'){
        x[i].click();
        x[i].disabled = true;
      }
    }
  }
}

/*Ocultar contenido*/
function ocultar_contenido(identificador) {//Ejemplo ocultar('button#id-del-boton.class-del-boton.otra-class-del-boton');
  var x, i;
  x = document.querySelectorAll(identificador);
  if(x.length<0){console.log('Error: ocultar_contenido(identificador); No se pudo encontrar el elemento '+identificador+' .');}
  else{
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
}

/*Gestor de ventanas*/
function cerrar_modulo(valor){//Permite cerrar ventanas cuando la página acabe de cargar (Valor 1 fuerza el cierre en webs que no lo permiten)
    if(valor==null){valor=0;}
    try{valor=parseInt(valor);}catch(e){console.log(e);}
    var loader = setInterval(function () {if(document.readyState !== "complete") return;clearInterval(loader);
    if(valor==0){try{window.close();}catch(e){console.log(e);}}
    if(valor==1){window.location.href='//'+dominioBase()+'/tarea-finalizada';}
    }, 300);  
}

/*Obtener variable get de la url*/
function obtener_get(nombre) {
  if(nombre==null){console.log('Error: obtener_get(nombre); El valor nombre es null.');}
  else{
    var query = window.location.search.substring(1);
    var vars = query.split("&");for (var i=0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if(pair[0] == nombre) {
        return decodeURIComponent(pair[1]);
      }
    }
    return '';
  }
  }

/*Gestionar almacenamiento del navegador*/
function gestionar_datos_del_navegador(accion,nombre,valor) {//Accion (0 obtener dato del navegador, 1 guardar dato en el navegador, 2 borrar dato del navegador)
  if(accion==null){console.log('Error: gestionar_datos_del_navegador(accion,nombre,valor); El valor accion es null.');}
  else{
    try{accion=parseInt(accion);}catch(e){console.log(e);}
    if(accion==0){
      var getdato=GM.getValue(nombre);
      if(getdato==null){console.log('Error: gestionar_datos_del_navegador(0,nombre,valor); El valor nombre es null.');}
      else{return getdato;}
    }
    if(accion==1){
      if(nombre==null || valor==null){console.log('Error: gestionar_datos_del_navegador(1,nombre,valor); El valor nombre o valor es null.');}
      else{
        GM.setValue(nombre,valor);  
      }
    }
    if(accion==2){
      if(nombre==null){console.log('Error: gestionar_datos_del_navegador(2,nombre); El valor nombre es null.');}
      else{
        GM.deleteValue(nombre);
      }
    }
  }

/*Gestionar cookies*/
function crear_cookie(cname, cvalue, exdays) {
  if(cname==null || cvalue==null){console.log('Error: crear_cookie(cname,cvalue); El valor cname o cvalue es null.');}
  else{
    if(exdays==null){exdays=1;}//Valor por defecto de expiración de la cookie si el valor exdays no es enviado (1 día)
    try{exdays=parseInt(exdays);}catch(e){console.log(e);}
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}
function obtener_cookie(cname) {
  if(cname==null){console.log('Error: obtener_cookie(cname); El valor cname es null.');}
  else{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

/*Anticaptcha*/
function anticaptcha() {//No funcional, transformar a puro js.
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

//export {dominio_base,espera,importar_libreria,cerrar_modulo,obtener_get,gestionar_datos_del_navegador,crear_cookie,obtener_cookie,anticaptcha};
