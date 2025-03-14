// Audio de confirmacion al dar a descargar mapa
audio_confirm = new Audio("misc/snd_confirm.mp3");

// Funciones boton de descarga
function onHover() {
    $("#download_button")
        .attr('src',"misc/download_minecraft_select.png");
  }
  
function offHover() {
    $("#download_button")
        .attr('src', "misc/download_minecraft.png");
  }

function onHover_back() {
    $("#back_button")
        .attr('src',"misc/back_button_selected.png");
  }
  
function offHover_back() {
    $("#back_button")
        .attr('src', "misc/back_button.png");
  }

function clickImage() {
    audio_confirm.play();
  }

function photo(_url,_msg){
    var codeBlock = "";
    codeBlock +='<a href="'+_url+'" target="_blank">' +
                '<div class="image">' +
                '<img class="image__img" src="'+_url+'">';
    if (_msg !== undefined) {
        codeBlock +='<div class="image__overlay">' +
                    '<div class="image__title">'+_msg+'</div>' +
                    '</div>'
    }
    codeBlock += '</div></a>';
    document.getElementById("photos").innerHTML += codeBlock;
}
