import {
  load_wait,
  click,
  espera,
  close_module,
} from "../../core/resources/stable/libglobal.js";

async function iniciar_modulo() {
  if (window.location.pathname.indexOf("/my-tickets") >= 0) {
    click("form > button");
    espera(5000);
    close_module();
  }
}

load_wait(iniciar_modulo());
