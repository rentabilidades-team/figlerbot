import * as libglobal from "https://cors-anywhere.herokuapp.com/universales.gitlab.io/rentabilidades-team/core/libglobal.js";

function obtenerMonedas() {
    if ($("button.main-button-2.roll-button.bg-2").is(':visible') == true) {
        $("button.main-button-2.roll-button.bg-2").click();
        $("button.main-button-2.roll-button.bg-2").hide();
    }
}

async function template() {
    espera(2000);

    /*AutoLogin*/
    if (window.location.pathname == "/") {
        if ($('input[type=email]:first').val() != '' && $('input[type=password]:first').val() != '') {
            $("button.main-button.main-button-yellow.login.bg-3").click();
        }
    }

    /*AutoClaim*/
    if (window.location.pathname.indexOf("/free") >= 0) {
        obtenerMonedas();
        espera(8000);
        if (obtener_cookie("free-roll") < 8) {
            if (!obtener_cookie("free-roll")) {
                crear_cookie("free-roll", 0, 1);
            }
            let i = obtener_cookie("free-roll");
            var codes = ["lytovoap04", "ykxlvmg9ja", "vmuph8j0c6", "aeyt2qb7xw", "d8fmqxjlma", "x4diftkhjz", "6qxmhamnd3", "pc2w277bm2"]
            window.location='/promotion/' + codes[i]
        }else{
        	obtenerMonedas();
        	if ($("div > div.minutes").is(':visible') == true) {
                cerrar_modulo();
            }
        }
    }

    /*AutoFreeRolls*/
    if (window.location.pathname.indexOf("/promotion") > -1) {
        let i = obtener_cookie("free-roll");
        crear_cookie("free-roll", ++i, 1)
            espera(2000);
        window.location='/free';
    }
}
export {template};
