var timerToggle=null;
var timeOutsArray=[];
var screenHeight =($(window).height())-65;
var screenWidth = ($(window).width())-55;
var time=60;
var pair=6;
var pair_val=0;
var timeClock=null;
var ball0thisClick=false;
var ball1thisClick=false;
var ball2thisClick=false;
var ball3thisClick=false;
var ball4thisClick=false;
var ball5thisClick=false;
var ball6thisClick=false;
var ball7thisClick=false;
var ClickOneColor=false;
var is_started=0;
var pair_var_array={
    6:4,
    4:3,
    3:6
};
var time_array_count={
    60:30,
    30:15,
    15:60
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function falseAll(iSWon){
        ball0thisClick=false;
        ball1thisClick=false;
        ball2thisClick=false;
        ball3thisClick=false;
        ball4thisClick=false;
        ball5thisClick=false;
        ball6thisClick=false;
        ball7thisClick=false;
        ClickOneColor=false;
    if(iSWon && iSWon!=2){
        for(var i=0;i<timeOutsArray.length;i++){
            clearInterval(timeOutsArray[i]);
        }
        pair=6;
        clearInterval(timeClock)
        $('.note-container').show();
        $('.note-container').addClass('animated zoomIn');
        var timer_val=$('.play-again').attr('time',60);
        $('.note-container span').html('Congrats You Won');
        $('.play-again').html('Reset');
    }
    else if(!iSWon && iSWon!=2){
        pair=pair_var_array[pair];
        clearInterval(timeClock);
        for(var i=0;i<timeOutsArray.length;i++){
            clearInterval(timeOutsArray[i]);
        }
        $('.note-container').show();
        $('.note-container').addClass('animated zoomIn');
        var timer_val=$('.play-again').attr('time');
        $('.note-container span').html('Oh You Lost');
        $('.play-again').html('Wanna Play Again');
        if(timer_val==15){
            $('.note-container span').html('You Lost Completly!!!');
            $('.play-again').html('RESET').attr('time',60);
        }
        else{
            $('.play-again').attr('time',time_array_count[timer_val]);
        }
    }
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

var moveRightLeft = function(id,speed,moveTopBottomBall,moveLeftRightBall,moveTopBottomDirectionBall,moveLeftRightDirectionBall,topBottomTouch){
    var rightLeftElement=document.getElementById(id);
    rightLeftElement.style.left=moveLeftRightBall+ "px";
    rightLeftElement.style.top=moveTopBottomBall + "px";
    moveTopBottomBall += moveTopBottomDirectionBall;
    moveLeftRightBall += moveLeftRightDirectionBall;
    if (moveTopBottomBall>screenHeight-parseInt(topBottomTouch)) {
        moveTopBottomDirectionBall=-speed;
    }
    if (-parseInt(topBottomTouch)>moveTopBottomBall) {
        moveTopBottomDirectionBall=speed;
    }
    if (moveLeftRightBall>screenWidth) {
        moveLeftRightDirectionBall=-speed;
    }
    if (0>moveLeftRightBall) {
        moveLeftRightDirectionBall=speed;
    }
    timerToggle=setTimeout(function(){
        moveRightLeft(id,speed,moveTopBottomBall,moveLeftRightBall,moveTopBottomDirectionBall,moveLeftRightDirectionBall,topBottomTouch);
    },50);
    timeOutsArray.push(timerToggle);
}
function animateBall() {

    var rightLeftElement=document.getElementById('ball0');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball0',5,moveTopBottomBall,moveLeftRightBall,4,4,-10);

    var rightLeftElement=document.getElementById('ball1');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball1',5,moveTopBottomBall,moveLeftRightBall,5,5,-50);

    var rightLeftElement=document.getElementById('ball2');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball2',6,moveTopBottomBall,moveLeftRightBall,6,6,-60);

    var rightLeftElement=document.getElementById('ball3');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball3',7,moveTopBottomBall,moveLeftRightBall,7,7,-50);

    var rightLeftElement=document.getElementById('ball4');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball4',8,moveTopBottomBall,moveLeftRightBall,8,8,-70);

    var rightLeftElement=document.getElementById('ball5');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball5',9,moveTopBottomBall,moveLeftRightBall,9,9,110);

    var rightLeftElement=document.getElementById('ball6');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball6',9,moveTopBottomBall,moveLeftRightBall,9,9,-60);

    var rightLeftElement=document.getElementById('ball7');
    moveTopBottomBall=rightLeftElement.offsetTop;
    moveLeftRightBall=rightLeftElement.offsetLeft;
    moveRightLeft('ball7',9,moveTopBottomBall,moveLeftRightBall,9,9,-60);
}

$(function(){

        $('#ball0').click(function(){
            var thisColor=$('#ball0').css('background-color');
            if(!ball0thisClick && is_started){
                ball0thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }

                    }
                    else{
                        pair_val=0;
                        falseAll();

                    }
                }
            }

        });
        $('#ball1').click(function(){
            var thisColor=$('#ball1').css('background-color');
            if(!ball1thisClick && is_started){
                ball1thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }
        });
        $('#ball2').click(function(){
            var thisColor=$('#ball2').css('background-color');
            if(!ball2thisClick && is_started){
                ball2thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }

        });
        $('#ball3').click(function(){
            var thisColor=$('#ball3').css('background-color');
            if(!ball3thisClick && is_started){
                ball3thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }

        });
        $('#ball4').click(function(){
            var thisColor=$('#ball4').css('background-color');
            if(!ball4thisClick && is_started){
                ball4thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }

        });
        $('#ball5').click(function(){
            var thisColor=$('#ball5').css('background-color');
            if(!ball5thisClick && is_started){
                ball5thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }

        });
        $('#ball6').click(function(){
            var thisColor=$('#ball6').css('background-color');
            if(!ball6thisClick && is_started){
                ball6thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }

        });
        $('#ball7').click(function(){
            var thisColor=$('#ball7').css('background-color');
            if(!ball7thisClick && is_started){
                ball7thisClick=true;
                if(!ClickOneColor){
                    ClickOneColor=thisColor;
                }
                else{
                    if(ClickOneColor==thisColor) {
                        pair_val++;
                        $('.pair').html(pair_val);
                        ClickOneColor=false;
                        if(parseInt(pair_val)==parseInt(pair)){
                            pair_val=0;
                            falseAll(1);
                        }
                        else{
                            falseAll(2);
                        }
                    }
                    else{
                        pair_val=0;
                        falseAll();
                    }
                }
            }

        });

});

var startThis=function(){
    animateBall();
    is_started=true;
     timeClock=setInterval(function(){
        $('.time').html(time);
        if(time==0){
           clearInterval(timeClock);
            for(var i=0;i<timeOutsArray.length;i++){
                clearInterval(timeOutsArray[i]);
            }
            time=30;
            $('.play-again').attr('time',time);
            falseAll();
        }
        time--;
    },1000);
    timeOutsArray.push(timeClock);
}

$('.play-again').live('click',function(){
    $('.note-container').hide();
    var timer_val=main_val=$(this).attr('time');
    if(timer_val==60){
        time=timer_val;
        startThis();
    }
    else{
            animateBall();
             timeClock=setInterval(function(){
                $('.time').html(timer_val);
                if(timer_val==0){
                    clearInterval(timeClock);
                    for(var i=0;i<timeOutsArray.length;i++){
                        clearInterval(timeOutsArray[i]);
                    }
                    timer_val=15;
                    if(parseInt(main_val)==15){
                            falseAll();
                    }
                    else{
                        $('.play-again').attr('time',timer_val);
                        falseAll();
                    }
                }
                timer_val--;
            },1000);
    }
});