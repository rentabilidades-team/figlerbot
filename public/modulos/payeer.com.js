function obtenvariable(variable) {var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0; i < vars.length; i++) {var pair = vars[i].split("=");if(pair[0] == variable) {return decodeURIComponent(pair[1]);}}return '';}

if(obtenvariable('importar')==1){
    if(window.location.pathname.indexOf('/en/account/log/')>=0){
        location.replace('//'+urlbase+'/payeer?payeerid='+$('a#PayeerAccount').attr('data-clipboard-text').trim());
    }
}
