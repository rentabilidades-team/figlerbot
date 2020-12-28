import * as libglobal from "https://cors-anywhere.herokuapp.com/universales.gitlab.io/rentabilidades-team/core/libglobal.js";

async function template() {
    libglobal.espera(2000);

    /*AutoLogin*/
    if (window.location.pathname == "/") {
        if ($('input[type=email]:first').val() != '' && $('input[type=password]:first').val() != '') {
            $("button.main-button.main-button-yellow.login.bg-3").click();
        }
    }

    /*AutoClaim*/
    if (window.location.pathname.indexOf("/free") >= 0) {
        click("button.main-button-2.roll-button.bg-2")
        libglobal.espera(8000);
        if (libglobal.obtener_cookie("free-roll") < 8) {
            if (!libglobal.obtener_cookie("free-roll")) {
                libglobal.crear_cookie("free-roll", 0);
            }
            let i = libglobal.obtener_cookie("free-roll");
            var codes = ["lytovoap04", "ykxlvmg9ja", "vmuph8j0c6", "aeyt2qb7xw", "d8fmqxjlma", "x4diftkhjz", "6qxmhamnd3", "pc2w277bm2"]
            window.location='/promotion/' + codes[i]
        }else{
        	click("button.main-button-2.roll-button.bg-2")
        	if ($("div > div.minutes").is(':visible') == true) {
                libglobal.cerrar_modulo();
            }
        }
    }

    /*AutoFreeRolls*/
    if (window.location.pathname.indexOf("/promotion") > -1) {
        let i = libglobal.obtener_cookie("free-roll");
        libglobal.crear_cookie("free-roll", ++i, 1)
            libglobal.espera(2000);
        window.location='/free';
    }
}
export {template};
