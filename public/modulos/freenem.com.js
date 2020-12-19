async function iniciarBot() {
	if(window.location.pathname=="/"){
        if($("button.main-button.main-button-yellow.login.bg-3").is(':visible')==true){$("button.main-button.main-button-yellow.login.bg-3").click();}
    }
    if(window.location.pathname.indexOf("/free")>=0){
        setInterval(function(){
            if($("button.main-button-2.roll-button.bg-2").is(':visible')==true){$("button.main-button-2.roll-button.bg-2").click();$("button.main-button-2.roll-button.bg-2").hide();}else{if($("div > div.minutes").is(':visible')==true){$(document).ready(function(){try{window.close();}catch(e){}});}else{location.reload(true);}}
        },10000);
    }
}
iniciarBot();
