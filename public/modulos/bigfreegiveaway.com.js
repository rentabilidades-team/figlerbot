async function iniciar_modulo() { 
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        click('form > button');
        cerrar_modulo();
    }
}
iniciar_modulo();
