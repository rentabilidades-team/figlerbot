/* Valores por defecto */
var coloricono='red', modulos = [];

/* Funcionamiento del Bot */

function bloquearSalida(valor) {
  if(valor==true){
    window.onbeforeunload = function (e) {var message = "¿Estas seguro de que deseas detener el bot?",e = e || window.event;if (e) {e.returnValue = message;}return message;};
  }else{
    window.onbeforeunload = '';
  }
}

function estado_general_bot(coloricono) {
    document.getElementById('iconoestadogeneral').style.backgroundColor = coloricono;
    if(coloricono=='green'){
      document.getElementById('iconoestadogeneral').disabled = false;
      document.getElementById('btnstartstopbot').value='🤖 Detener Bot';
      bloquearSalida(true);
    }
    if(coloricono=='yellow'){
      document.getElementById('iconoestadogeneral').disabled = true;
      document.getElementById('btnstartstopbot').value='🤖 Iniciando modulos del Bot';
      bloquearSalida(true);
    }
    if(coloricono=='red'){
      document.getElementById('iconoestadogeneral').disabled = false;
      document.getElementById('btnstartstopbot').value='🤖 Iniciar Bot';
      bloquearSalida(false);
    }  
}


async function IniciarBot() {}
async function DetenerBot() {}


$(document).ready(function(){if(localStorage.getItem('modoinicio')==1){document.getElementById('btnstartstopbot').click();}});//Linea para el inicio automático

/* Funciones de los Modulos */

function modulo(id, direccionurl, segundosdeespera) {
  this.id = id;
  this.direccionurl = direccionurl;
  this.segundosdeespera = segundosdeespera;   
}



function crear_Modulo(direccionurl,segundosdeespera) {
  var modulo = new modulo(modulos.length + 1,direccionurl,segundosdeespera);
  modulos.push(modulo);
}

function mostrar_Modulos(){
  var lista='';
  for(var i=0; i<modulos.length; i++){
    lista+= 'id: ' + modulos[i].id +
      ' direccionurl: ' + modulos[i].direccionurl + 
      ' segundosdeespera: ' + modulos[i].segundosdeespera + '\n';
  }
  console.log(lista);
}

function obten_Cantidad_Total_De_Modulos(){return modulos.length;}

/*Funciones para abrir las URL*/

function abrirURL(id, url) {
  var devuelve;
  if(localStorage.getItem('modonavegacion')==0){
    devuelve=window.open(url, '_blank');
    devuelve.blur();
  }
  if(localStorage.getItem('modonavegacion')==1){
    devuelve=window.open(url,'Ventana - '+id, 'menubar=no, scrollbars=yes, statusbar=no, tittlebar=yes, width=40, height=40');
    devuelve.blur();
  }
  return devuelve;
}

/* Preparado para futuras versiones...

function usarModoGM(id,url) {
  GM.openInTab(url,true);
}

function usarIframe(id,url) {
  $('div#iframes').append('<iframe style="display:none;" id="'+id+'" src="'+url+'">Error: Tu navegador no soporta iframes.</iframe>');
}

function usarObject(id,url) {
  $('div#Object').append('<object style="display:none;" id="'+id+'" data="'+url+'" type="text/html">Error: Tu navegador no soporta object.</object>');
}

function usarEmbed(id,url) {
  $('div#embed').append('<embed style="display:none;" id="'+id+'" src="'+url+'"/>');
}

*/
