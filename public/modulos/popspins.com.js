async function iniciar_modulo(global) {
    setInterval(function(){
        if($('div[class^="_"]').length > 0){$('div[class^="_"]').click();}//Cierra la publicidad inicial
        if($('span#spins').html()!=0){
            if($('input#playFancy').is(':enabled')==true && $('input#playFancy').is(':visible')==true && $('input#playFancy').val()=='' || $('input#playFancy').val()=='Play'){$('input#playFancy:enabled').click();}
            var numaleatorio;
            if($('div#100redblackwrapper').is(':visible')==true){
                numaleatorio=aleatorio(1,2);
                if(numaleatorio==1){open_case('red');}else{open_case('black');}
                $('div#100redblackwrapper').hide();
            }
            if($('div#100chestswrapper').is(':visible')==true){
                numaleatorio=aleatorio(1,3);
                openChest(numaleatorio);
                $('div#100chestswrapper').hide();
            }
            if($('div#runModal > div > div > div.modal-header > a > span').is(':visible')==true){
                $('div#runModal > div > div > div.modal-header > a > span').click();
            }
        }else{
            if($('div#claimouter').is(':visible')==true){
                $('div#claimouter > a#requestdaily')[0].click();
            }else{
                global.cerrar_modulo();
            }
        }
    },5000);
}
module.exports = {iniciar_modulo};
