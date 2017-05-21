var firstTimeRightLeftGetValue=true;
var firstTimeTopBottomGetValue=true;
var timerToggle=null;
var screenHeight = ($(window).height())-55;
var screenWidth = ($(window).width())-55;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
var moveLeftRight = function(id,speed){
    var moveTopBottomBall,moveLeftRightBall,moveTopBottomDirectionBall,moveLeftRightDirectionBall;
    var topBottomElement=document.getElementById(id);
    if(!readCookie(id)){
        createCookie(id,1,1);
        console.log(id)
        moveTopBottomBall=topBottomElement.offsetTop;
        moveLeftRightBall=topBottomElement.offsetLeft;
        createCookie(id+'topbottom',moveTopBottomBall,1);
        createCookie(id+'rightleft',moveLeftRightBall,1);
        moveTopBottomDirectionBall=1;
        moveLeftRightDirectionBall=1;
        createCookie(id+'topbottomdirection',moveTopBottomDirectionBall,1);
        createCookie(id+'rightleftdirection',moveLeftRightDirectionBall,1);
    }
    else{
        moveTopBottomBall=parseInt(readCookie(id+'topbottom'));
        moveLeftRightBall=parseInt(readCookie(id+'rightleft'));
        moveTopBottomDirectionBall=parseInt(readCookie(id+'topbottomdirection'));
        moveLeftRightDirectionBall=parseInt(readCookie(id+'rightleftdirection'));
    }
    topBottomElement.style.left=moveLeftRightBall+ "px";
    topBottomElement.style.top=moveTopBottomBall + "px";
    moveTopBottomBall += moveTopBottomDirectionBall+speed;
    moveLeftRightBall += moveLeftRightDirectionBall+speed;
    createCookie(id+'topbottom',moveTopBottomBall,1);
    createCookie(id+'rightleft',moveLeftRightBall,1);
    if (moveTopBottomBall>screenHeight) {
        moveTopBottomDirectionBall=-1;
        createCookie(id+'topbottomdirection',moveTopBottomDirectionBall,1);
    }
    if (0>moveTopBottomBall) {
        moveTopBottomDirectionBall=1;
        createCookie(id+'topbottomdirection',moveTopBottomDirectionBall,1);
    }
    if (moveLeftRightBall>screenWidth) {
        moveLeftRightDirectionBall=-1;
        createCookie(id+'rightleftdirection',moveLeftRightDirectionBall,1);
    }
    if (5>moveLeftRightBall) {
        moveLeftRightDirectionBall=1;
        createCookie(id+'rightleftdirection',moveLeftRightDirectionBall,1);
    }
}

var moveRightLeft = function(id,speed){
    var moveTopBottomBall,moveLeftRightBall,moveTopBottomDirectionBall,moveLeftRightDirectionBall;
    var rightLeftElement=document.getElementById(id);
    if(!readCookie(id)){
        createCookie(id,1,1);
        moveTopBottomBall=rightLeftElement.offsetTop;
        moveLeftRightBall=rightLeftElement.offsetLeft;
        createCookie(id+'topbottom',moveTopBottomBall,1);
        createCookie(id+'rightleft',moveLeftRightBall,1);
        moveTopBottomDirectionBall=3;
        moveLeftRightDirectionBall=3;
        createCookie(id+'topbottomdirection',moveTopBottomDirectionBall,1);
        createCookie(id+'rightleftdirection',moveLeftRightDirectionBall,1);
    }
    else{
        moveTopBottomBall=parseInt(readCookie(id+'topbottom'));
        moveLeftRightBall=parseInt(readCookie(id+'rightleft'));
        moveTopBottomDirectionBall=parseInt(readCookie(id+'topbottomdirection'));
        moveLeftRightDirectionBall=parseInt(readCookie(id+'rightleftdirection'));
    }
    rightLeftElement.style.left=moveLeftRightBall+ "px";
    rightLeftElement.style.top=moveTopBottomBall + "px";
    moveTopBottomBall += moveTopBottomDirectionBall;
    moveLeftRightBall += moveLeftRightDirectionBall;
    createCookie(id+'topbottom',moveTopBottomBall,1);
    createCookie(id+'rightleft',moveLeftRightBall,1);
    if (moveTopBottomBall>screenHeight) {
        moveTopBottomDirectionBall=-3;
        createCookie(id+'topbottomdirection',moveTopBottomDirectionBall,1);
    }
    if (0>moveTopBottomBall) {
        moveTopBottomDirectionBall=3;
        createCookie(id+'topbottomdirection',moveTopBottomDirectionBall,1);
    }
    if (moveLeftRightBall>screenWidth) {
        moveLeftRightDirectionBall=-3;
        createCookie(id+'rightleftdirection',moveLeftRightDirectionBall,1);
    }
    if (5>moveLeftRightBall) {
        moveLeftRightDirectionBall=3;
        createCookie(id+'rightleftdirection',moveLeftRightDirectionBall,1);
    }
}
function animateBall() {
    moveLeftRight('ball',0);
//    moveLeftRight('ball2');
    moveRightLeft('ball1',10);
//    moveRightLeft('ball3',0);
//    moveRightLeft('ball4',5);
//    moveRightLeft('ball5',4);
    timerToggle=setTimeout(function() {
        animateBall();
    },10);
}
$(function(){
    animateBall();
});