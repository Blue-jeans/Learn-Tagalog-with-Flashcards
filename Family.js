$(document).ready(function () {
    $("#startFamily").click(function () {
        $("#screenImage").attr('src', 'Familyquestionsset/questionOne.png');
        $("#startFamily").remove();

    });
    $("#necksFamily").click(function () {
        changeImage();

    });
    $("#beckFamily").click(function () {
        backImage();

    });
    var images = [];

    images[0] = 'Familyquestionsset/questionOne.png';
    images[1] = 'Familyquestionsset/questionTwo.png';
    images[2] = 'Familyquestionsset/questionThree.png';
    images[3] = 'Familyquestionsset/questionFour.png';
    images[4] = 'Familyquestionsset/questionFive.png';
    images[5] = 'Familyquestionsset/questionSix.png';
    images[6] = 'Familyquestionsset/questionSeven.png';
    images[7] = 'Familyquestionsset/questionEight.png';
    images[8] = 'Familyquestionsset/questionNine.png';
    images[9] = 'Familyquestionsset/questionTen.png';
    images[10] = 'Familyquestionsset/questionEleven.png';
    images[11] = 'Familyquestionsset/questionTwelve.png';
    images[12] = 'Familyquestionsset/questionThirteen.png';
    images[12] = 'Familyquestionsset/questionFourteen.png';


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