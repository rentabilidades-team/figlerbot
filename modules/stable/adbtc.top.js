import {
  load_wait,
  close_module,
} from "../../core/resources/stable/libglobal.js";

async function iniciar_modulo() {
  if (window.location.pathname == "/autosurf/session") {
    if (document.body.innerHTML.search('target="_blank"') < 0) {
      close_module();
    }
  }
}

load_wait(iniciar_modulo());
