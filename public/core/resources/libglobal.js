const domain = 'rentabilidadesweb.runkodapps.com';

/* Number random*/
import {random_numbers} from "./random/number.js";

/* Form Get*/
import {f_get} from "./form/get.js";

/* Human-simulator */
import {click_human} from "./human-simulator/click.js";

/* Captcha */
import {anti_hcaptcha} from "./anti-captcha/hcaptcha.js";
import {anti_recaptcha} from "./anti-captcha/recaptcha.js";

/* Cookies */
import {add_cookies} from "./cookies/add_cookies.js";
import {get_cookies} from "./cookies/get_cookies.js";

/* Utilities */
import {obtain_val} from "./utilities/obtain_val.js";
import {insert_val} from "./utilities/insert_val.js";
import {import_library_func} from "./utilities/import_library_func.js";
import {hide_html} from "./utilities/hide_html.js";
import {inject_html} from "./utilities/inject_html.js";



function base_domain() { return domain; } // Provides the basis for the project

/*The following example allows you to waitr a time to perform an action.
  Example:await wait(1000); // Wait 1 second
*/
function wait(ms) {
    if (ms == null) { console.log('Error: wait(ms); El valor ms es null'); } else {
        try { ms = parseInt(ms); } catch (e) { console.log(e); }
        return new Promise(function(resolve) {
            setTimeout(resolve, ms);
        });
    }
}

/*The following example allows you to execute a script when loading the page.
  Example: load_wait(function());
  function function() {
      // Here the script
  }
*/
function load_wait(funcion) {
    if (funcion == null) { console.log('Error: load_wait(funcion); El valor funcion es null'); } else {
        window.onload = function() { funcion };
    }
}

/*The following example allows you to generate a random number.
    Example: var num=random_number(1,5); // return a random number between number 1 and 5
*/
function random_number(min, max) {
    return random_numbers(min, max);
}

/*The following example allows you to import libraries into the module. 
    import_library('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/modulos/templates/freefamily.js'); //Import the template of a module.
  Important: IMPORTING EXTERNAL LIBRARIES IN MODULES IS NOT RECOMMENDED.
  The following example allows you to import libraries into the module, and get information from them.
    Example: import_library('_COPY17@3/dist/jquery.min.js',function()); //Import Jquery
    function function() {
      // Here I can use jquery
    }
  By default 'text/javascript' is imported, it is also possible to change the type of script to be imported...
    Example: import_library('_COPY17@3/dist/jquery.min.js',function(),'module'); //I import Jquery as module
    function function() {
      // Here I can use jquery
    }
*/
function import_library(url, callback, tipo) {
    import_library_func(url, callback, tipo);
}

/*The following example allows you to make a click with human simulation.
    Example: click('button#id-del-boton.class-del-boton.otra-class-del-boton'); // returns true if you click, false if you don't.
*/
function click(identificador) {
    click_human(identificador);
}

/*Obtain the value of a web element.
    Example: var dato=obtain('input#id-del-input.class-del-input.otra-class-del-input','val');
  You can also obtain your complete html...
    Example: var dato=obtain('input#id-del-input.class-del-input.otra-class-del-input','html');
*/
function obtain(identificador, tipo) {
    return obtain_val(identificador, tipo);
}

/*Enter a value for a web element.
    Example: insert('input#id-del-input.class-del-input.otra-class-del-input','Text inserted in the web input');
  If you want to insert the value massively to all elements, you can add "true".
    Example: insert('input','Text inserted in all web inputs',true);
*/
function insert(identificador, texto, masivo) {
    insert_val(identificador, texto, masivo);
}

/*The following example allows you to inject an element into the web.
    Example: inject('form#id-del-form.class-del-form.otra-class','<input type="hidden" name="nombre" value="1">');
  If you want to inject the value massively to all elements, you can add "true".
    Example: inject('form','<input type="hidden" name="name" value="1">',true); //Inverted in all forms
*/
function inject(identificador, texto, masivo) {
    insert_html(identificador, texto, masivo);
}

/*The following example allows you to add an event to the page.
    Example: add_event(window, 'load', function(){funcion()});
    function function() {
          // Here the script
    }
*/
function add_event(elemento, evento, funcion) {
    if (elemento.addEventListener) {
        elemento.addEventListener(evento, funcion, false);
    } else {
        if (elemento.attachEvent) {
            elemento.attachEvent('on' + evento, funcion);
        }
    }
}

/*The following example allows you to hide or conceal web content.
    Example: hide('div#id-del-div.class-del-div.otra-class-del-div');
  If you only want to hide the first content of the website, you can add "false".
    Example: hide('div#id-del-div.class-del-div.otra-class-del-div',false);
*/
function hide(identificador, masivo) {
    hide_html(identificador, masivo);
}

/*The following example allows you to close your module.
    Example: close_module();
  If the previous method doesn't work you can force the closing of the module.
    Example: close_module(true);
*/
function close_module(valor) {
    setInterval(function() {
        if (document.readyState === "complete") { //Página cargada completamente
            if (valor == null) { valor = false; }
            if (valor == false) { try { window.close(); } catch (e) { console.log(e); } }
            if (valor == true) { window.location.href = '//' + domain + '/tarea-finalizada'; }
        }
    }, 500);
}

/*The following example allows you to get any "get" variable from the url.
    URL: https://example.com/?hola=1
    Example: var data = form_get('hello'); // You receive the 1 of the url
*/
function form_get(nombre) {
    return f_get(nombre);
}

/*The following example allows you to save a data in the browser.
    Example: manage_browser_data(0,'dato1','data value 1'); //Save 'dato1' and the 'data value 1
  The following example allows you to obtain a data in the browser.
    Example: var information=manage_browser_data(1,'dato1'); //Obtain 'data value 1
  The following example allows you to delete a data in the browser.
    Example: manage_browser_data(2, 'dato1'); // Delete 'dato1' and the 'dato1 value' from the browser.
*/

function manage_browser_data(accion, nombre, valor) { //Accion (0 obtener dato del navegador, 1 guardar dato en el navegador, 2 borrar dato del navegador)
    if (accion == null) { console.log('Error: manage_browser_data(accion,nombre,valor); El valor accion es null.'); } else {
        try { accion = parseInt(accion); } catch (e) { console.log(e); }
        if (accion == 0) {
            if (nombre == null || valor == null) { console.log('Error: manage_browser_data(1,nombre,valor); El valor nombre o valor es null.'); } else {
                GM.setValue(nombre, valor);
            }
        }
        if (accion == 1) {
            var getdato = GM.getValue(nombre);
            if (getdato == null) { console.log('Error: manage_browser_data(0,nombre,valor); El valor nombre es null.'); } else { return getdato; }
        }
        if (accion == 2) {
            if (nombre == null) { console.log('Error: manage_browser_data(2,nombre); El valor nombre es null.'); } else {
                GM.deleteValue(nombre);
            }
        }
    }
}

/*The following example allows you to save the data of a module in a simple way.
    Example: save_data_module(1000,100,24); //The bot will wait 1 second to execute the module again, I save '100' of total balance in the account and '24' is the money obtained.
*/
function save_data_module(espera, saldo, ganado) {
    if (espera == null) { console.log('Error: save_data_module(espera,saldo,ganado); El valor espera es null.'); } else {
        var web = location.hostname;
        if (saldo == null) { saldo = (-1); }
        if (ganado == null) { ganado = (-1); }
        try { espera = parseInt(espera); } catch (e) { console.log(e); }
        try { ganado = parseInt(ganado); } catch (e) { console.log(e); }
        try { premio = parseInt(premio); } catch (e) { console.log(e); }
        var objetomodulo = { name: web, wait: espera, balance: balance, reward: ganado };
        web = web.replace('.', '');
        manage_browser_data(0, web, objetomodulo);
    }
}

/*The following example allows you to save a data in a cookie.
    Example: add_cookie('cookie1','valuecookie1'); //Default cookie expiration 1 day.
  You can also edit the expiration time.
    Example: add_cookie('cookie1','valorcookie1',4); //Expiration of the cookie in 4 days.
  The following example allows you to delete a cookie.
    Example: var value=add_cookie('cookie1'); //cookie1 deleted.
*/

function add_cookie(cname, cvalue, exdays) {
    add_cookies(cname, cvalue, exdays);
}

/*The following example allows you to receive the value of a cookie.
    Example: var value=get_cookie('cookie1');
*/
function get_cookie(cname) {
    get_cookies(cname);
}

/*The following example allows you to try to solve the captcha. (Requires the user to install some plug-ins in their browser, Requires import click)
    Example: anti_captcha(); //Intent to solve the first detected captcha
  And if there is more than one captcha in the same url...
    Example: anti_captcha(2); //Intent to solve the second captcha detected
  Currently it works with "hcaptcha", partially it also works with "recaptcha".
*/

function anti_captcha(num) {
    if (document.body.parentElement.innerHTML.search('recaptcha') >= 0 && document.body.parentElement.innerHTML.search('api.js') >= 0) { //Recaptcha detectado
        anti_recaptcha(num);
    }
    if (document.body.parentElement.innerHTML.search('hcaptcha.com') >= 0 && document.body.parentElement.innerHTML.search('api.js') >= 0) { //Hcaptcha detectado
        anti_hcaptcha(num);
    }
}

export { base_domain, wait, load_wait, random_number, import_library, click, obtain, insert, inject, add_event, hide, close_module, form_get, manage_browser_data, save_data_module, add_cookie, get_cookie, anti_captcha };
