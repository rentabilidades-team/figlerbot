import {
  load_wait,
  form_get,
  insert,
  inject,
  base_domain,
  close_module,
} from "../../core/resources/stable/libglobal.js";

async function iniciar_modulo() {
  if (window.location.pathname.indexOf("/notimer_fp") >= 0) {
    if (form_get("fpdoge") != null) {
      insert("form > div > input[type=text]", form_get("fpdoge"));
    }
    if (form_get("importar") == 1) {
      inject("form", '<input type="hidden" name="guardarurl" value="1">');
    }
  }
  if (window.location.pathname.indexOf("/notimer_fp/faucet.php") >= 0) {
    if (form_get("guardarurl") == "1") {
      location.replace(
        "//" +
          base_domain() +
          "/modulo-digitask?digitaskurl=" +
          encodeURIComponent(window.location.href)
      );
    } else {
      close_module();
    }
  }
}

load_wait(iniciar_modulo());
