function f_save_data_module(espera, saldo, ganado) {
    if (espera == null) { console.log('Error: save_data_module(espera,saldo,ganado); El valor espera es null.'); } else {
        var web = location.hostname;
        if (saldo == null) { saldo = (-1); }
        if (ganado == null) { ganado = (-1); }
        try { espera = parseInt(espera); } catch (e) { console.log(e); }
        try { ganado = parseInt(ganado); } catch (e) { console.log(e); }
        try { premio = parseInt(premio); } catch (e) { console.log(e); }
        var objetomodulo = { name: web, wait: espera, balance: balance, reward: ganado };
        web = web.replace('.', '');
        manage_browser_data(0, web, objetomodulo);
    }
}

export {f_save_data_module};
