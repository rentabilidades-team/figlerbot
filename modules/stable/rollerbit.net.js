import {
  load_wait,
  close_module,
} from "../../core/resources/stable/libglobal.js";

async function iniciar_modulo() {
  if (window.location.pathname == "/backoffice/freeroll") {
    setInterval(function () {
      if ($("button#start-roll").is(":visible") == true) {
        try {
          $("button#start-roll").click();
        } catch (e) {}
      } else {
        close_module(true);
      }
    }, 5000);
  }
  if (window.location.pathname == "/backoffice/rollerbox") {
    setInterval(function () {
      if (
        $(
          "div#box-card-0 > div > div:nth-child(2) > div > div > div > button"
        ).is(":visible") == true
      ) {
        $("#useFreeboxModal > div > div > form").submit();
      } else {
        window.location.href = window.location.href.replace(
          "rollerbox",
          "freeroll"
        );
      }
    }, 5000);
  }
}

load_wait(iniciar_modulo());
