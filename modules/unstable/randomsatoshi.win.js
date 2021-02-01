import {
  load_wait,
  close_module,
} from "../../core/resources/unstable/libglobal.js";

async function iniciar_modulo() {
  if (window.location.pathname.indexOf("/autofaucet/claims.php") >= 0) {
    close_module();
  }
}

load_wait(iniciar_modulo());
