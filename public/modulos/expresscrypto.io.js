async function iniciar_modulo() {
    if(obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/dashboard')>=0){
            location.replace('//'+dominio_base()+'/expresscrypto?ecid='+$('u#copyIdTarget.glow').html().trim());
        }
    }
}
iniciar_modulo();