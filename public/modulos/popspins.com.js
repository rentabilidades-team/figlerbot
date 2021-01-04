import { load_wait, click, random_number, close_module } from "../core/resources/libglobal.js";

async function iniciar_modulo() {
    setInterval(function() {
        if ($('div[class^="_"]').length > 0) { $('div[class^="_"]').click(); } //Cierra la publicidad inicial
        if ($('span#spins').html() != 0) {
            if ($('input#playFancy').is(':enabled') == true && $('input#playFancy').is(':visible') == true && $('input#playFancy').val() == '' || $('input#playFancy').val() == 'Play') { click('input#playFancy'); }
            var numaleatorio;
            if ($('div#100redblackwrapper').is(':visible') == true) {
                numaleatorio = random_number(1, 2);
                if (numaleatorio == 1) { open_case('red'); } else { open_case('black'); }
                $('div#100redblackwrapper').hide();
            }
            if ($('div#100chestswrapper').is(':visible') == true) {
                numaleatorio = random_number(1, 3);
                openChest(numaleatorio);
                $('div#100chestswrapper').hide();
            }
            if ($('div#runModal > div > div > div.modal-header > a > span').is(':visible') == true) {
                click('div#runModal > div > div > div.modal-header > a > span');
            }
        } else {
            if ($('div#claimouter').is(':visible') == true) {
                click('div#claimouter > a#requestdaily');
            } else {
                close_module();
            }
        }
    }, 5000);
}

load_wait(iniciar_modulo());