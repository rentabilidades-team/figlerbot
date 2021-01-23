function hide_html(identificador, masivo) {
    var x, i;
    if (masivo == null) { masivo = true; }
    x = document.querySelectorAll(identificador);
    if (x.length == 0) { console.log('Error: hide(identificador); No se pudo encontrar el elemento ' + identificador + ' .'); } else {
        if (masivo == false) {
            x[0].style.display = "none";
        } else {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
        }
    }
}

export {hide_html};
