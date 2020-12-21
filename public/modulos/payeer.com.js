if(global.obtenerget('importar')==1){
    if(window.location.pathname.indexOf('/en/account/log/')>=0){
        location.replace('//'+global.dominiobase()+'/payeer?payeerid='+$('a#PayeerAccount').attr('data-clipboard-text').trim());
    }
}
