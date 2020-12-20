function importarScript(nombre, callback) {var s = document.createElement("script");s.onload = callback;s.src = nombre;document.querySelector("head").appendChild(s);}
async function iniciarBot() {
    importarScript('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js');
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        if($('form > button:submit').is(':visible')==true){
            $('form > button:submit').click();
            $('form > button:submit').hide();
        }else{$(document).ready(function(){try{window.close();}catch(e){}});}
    }
}
iniciarBot();
