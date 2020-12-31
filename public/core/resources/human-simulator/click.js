function click_humano(identificador) {
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
      return true;
    }else{return false;}
  }
}

export {click_humano};
