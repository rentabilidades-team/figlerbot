async function iniciar_modulo(global) {
    if(global.obtener_get('importar')==1){
        if(window.location.pathname.indexOf('/en/account/log/')>=0){
            location.replace('//'+global.dominio_base()+'/payeer?payeerid='+$('a#PayeerAccount').attr('data-clipboard-text').trim());
        }
    }
}
export default {iniciar_modulo};