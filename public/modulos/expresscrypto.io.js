let importarglobal = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
if(importarglobal.obtener_get('importar')==1){
    if(window.location.pathname.indexOf('/dashboard')>=0){
        location.replace('//'+importarglobal.dominio_base()+'/expresscrypto?ecid='+$('u#copyIdTarget.glow').html().trim());
    }
}
