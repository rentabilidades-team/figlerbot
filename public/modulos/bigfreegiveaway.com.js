async function iniciar_modulo(global) { 
    global.importar_libreria('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js',final);//Importo Jquery
    async function final() {
        if(window.location.pathname.indexOf("/my-tickets")>=0){
            if($('form > button:submit').is(':visible')==true){
                $('form > button:submit').click();
                $('form > button:submit').hide();
            }else {
            global.cerrar_modulo();
            }
        }
    }
}
module.exports = {iniciar_modulo};
