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
    <td style="background-color: grey;text-align: right;">\
    <div id="bot-status" style="height: 20px; width: 20px; background-color: red; border-radius: 50%; display: inline-block; vertical-align: middle;"> </div>\
    </td>\
    </tr>\
    <tr>\
    <td style="width: 100%;" colspan="2"><input id="bot-start" style="width: 100%;" type="button" value="'+btnstartstopbot+'"></td>\
    </tr>\
    </tbody>\
    </table>';
}

export {control};
