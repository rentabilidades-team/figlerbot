async function iniciar_modulo(global) {
    if(window.location.pathname.indexOf('/autofaucet/claims.php')>=0){
        global.cerrar_modulo();
    }
}
export {iniciar_modulo};
