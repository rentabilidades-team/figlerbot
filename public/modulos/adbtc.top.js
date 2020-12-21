async function iniciarBot() {
    if(window.location.pathname=='/autosurf/session'){
        if(document.body.innerHTML.search('target="_blank"')<0){$(document).ready(function(){try{window.close();}catch(e){}});}
    }
}
iniciarBot();
