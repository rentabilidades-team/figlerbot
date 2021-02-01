import {
  load_wait,
  form_get,
  base_domain,
  obtain,
} from "../../core/resources/stable/libglobal.js";

async function iniciar_modulo() {
  if (form_get("importar") == 1) {
    if (window.location.pathname.indexOf("/en/account/log/") >= 0) {
      location.replace(
        "//" +
          base_domain() +
          "/payeer?payeerid=" +
          obtain("#btn-account > b")
            .replace(/<[^>]*>?/gm, "")
            .trim()
      ); //Revisar
    }
  }
}

load_wait(iniciar_modulo());
