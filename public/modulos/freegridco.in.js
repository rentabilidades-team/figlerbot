async function iniciarBot() {
    setInterval(function(){
        if($("input#roll_button").is(":visible")==true){
            try {do_free_roll();}catch(e) {}
        }else{if($("p#roll_wait_text").is(":visible")==true){$(document).ready(function(){try{window.close();}catch(e){}});}}
    },3000);
}
iniciarBot();
