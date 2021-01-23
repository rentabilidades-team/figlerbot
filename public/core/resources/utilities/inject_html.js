function inject_html(identificador, texto, masivo) {
    var x, i;
    if (texto == null) {
        console.log('Error: insert(identificador,texto); El valor texto es null.');
        texto = '';
    }
    if (masivo == null) { masivo = false; }
    x = document.querySelectorAll(identificador);
    if (x.length == 0) { console.log('Error: insert(identificador,texto); No se pudo encontrar el elemento ' + identificador + ' .'); } else {
        if (masivo == false) {
            x[0].insertAdjacentHTML("afterbegin", texto);
        } else {
            for (i = 0; i < x.length; i++) {
                x[i].insertAdjacentHTML("afterbegin", texto);
            }
        }
    }
}

export {inject_html};