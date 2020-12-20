/* Funciones Base */

function modulo(id, direccionurl, segundosdeespera) {
  this.id = id;
  this.direccionurl = direccionurl;
  this.segundosdeespera = segundosdeespera;   
}

var modulos = [];

function crearModulo(direccionurl,segundosdeespera) {
  var modulo = new modulo(modulos.length + 1,direccionurl,segundosdeespera);
  modulos.push(modulo);
}

function mostrarModulos(){
  var lista='';
  for(var i=0; i<modulos.length; i++){
    lista+= 'id: ' + modulos[i].id +
      ' direccionurl: ' + modulos[i].direccionurl + 
      ' segundosdeespera: ' + modulos[i].segundosdeespera + '\n';
  }
  console.log(lista);
}

function obtenCantidadTotalDeModulos(){return modulos.length;}

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
