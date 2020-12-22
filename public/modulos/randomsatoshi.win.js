let importarglobal = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
async function iniciarBot() {
    if(window.location.pathname.indexOf('/autofaucet/claims.php')>=0){
        importarglobal.cerrar_modulo();
    }
}
iniciarBot();
