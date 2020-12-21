if(global.obtenerget('importar')==1){
    if(window.location.pathname.indexOf('/dashboard')>=0){
        location.replace('//'+global.dominiobase()+'/expresscrypto?ecid='+$('u#copyIdTarget.glow').html().trim());
    }
}
