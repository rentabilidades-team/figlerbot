async function iniciar_modulo(global) {
    if(global.obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/dashboard')>=0){
            location.replace('//'+global.dominio_base()+'/expresscrypto?ecid='+$('u#copyIdTarget.glow').html().trim());
        }
    }
}
export {iniciar_modulo};
