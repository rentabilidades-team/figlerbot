import * as libglobal from "../../core/libglobal.js";

async function template() {

    /*AutoLogin*/
    if (window.location.pathname == "/") {
        if ($('input[type=email]:first').val() != '' && $('input[type=password]:first').val() != '') {
            libglobal.click("button.main-button.main-button-yellow.login.bg-3")
        }
    }

    function esperar_reloj() {
        if (!$("div > div.minutes").is(':visible') == true) {
            setTimeout(esperar_reloj, 1000);
        } else {
            if (libglobal.obtener_cookie("freeroll") < 8) {
                if (!libglobal.obtener_cookie("freeroll")) {
                    libglobal.crear_cookie("freeroll", 0);
                }
                console.log("Hay posibilidades de obtener tiros gratis.");
                let i = libglobal.obtener_cookie("freeroll");
                var codes = ["lytovoap04", "ykxlvmg9ja", "vmuph8j0c6", "aeyt2qb7xw", "d8fmqxjlma", "x4diftkhjz", "6qxmhamnd3", "pc2w277bm2"];
                window.location = '/promotion/' + codes[i];
            } else {
                libglobal.cerrar_modulo();
            }
        }
    }

    /*AutoClaim*/
    if (window.location.pathname.indexOf("/free") >= 0) {
        libglobal.espera(5000);
        libglobal.click("button.main-button-2.roll-button.bg-2");
        esperar_reloj();
    }

    /*AutoFreeRolls*/
    if (window.location.pathname.indexOf("/promotion") > -1) {
        let i = libglobal.obtener_cookie("freeroll");
        libglobal.crear_cookie("freeroll", ++i, 1);
        libglobal.espera(2000);
        window.location = '/free';
    }
}

export {
    template
};
