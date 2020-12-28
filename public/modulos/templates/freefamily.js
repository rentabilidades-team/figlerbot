// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

function crear_cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function obtener_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function obtenerMonedas() {
    if ($("button.main-button-2.roll-button.bg-2").is(':visible') == true) {
        $("button.main-button-2.roll-button.bg-2").click();
        $("button.main-button-2.roll-button.bg-2").hide();
    }
}

async function template() {
    await timer(5000);

    /*AutoLogin*/
    if (window.location.pathname == "/") {
        if ($('input[type=email]:first').val() != '' && $('input[type=password]:first').val() != '') {
            $("button.main-button.main-button-yellow.login.bg-3").click();
        }
    }

    /*AutoClaim*/
    if (window.location.pathname.indexOf("/free") >= 0) {
        obtenerMonedas();
        await timer(10000);
        if (obtener_cookie("free-roll") < 8) {
            if (!obtener_cookie("free-roll")) {crear_cookie("free-roll", 0, 1);}
            let i = obtener_cookie("free-roll");
            var codes = ["lytovoap04", "ykxlvmg9ja", "vmuph8j0c6", "aeyt2qb7xw", "d8fmqxjlma", "x4diftkhjz", "6qxmhamnd3", "pc2w277bm2"]
            window.location='/promotion/' + codes[i]
        }else{
        	obtenerMonedas();
        	if ($("div > div.minutes").is(':visible') == true) {cerrar_modulo();}
        }
    }

    /*AutoFreeRolls*/
    if (window.location.pathname.indexOf("/promotion") > -1) {
        let i = obtener_cookie("free-roll");
        crear_cookie("free-roll", ++i, 1)
        await timer(2000);
        window.location='/free';
    }
}

export {
    template
};
