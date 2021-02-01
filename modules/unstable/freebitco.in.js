import {
  load_wait,
  click,
  close_module,
} from "../../core/resources/unstable/libglobal.js";

async function iniciar_modulo() {
  setInterval(function () {
    click("input#free_play_form_button");
    close_module();
  }, 5000);
}

load_wait(iniciar_modulo());
