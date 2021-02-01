function f_manage_browser_data(accion, nombre, valor) { //Accion (0 obtener dato del navegador, 1 guardar dato en el navegador, 2 borrar dato del navegador)
    if (accion == null) { console.log('Error: manage_browser_data(accion,nombre,valor); El valor accion es null.'); } else {
        try { accion = parseInt(accion); } catch (e) { console.log(e); }
        var info=false;
        if (accion == 0) {
            if (nombre == null || valor == null) { console.log('Error: manage_browser_data(1,nombre,valor); El valor nombre o valor es null.');} else {
                GM.setValue(nombre, valor);info=true;
            }
            return info;
        }
        if (accion == 1) {
            var getdato = GM.getValue(nombre);
            if (getdato == null) { console.log('Error: manage_browser_data(0,nombre,valor); El valor nombre es null.'); } else { info=getdato; }
            return info;
        }
        if (accion == 2) {
            if (nombre == null) { console.log('Error: manage_browser_data(2,nombre); El valor nombre es null.'); } else {
                GM.deleteValue(nombre);info=true;
            }
            return info;
        }
    }
}

export {f_manage_browser_data};
