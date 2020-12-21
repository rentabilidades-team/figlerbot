async function iniciarBot() {
    if(window.location.pathname.indexOf('/autofaucet/claims.php')>=0){
        cerrar_modulo();
    }
}
iniciarBot();
