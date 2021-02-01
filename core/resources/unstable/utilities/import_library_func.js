function import_library_func(url, callback, tipo) {
    if (tipo == null) { tipo = 'text/javascript'; }
    if (url == null) { console.log('Error: import_library(url,callback); El valor url es null.'); } else {
        var s = document.createElement("script");
        if (callback != null) { s.onload = callback; }
        s.type = tipo;
        s.src = url;
        document.querySelector("head").appendChild(s);
    }
}

export {import_library_func};
