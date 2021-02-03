var url_source;

function get_branch() {
  if(document.currentScript.location.pathname.search("unstable")>0){
    return 'unstable';
  }else{
    return 'stable';
  }
}
url_source=get_branch();
url_source="../../../core/resources/"+url_source+"/libglobal.js":

import {
  click,
  wait,
  get_cookie,
  add_cookie,
  close_module,
  anti_captcha,
} from url_source;

async function template() {
  /*AutoLogin*/
  if (window.location.pathname == "/") {
    if (
      $("input[type=email]:first").val() != "" &&
      $("input[type=password]:first").val() != ""
    ) {
      click("button.main-button.main-button-yellow.login.bg-3");
    }
  }

  function esperar_reloj() {
    if (!$("div > div.minutes").is(":visible") == true) {
      setTimeout(esperar_reloj, 1000);
      //await wait(1000);
    } else {
      if (get_cookie("freeroll") < 8) {
        if (!get_cookie("freeroll")) {
          add_cookie("freeroll", 0);
        }
        console.log("Hay posibilidades de obtener tiros gratis.");
        let i = get_cookie("freeroll");
        var codes = [
          "lytovoap04",
          "ykxlvmg9ja",
          "vmuph8j0c6",
          "aeyt2qb7xw",
          "d8fmqxjlma",
          "x4diftkhjz",
          "6qxmhamnd3",
          "pc2w277bm2",
        ];
        window.location = "/promotion/" + codes[i];
      } else {
        close_module();
      }
    }
  }

  /*AutoClaim*/
  if (window.location.pathname.indexOf("/free") >= 0) {
    //anti_captcha();
    click("button.main-button-2.roll-button.bg-2");
    esperar_reloj();
  }

  /*AutoFreeRolls*/
  if (window.location.pathname.indexOf("/promotion") > -1) {
    let i = get_cookie("freeroll");
    add_cookie("freeroll", ++i, 1);
    await wait(2000);
    window.location = "/free";
  }
}

export { template };
