function add_cookies(cname, cvalue, exdays) {
    if (cname == null) { console.log('Error: add_cookie(cname,cvalue); El valor cname es null.'); } else {
        if (cvalue == null) { exdays = 0; }
        if (exdays == null) { exdays = 1; }
        try { exdays = parseInt(exdays); } catch (e) { console.log(e); }
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}

export {add_cookies};
