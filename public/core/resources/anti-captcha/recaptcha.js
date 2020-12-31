function anti_recaptcha(num) {
    var lugarclick,estado,unclick;

    estado=false;unclick=1;
    var x = document.querySelectorAll('.g-recaptcha');
    if(x.length>=0){
        console.log('Recaptcha no detectado.');
    }
    else{
        var x = document.querySelectorAll('textarea#g-recaptcha-response.g-recaptcha-response');
        if(x.length==0){
        console.log('Error: No se ha encontrado la respuesta de recaptcha.');
        }
        else{
        lugarclick=document.querySelectorAll('div.recaptcha-checkbox-border');
        while (estado==false){
            if(x[num].value==''){
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
}

export {anti_recaptcha};
