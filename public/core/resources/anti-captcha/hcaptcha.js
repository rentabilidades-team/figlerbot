function anti_hcaptcha(num) {
  var lugarclick,estado,unclick;

  estado=false;unclick=1;
  var x = document.querySelectorAll('div#checkbox.checkbox');
  if(x.length>=0){
    console.log('Hcaptcha no detectado.');
  }
  else{
    var x = document.querySelectorAll('div#checkbox.checkbox.checked');
    lugarclick=document.querySelectorAll('div#checkbox.checkbox');
    while (estado==false){
      if(x.length==0){
        if(unclick==1){
              try{click(lugarclick[num]);}catch(e){console.log(e);}//Realizar click humano
        }
        estado=false;//Captcha no resuelto
        unclick++;
      }
      else{
        estado=true;//Captcha resuelto
      }
    }
  }
}

export {anti_hcaptcha};
