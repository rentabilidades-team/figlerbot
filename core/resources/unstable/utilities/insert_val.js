function insert_val(identificador, texto, masivo) {
    var x, i;
    if (texto == null) {
        console.log('Error: insert(identificador,texto); El valor texto es null.');
        texto = '';
    }
    if (masivo == null) { masivo = false; }
    x = document.querySelectorAll(identificador);
    if (x.length == 0) { console.log('Error: insert(identificador,texto); No se pudo encontrar el identificador ' + identificador + ' .'); } else {
        if (masivo == false) {
            x[0].value = texto;
        } else {
            for (i = 0; i < x.length; i++) {
                x[i].value = texto;
            }
        }
    }
}

export {insert_val};
