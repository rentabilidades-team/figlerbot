/* Archivo a cargar en la web */

import {config} from "./config.js";
import {control} from "./control.js";

if (document.querySelector("div#bot-control")!=null) {
    control();
}
if (document.querySelector("div#bot-config")!=null) {
    config();
}


