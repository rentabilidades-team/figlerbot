let global = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
if(global.obtener_get('importar')==1){
    if(window.location.pathname.indexOf('/dashboard')>=0){
        location.replace('//'+global.dominio_base()+'/expresscrypto?ecid='+$('u#copyIdTarget.glow').html().trim());
    }
}
