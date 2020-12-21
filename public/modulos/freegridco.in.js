async function iniciarBot() {
    setInterval(function(){
        if($("input#roll_button").is(":visible")==true){
            try {do_free_roll();}catch(e) {}
        }else{if($("p#roll_wait_text").is(":visible")==true){cerrar_modulo();}}
    },3000);
}
iniciarBot();
