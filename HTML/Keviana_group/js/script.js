// for navbar scroll changes
$(document).scroll(function () {
    var origin = $(document).scrollTop();
    if (origin >= 150) {
        $('.navbar').css({ 'background-color': 'white', 'box-shadow': '0px 3px 10px gray'});
    }
    else {
        $('.navbar').css({ 'background-color': 'rgba(255, 255, 255, 0.4)', 'box-shadow': 'none'});
    }
});

// for about section card-counter
// for business growth
var firstInitialvalue = 0;
var firstCounter = setInterval(counter1,100);
function counter1(){
    document.getElementById('countertext').innerHTML = ++firstInitialvalue;
    if(firstInitialvalue == 85){
        clearInterval(firstCounter);
    }
}
// for client satisfaction
var secondInitialvalue = 0;
var secondCounter = setInterval(counter2,90);
function counter2(){
    document.getElementById('counterpercent').innerHTML = ++secondInitialvalue +'%';
    if(secondInitialvalue == 97){
        clearInterval(secondCounter);
    }
}

// for Our-strength slider
jQuery(function ($) {
    var slider = $('.mis-stage').miSlider({
        speed: 600,
        pause: 2000,
        slideScaling: 120,
        slidesContinuous: true,
        slidesOnStage: false,
        slidePosition: 'center',
        slideStart: 'mid',
        offsetV: -2,
        centerV: true,
        navButtonsOpacity: 0
    });
});