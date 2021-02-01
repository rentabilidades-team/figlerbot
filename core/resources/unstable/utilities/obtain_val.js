
function obtain_val(identificador, tipo) {
    var x, i;
    if (tipo == null) { tipo = 'html'; }
    x = document.querySelectorAll(identificador);
    if (x.length == 0) { console.log('Error: obtain(identificador,texto); No se pudo encontrar el identificador ' + identificador + ' .'); } else {
        if (tipo == 'html') { return x[0].outerHTML.trim(); }
        if (tipo == 'val') {
            if (x[0].innerText != '') {
                return x[0].innerText.trim();
            } else {
                return x[0].value.trim();
            }
        }
    }
}

export {obtain_val};
