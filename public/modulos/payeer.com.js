let importarglobal = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
if(importarglobal.obtener_get('importar')==1){
    if(window.location.pathname.indexOf('/en/account/log/')>=0){
        location.replace('//'+importarglobal.dominio_base()+'/payeer?payeerid='+$('a#PayeerAccount').attr('data-clipboard-text').trim());
    }
}
