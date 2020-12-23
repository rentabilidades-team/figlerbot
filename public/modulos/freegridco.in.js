async function iniciar_modulo(global) {
    setInterval(function(){
        if($("input#roll_button").is(":visible")==true){
            try {do_free_roll();}catch(e) {}
        }else{if($("p#roll_wait_text").is(":visible")==true){global.cerrar_modulo();}}
    },3000);
}
module.exports = {iniciar_modulo};
