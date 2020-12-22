let importarglobal = await import('https://cdn.rawgit.org/universales.gitlab.io/rentabilidades-team/core/global.js');
async function iniciarBot() {
    setInterval(function(){
        if(window.location.pathname=="/"){
            if($('input[type=email]:first').val()!='' && $('input[type=password]:first').val()!=''){$("button.main-button.main-button-yellow.login.bg-3").click();}
        }
        if(window.location.pathname.indexOf("/free")>=0){
                if($("button.main-button-2.roll-button.bg-2").is(':visible')==true){
                    $("button.main-button-2.roll-button.bg-2").click();$("button.main-button-2.roll-button.bg-2").hide();
                }else{
                    if($("div > div.minutes").is(':visible')==true){
                        importarglobal.cerrar_modulo();
                    }else{
                        location.reload(true);
                    }
                }
        }
    },10000);
}
iniciarBot();
