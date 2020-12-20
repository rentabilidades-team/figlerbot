async function iniciarBot() {
    import('https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js');
    if(window.location.pathname.indexOf("/my-tickets")>=0){
        if($('form > button:submit').is(':visible')==true){
            $('form > button:submit').click();
            $('form > button:submit').hide();
        }else{$(document).ready(function(){try{window.close();}catch(e){}});}
    }
}
iniciarBot();
