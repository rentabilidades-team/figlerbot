let global = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
if(global.obtener_get('importar')==1){
    if(window.location.pathname.indexOf('/en/account/log/')>=0){
        location.replace('//'+global.dominio_base()+'/payeer?payeerid='+$('a#PayeerAccount').attr('data-clipboard-text').trim());
    }
}
