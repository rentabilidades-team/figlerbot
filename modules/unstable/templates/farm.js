//El bot mostrado a continuación es un bot "Universal", funciona con todas las webs rusas tipicas de "Juegos de inversión", no está acabado, falta algo de codigo...
if(location.hostname=='goldenmines.biz' || location.hostname=='golden-mines.biz' || location.hostname=='cosmo-sfera.biz' || location.hostname=='me-farm.me' || location.hostname=='money-gnomes.ru' || location.hostname=='money-gnomes.pro' || location.hostname=='wood-man.biz'){
    async function autoclick() {
        var temp=0;
        setInterval(function(){
            if(window.location.pathname=='/'){
                if($(":submit:first").length>0){
                    try{$(":submit:first").click();}catch(e){}
                }else{
                    try{$("form").submit();}catch(e){}
                }
            }

            if(window.location.pathname.indexOf('/login')>=0){
                if($("body").html().indexOf('submit()')>=0){
                    try{$(":button").click();}catch(e){}
                }else{
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                }
            }
            if(window.location.pathname.indexOf('/account')>=0 && window.location.pathname.indexOf('/account/')<0){
                window.location.href=window.location.href+'/store';
            }
            if($("body").html().indexOf('/store')>=0){//Contiene store
                if(window.location.pathname.indexOf('/store')>=0){//Clasico
                    if($('form').length==1){
                        if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                            try{$("form").submit();}catch(e){}
                        }else{
                            try{$(":submit").click();}catch(e){}
                        }
                        if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){
                            window.location.href=window.location.href.replace("store", "market");
                        }
                    }
                    if($('form').length==2){//Ajustar código
                        if(sessionStorage.getItem('paso')==null){
                            if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){sessionStorage.setItem('paso',1);}
                            if($('form:first').attr('action')!='' && $('form:first').attr('action')!='#'){
                                try{$("form:first").submit();}catch(e){}
                            }else{
                                try{$(":submit:first").click();}catch(e){}
                            }
                        }
                        if(sessionStorage.getItem('paso')==1){//Boton segundo
                            if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){sessionStorage.setItem('paso',2);}
                            if($('form:last').attr('action')!='' && $('form:last').attr('action')!='#'){
                                try{$("form:last").submit();}catch(e){}
                            }else{
                                try{$(":submit:last").click();}catch(e){}
                            }
                        }
                        if(sessionStorage.getItem('paso')==2){
                            if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){//Reenvio
                                sessionStorage.removeItem('paso');
                                window.location.href=window.location.href.replace("store", "bonus");
                            }
                        }
                    }
                }
            }
            if($("body").html().indexOf('/market')>=0){//Contiene market
                if(window.location.pathname.indexOf('/market')>=0){
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true){
                        window.location.href=window.location.href.replace("market", "bonus");
                    }
                }
            }
            if($("body").html().indexOf('/bonus')>=0){//Bonos

                if(window.location.pathname.indexOf('bonus')>=0 && window.location.pathname.indexOf('bonus_')<0 && window.location.pathname.indexOf('bonus1')<0 && window.location.pathname.indexOf('bonus2')<0 && window.location.pathname.indexOf('bonus3')<0){//Bono 24h
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus_hour')>=0){
                            window.location.href=window.location.href.replace("bonus", "bonus_hour");
                        }
                        if($("body").html().indexOf('/bonus1h')>=0){
                            window.location.href=window.location.href.replace("bonus", "bonus1h");
                        }else{
                            if($("body").html().indexOf('/bonus1')>=0){
                                window.location.href=window.location.href.replace("bonus", "bonus1");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }

                    }
                }

                if(window.location.pathname.indexOf('/bonus_hour')>=0 || window.location.pathname.indexOf('/bonus1')>=0){//Bono 1h - Bono 1
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus3h')>=0){
                            window.location.href=window.location.href.replace("bonus1h", "bonus3h");
                        }
                        if($("body").html().indexOf('/bonus2h')>=0){
                            window.location.href=window.location.href.replace("bonus1h", "bonus2h");
                        }else{
                            if($("body").html().indexOf('/bonus2')>=0){
                                window.location.href=window.location.href.replace("bonus1h", "bonus2");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }
                    }
                }

                if(window.location.pathname.indexOf('/bonus2')>=0){//Bono 2
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus3h')>=0){
                            window.location.href=window.location.href.replace("bonus2", "bonus3h");
                        }else{
                            if($("body").html().indexOf('/bonus3')>=0){
                                window.location.href=window.location.href.replace("bonus2", "bonus3");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }
                    }
                }

                if(window.location.pathname.indexOf('/bonus3')>=0){//Bono 3h - Bono 3
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        if($("body").html().indexOf('/bonus4h')>=0){
                            window.location.href=window.location.href.replace("bonus3", "bonus4h");
                        }else{
                            if($("body").html().indexOf('/bonus4')>=0){
                                window.location.href=window.location.href.replace("bonus3", "bonus4");
                            }else{$(document).ready(function(){try{window.close();}catch(e){}});}
                        }
                    }
                }

                if(window.location.pathname.indexOf('/bonus4')>=0){//Bono 4h - Bono 4
                    if($('form').attr('action')!='' && $('form').attr('action')!='#'){
                        try{$("form").submit();}catch(e){}
                    }else{
                        try{$(":submit").click();}catch(e){}
                    }
                    if(document.referrer==window.location.href || $("div.message--visible_show").is(':visible')==true || $(":submit").length<=0 || $(":submit").is(':visible')==false || $(":submit").is(':enabled')==false  || $("body").html().indexOf('next')>=0){
                        $(document).ready(function(){try{window.close();}catch(e){}});
                    }
                }

            }
        },5000);
    }
    autoclick();
}
