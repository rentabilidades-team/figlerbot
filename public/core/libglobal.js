var dominiobase='rentabilidadesweb.runkodapps.com';

function dominio_base() {return dominiobase;}//Aporta la base del proyecto

/*El siguiente ejemplo te permite esperar un tiempo para realizar una acción.
  Ejemplo: espera(1000);//Espera de 1 segundo
*/
function espera(ms){
  if(ms==null){console.log('Error: espera(ms); El valor ms es null');}
  else{
    try{ms=parseInt(ms);}catch(e){console.log(e);}
    var d = new Date(),d2;
    do {d2 = new Date();}
    while(d2-d < ms);
  }
}

/*El siguiente ejemplo te permite generar un numero aleatorio.
    Ejemplo: var num=numero_aleatorio(1,5);//Devuelve un numero aleatorio entre el numero 1 y el munero 5
*/
function numero_aleatorio(min,max) {
  if(min==null || max==null){console.log('Error: numero_aleatorio(min,max); El valor min o max es null.');}
  else{
    try{min=parseInt(min);max=parseInt(max);}catch(e){console.log(e);}
    return Math.floor((Math.random() * max) + min);
  }
}

/*El siguiente ejemplo te permite importar librerias en el módulo. 
    importar_libreria('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/modulos/templates/freefamily.js');//Importo la plantilla de un módulo.
  Importante: NO SE RECOMIENDA LA IMPORTACIÓN DE LIBRERIAS EXTERNAS EN LOS MODULOS.
  El siguiente ejemplo te permite importar librerias en el módulo, y obtener información de ellas.
    Ejemplo: importar_libreria('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js',funcion); //Importo Jquery
    function funcion() {
      //Aqui puedo usar jquery
    }
  Por defecto se importa 'text/javascript', también es posible cambiar el tipo de script a importar...
    Ejemplo: importar_libreria('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js',funcion,'module'); //Importo Jquery como modulo
    function funcion() {
      //Aqui puedo usar jquery
    }
*/
function importar_libreria(url,callback,tipo) {
  if(url==null){console.log('Error: importar_libreria(url,callback); El valor url es null.');}
  if(tipo==null){tipo='text/javascript';}
  else{
    var s = document.createElement("script");
    if(callback!=null){s.onload = callback;}
    s.type = tipo;
    s.src = url;
    document.querySelector("head").appendChild(s);
  }
}

/*El siguiente ejemplo te permite realizar un click con simulación humana.
    Ejemplo: click('button#id-del-boton.class-del-boton.otra-class-del-boton');
*/
function click(identificador) {
  var tiempoespera=numero_aleatorio(1000,5000), x, i, style, visibility, display;
  x = document.querySelectorAll(identificador);
  if(x.length==0){console.log('Click ignorado: click(identificador); No se pudo encontrar el elemento '+identificador+' .');}
  else{
    i=0;
    /* Comprobación nodo padre */
    style = window.getComputedStyle(x[i].parentNode);
    visibility = style.getPropertyValue('visibility').toLowerCase();
    display = style.getPropertyValue('display').toLowerCase();
    if(visibility=='hidden' || display=='none'){x[i].style.display='none';}
    /* Comprobación nodo hijo */
    if(x[i].disabled==true){
      console.log('Click ignorado: El boton está deshabilidado.');
    }
    style = window.getComputedStyle(x[i]);
    visibility = style.getPropertyValue('visibility').toLowerCase();
    display = style.getPropertyValue('display').toLowerCase();
    if(visibility=='hidden' || display=='none'){
      console.log('Click ignorado: El boton está escondido.');
    }
    /* Acción click */
    espera(tiempoespera);
    if(x[i].disabled==false && visibility!='hidden' && display!='none'){
      x[i].click();
      x[i].disabled = true;
    }
  }
}

/*Obtener el valor de un elemento de la web.
    Ejemplo: var dato=obtener('input#id-del-input.class-del-input.otra-class-del-input','val');
  Tambien se puede obtener su html completo...
    Ejemplo: var dato=obtener('input#id-del-input.class-del-input.otra-class-del-input','html');
*/
function obtener(identificador,tipo) {
  var x, i;
  if(tipo==null){tipo='html';}
  x = document.querySelectorAll(identificador);
  if(x.length==0){console.log('Error: insertar(identificador,texto); No se pudo encontrar el identificador '+identificador+' .');}
  else{
    if(tipo=='html'){return x[0].outerHTML.trim();}
    if(tipo=='val'){
      if(x[0].innerText!=''){
        return x[0].innerText.trim();
      }else{
        return x[0].value.trim();
      }
    }
  }
}

/*Introducir un valor a un elemento de la web.
    Ejemplo: insertar('input#id-del-input.class-del-input.otra-class-del-input','Texto insertado en el input de la web');
  Si se quiere introducir el valor de manera masiva a todos los elementos, puedes añadir "true".
    Ejemplo: insertar('input','Texto insertado en todos los input de la web',true);
*/
function insertar(identificador,texto,masivo) {
  var x, i;
  if(texto==null){console.log('Error: insertar(identificador,texto); El valor texto es null.');texto='';}
  if(masivo==null){masivo=false;}
  x = document.querySelectorAll(identificador);
  if(x.length==0){console.log('Error: insertar(identificador,texto); No se pudo encontrar el identificador '+identificador+' .');}
  else{
    if(masivo==false){
      x[0].value = texto; 
    }else{
      for (i = 0; i < x.length; i++) {
        x[i].value = texto; 
      }
    }
  }
}

/*El siguiente ejemplo te permite inyectar un elemento a la web.
    Ejemplo: inyectar('form#id-del-form.class-del-form.otra-class','<input type="hidden" name="nombre" value="1">');
  Si se quiere inyectar el valor de manera masiva a todos los elementos, puedes añadir "true".
    Ejemplo: inyectar('form','<input type="hidden" name="nombre" value="1">',true); //Inyectado en todos los form
*/
function inyectar(identificador,texto,masivo) {
  var x, i;
  if(texto==null){console.log('Error: insertar(identificador,texto); El valor texto es null.');texto='';}
  if(masivo==null){masivo=false;}
  x = document.querySelectorAll(identificador);
  if(x.length==0){console.log('Error: insertar(identificador,texto); No se pudo encontrar el elemento '+identificador+' .');}
  else{
    if(masivo==false){
      x[0].insertAdjacentHTML("afterbegin", texto);
    }else{
      for (i = 0; i < x.length; i++) {
        x[i].insertAdjacentHTML("afterbegin", texto);
      }
    }
  }
}

/*El siguiente ejemplo te permite ocultar o esconder contenido de la web.
    Ejemplo: ocultar('div#id-del-div.class-del-div.otra-class-del-div');
  Si deseas solo ocultar el primer contenido de la web, puedes añadir "false".
    Ejemplo: ocultar('div#id-del-div.class-del-div.otra-class-del-div',false);
*/
function ocultar(identificador,masivo) {
  var x, i;
  if(masivo==null){masivo=true;}
  x = document.querySelectorAll(identificador);
  if(x.length==0){console.log('Error: ocultar(identificador); No se pudo encontrar el elemento '+identificador+' .');}
  else{
    if(masivo==false){
      x[0].style.display = "none";
    }else{
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    }
  }
}

/*El siguiente ejemplo te permite cerrar tu modulo.
    Ejemplo: cerrar_modulo();
  Si el método anterior no funciona puedes forzar el cierre del módulo.
    Ejemplo: cerrar_modulo(true);
*/
function cerrar_modulo(valor){
  setInterval(function(){
    if (document.readyState === "complete") {//Página cargada completamente
      if(valor==null){valor=false;}
      if(valor==false){try{window.close();}catch(e){console.log(e);}}
      if(valor==true){window.location.href='//'+dominiobase+'/tarea-finalizada';}
    }
  },500);
}

/*El siguiente ejemplo te permite obtener cualquier variable "get" de la url.
    URL: https://example.com/?hola=1
    Ejemplo: var dato = obtener_get('hola'); //Se recibe el 1 de la url
*/
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

/*El siguiente ejemplo te permite guardar un dato en el navegador.
    Ejemplo: gestionar_datos_del_navegador(0,'dato1','valor del dato 1');//Guardo 'dato1' y el 'valor del dato 1'
  El siguiente ejemplo te permite obtener un dato en el navegador.
    Ejemplo: var informacion=gestionar_datos_del_navegador(1,'dato1');//Obtengo 'valor del dato 1'
  El siguiente ejemplo te permite eliminar un dato en el navegador.
    Ejemplo: gestionar_datos_del_navegador(2,'dato1');//Elimino 'dato1' y el 'valor del dato 1' del navegador.
*/
function gestionar_datos_del_navegador(accion,nombre,valor) {//Accion (0 obtener dato del navegador, 1 guardar dato en el navegador, 2 borrar dato del navegador)
  if(accion==null){console.log('Error: gestionar_datos_del_navegador(accion,nombre,valor); El valor accion es null.');}
  else{
    try{accion=parseInt(accion);}catch(e){console.log(e);}
    if(accion==0){
      if(nombre==null || valor==null){console.log('Error: gestionar_datos_del_navegador(1,nombre,valor); El valor nombre o valor es null.');}
      else{
        GM.setValue(nombre,valor);  
      }
    }
    if(accion==1){
      var getdato=GM.getValue(nombre);
      if(getdato==null){console.log('Error: gestionar_datos_del_navegador(0,nombre,valor); El valor nombre es null.');}
      else{return getdato;}
    }
    if(accion==2){
      if(nombre==null){console.log('Error: gestionar_datos_del_navegador(2,nombre); El valor nombre es null.');}
      else{
        GM.deleteValue(nombre);
      }
    }
  }
}

/*El siguiente ejemplo te permite guardar los datos de un módulo de manera simple.
    Ejemplo: guardar_datos_modulo(1000,100,24);//El bot esperará 1 segundo para volver a ejecutar el módulo, guardo '100' de saldo en total en la cuenta y '24' es el dinero obtenido.
*/
function guardar_datos_modulo(espera,saldo,ganado) {
  if(espera==null){console.log('Error: guardar_datos_modulo(espera,saldo,ganado); El valor espera es null.');}
  else{
    var web=location.hostname;
    if(saldo==null){saldo=(-1);}
    if(ganado==null){ganado=(-1);}
    try{espera=parseInt(espera);}catch(e){console.log(e);}
    try{ganado=parseInt(ganado);}catch(e){console.log(e);}
    try{premio=parseInt(premio);}catch(e){console.log(e);}
    var objetomodulo = {name:web, wait:espera, balance:balance, reward:ganado};
    web=web.replace('.','');
    gestionar_datos_del_navegador(0,web,objetomodulo);
  }
}

/*El siguiente ejemplo te permite guardar un dato en una cookie.
    Ejemplo: crear_cookie('cookie1','valorcookie1'); //Expiración de la cookie por defecto 1 día.
  También puedes editar el tiempo de expiración.
    Ejemplo: crear_cookie('cookie1','valorcookie1',4); //Expiración de la cookie en 4 días.
  El siguiente ejemplo te permite eliminar una cookie.
    Ejemplo: var valor=crear_cookie('cookie1'); //cookie1 eliminada.
*/
function crear_cookie(cname, cvalue, exdays) {
  if(cname==null){console.log('Error: crear_cookie(cname,cvalue); El valor cname es null.');}
  else{
    if(cvalue==null){exdays=0;}
    if(exdays==null){exdays=1;}
    try{exdays=parseInt(exdays);}catch(e){console.log(e);}
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

/*El siguiente ejemplo te permite recibir el valor de una cookie.
    Ejemplo: var valor=obtener_cookie('cookie1');
*/
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
function anticaptcha() {
  /*  No funcional, transformar a puro js.
      if($("div.g-recaptcha").length>=0){//Recaptcha v2 detectado
          $('div.recaptcha-checkbox-checkmark').click();
          if($("button#solver-button").is(':visible')==true){//Captcha requerido
              try{$('button#solver-button').click();}catch(e){}//Hack
          }
      }
      if($("div.h-captcha").length>=0){//Hcaptcha detectado
          $('div#checkbox').click();
      }
  */
}

export {dominio_base,espera,numero_aleatorio,importar_libreria,click,obtener,insertar,inyectar,ocultar,cerrar_modulo,obtener_get,gestionar_datos_del_navegador,guardar_datos_modulo,crear_cookie,obtener_cookie,anticaptcha};
