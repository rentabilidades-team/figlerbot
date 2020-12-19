async function iniciarBot() {
    if(window.location.pathname=='/autosurf/session'){
        if($("body").html().indexOf('target="_blank"')>=0){}else{$(document).ready(function(){try{window.close();}catch(e){}});}
    }
}
iniciarBot();
