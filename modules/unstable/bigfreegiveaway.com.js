import {
  load_wait,
  click,
  wait,
  close_module,
} from "../../core/resources/unstable/libglobal.js";

async function iniciar_modulo() {
  if (window.location.pathname.indexOf("/my-tickets") >= 0) {
    click("form > button");
    await wait(5000);
    close_module();
  }
}

load_wait(iniciar_modulo());
