/* Muestra la actividad de los modulos activos */

function modulo(nombremodulo,segundosdeespera) {
  var app = document.querySelector('div#control');
  app.append('\
  <table style="border-collapse: collapse; width: 100%;border: 1px solid grey;background-color: grey;" border="1" id="'+modulo+'"><tbody>\
  <tr>\
  <td style="width: 25%;"><strong>'+nombremodulo+'</strong></td>\
  <td style="width: 25%;" class="align-right"><input id="tiempo'+nombremodulo+'" style="width: 100%; border: none; text-align: center;background-color: grey;" readonly="readonly" type="text" value="Bot activo"></td>\
  <td style="width: 25%" class="align-right"><a href="javascript:DetenerModuloBot('+"'"+nombremodulo+"'"+','+nombremodulo+');"><input style="display: inline-block;" id="detenerweb'+nombremodulo+'" type="button" value="⏹️" title="Detener Modulo"></a><a href="javascript:ventana['+onbremodulo+'].focus();"> <input style="display: inline-block;" id="verweb'+nombremodulo+'" type="button" value="👁" title="Ver actividad" disabled></a></td>\
  <td style="width: 25%;" class="align-right"><div id="icono'+nombremodulo+'" style="height: 15px; width: 15px; background-color: green; border-radius: 50%; display: inline-block; vertical-align: middle;"> </div></td>\
  </tr>\
  <tr>\
  <td style="width: 100%;" colspan="4"><progress style="width: 100%;" id="progreso'+nombremodulo+'" value="0" max="'+segundosdeespera+'"></progress></td>\
  </tr>\
  </tbody></table>');
}

export {modulo};
