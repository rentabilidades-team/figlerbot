/* Interfaz para iniciar o detener el bot */
import {btnstartstopbot} from "../../lang/es.js";

function control() {
    document.getElementById('control').innerHTML='\
    <table style="width: 100%; border: 1px solid grey;">\
    <tbody>\
    <tr>\
    <td style="background-color: grey;">\
    <strong>Ultra Bot Plus</strong>\
    </td>\
    <td class="align-right" style="width: 33.3333%; background-color: grey;">\
    <div id="iconoestado" style="height: 20px; width: 20px; background-color: red; border-radius: 50%; display: inline-block; vertical-align: middle;"> </div>\
    </td>\
    </tr>\
    <tr>\
    <td style="width: 100%;" colspan="3"><input id="btnstartstopbot" style="width: 100%;" type="button" value="'+btnstartstopbot+'"></td>\
    </tr>\
    </tbody>\
    </table>';
}

export {control};
