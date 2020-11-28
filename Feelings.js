$(document).ready(function () {
    $("#startFeelings").click(function () {
        $("#screenImage").attr('src', 'Feelingsquestionsset/questionOne.png');
        $("#startFeelings").remove();
    });
    $("#necksFeelings").click(function () {
        changeImage();

    });
    $("#beckFeelings").click(function () {
        backImage();

    });
    var images = [];

    images[0] = 'Feelingsquestionsset/questionOne.png';
    images[1] = 'Feelingsquestionsset/questionTwo.png';
    images[2] = 'Feelingsquestionsset/questionThree.png';
    images[3] = 'Feelingsquestionsset/questionFour.png';
    images[4] = 'Feelingsquestionsset/questionFive.png';
    images[5] = 'Feelingsquestionsset/questionSix.png';
    images[6] = 'Feelingsquestionsset/questionSeven.png';
    images[7] = 'Feelingsquestionsset/questionEight.png';
    images[8] = 'Feelingsquestionsset/questionNine.png';
    images[9] = 'Feelingsquestionsset/questionTen.png';
    images[10] = 'Feelingsquestionsset/questionEleven.png';
    images[11] = 'Feelingsquestionsset/questionTwelve.png';
    images[12] = 'Feelingsquestionsset/questionThirteen.png';
    images[13] = 'Feelingsquestionsset/questionFourteen.png';
    images[14] = 'Feelingsquestionsset/questionFifteen.png';

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