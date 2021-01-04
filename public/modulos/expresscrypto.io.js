import { load_wait, form_get, base_domain, obtain } from "../core/resources/libglobal.js";

async function iniciar_modulo() {
    if (form_get('importar') == 1) {
        if (window.location.pathname.indexOf('/dashboard') >= 0) {
            location.replace('//' + base_domain() + '/expresscrypto?ecid=' + obtain('u#copyIdTarget.glow', 'val'));
        }
    }
}

load_wait(iniciar_modulo());