$(document).ready(function () {
    $("#start").click(function () {
        $("#screenImage").attr('src', 'greetingsquestionsset/preguntaUna.png');
        $("#start").remove();
        
    });
    $("#necks").click(function () {
        changeImage();

    });
    $("#beck").click(function () {
        backImage();

    });
    var images = [];

    images[0] = 'greetingsquestionsset/preguntaUna.png';
    images[1] = 'greetingsquestionsset/preguntaDos.png';
    images[2] = 'greetingsquestionsset/preguntaTres.png';
    images[3] = 'greetingsquestionsset/preguntaQuatro.png';
    images[4] = 'greetingsquestionsset/preguntaCinco.png';
    images[5] = 'greetingsquestionsset/preguntaSeis.png';
    images[6] = 'greetingsquestionsset/preguntaSiete.png';
    images[7] = 'greetingsquestionsset/preguntaOcho.png';
    images[8] = 'greetingsquestionsset/preguntaNueve.png';
    images[9] = 'greetingsquestionsset/preguntaDiez.png';
    images[10] = 'greetingsquestionsset/preguntaOnce.png';
    images[11] = 'greetingsquestionsset/preguntaDoce.png';

    var i = 0;
    function changeImage() {


        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        $('#screenImage').attr('src', images[i]);
    }

    function backImage() {

        if (i > 0) {
            i--;
        } else {
            i = 0;
        }
        console.log(images[i]);
        $("#screenImage").attr('src', images[i]);
    }
});




