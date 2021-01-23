function f_get(nombre) {
    if (nombre == null) { console.log('Error: form_get(nombre); El valor nombre es null.'); } else {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == nombre) {
                return decodeURIComponent(pair[1]);
            }
        }
        return '';
    }
}

export {f_get};