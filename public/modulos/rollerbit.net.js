let global = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
async function iniciarBot() {
    if(window.location.pathname=='/backoffice/freeroll'){
        setInterval(function(){
            if($('button#start-roll').is(':visible')==true){
                try{$('button#start-roll').click();}catch(e){}
            }else{
                global.cerrar_modulo(1);
            }
        },5000);
    }
    if(window.location.pathname=='/backoffice/rollerbox'){
        setInterval(function(){
            if($('div#box-card-0 > div > div:nth-child(2) > div > div > div > button').is(':visible')==true){
                $('#useFreeboxModal > div > div > form').submit();
            }else{
                window.location.href=window.location.href.replace("rollerbox", "freeroll");
            }
        },5000);
    }
}
iniciarBot();
