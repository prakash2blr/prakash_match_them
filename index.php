<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui" id="viewport"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="css/bootstrap.min_3.css"/>
        <link rel="stylesheet" href="/css/alertify.core.css"/>
        <link rel="stylesheet" href="/css/alertify.default.css"/>
        <style>
            .animated {
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }
            @-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}
            @keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);-ms-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}
            .zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}
            html,body{
                margin: 0;
                padding: 0;
                height: 100%;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                overflow: hidden;
                background: currentcolor;
            }
            .ball0,.ball1,.ball2,.ball3,.ball4,.ball5,.ball6,.ball7{
                height: 50px;
                width: 50px;
                border: 1px solid black;
                background: #6032ff;
                border-radius: 25px;
                position: relative;
                top: 310px;
                cursor: pointer;
            }
            .ball1{
                background: #ff4400;
                position: absolute;
                right:0;
                top:200px;
            }
            .ball2{
                background: #00FF02;
                top:100px;
            }
            .ball3,.ball4{
                background: #fcff14;
                position: absolute;
                right:0;
                top: 100px;
            }
            .ball4{
                top:80px;
                background: #00FF02;
            }
            .ball5{
                top: 65px;
                background: #ff4400;
            }
            .ball6{
                background: #6032ff;
                top: 400px;
                position: absolute;
            }
            .ball7{
                background: #fcff14;
                top: 100px;
                position: relative;
                left: 0;
            }
            .header-container{
                width: 100%;
                display: table;
                height: 50px;
            }
            .header-container div{
                display: table-cell;
                width: 33%;
                vertical-align: middle;
            }
            .start-container{
                text-align: center;
                background: darkslateblue;
            }
            .time-container{
                background: #23efaa;
                text-align: center;
                font-size: larger;
            }
            .score-container{
                background: #23efaa;
                text-align: center;
                font-size: larger;
            }
            .notifyjs-foo-base button {
                font-size: 9px;
                padding: 5px;
                margin: 2px;
                width: 60px;
            }
            .note-container{
                background: rgba(0,0,0,0.6);
                border: 1px solid white;
                height: 100px;
                width: 80%;
                position: absolute;
                top: 150px;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                display: none;
                text-align: center;
                color: white;
                font-size: large;
                line-height: 95px;
                z-index: 9999;
            }
            .play-again-container{
                display: inline;
            }
            .time,.text,.pair{
                font-size: 13px;
            }
            .info-span{
                padding-right: 25px;
            }
        </style>
    </head>
    <body>
    <script type="text/javascript" src="js/lib/jquery.min.js"></script>
    <script type="text/javascript" src="js/matchthem.js"></script>
    <script type="text/javascript" src="/js/lib/alertify.min.js"></script>
    <div class="note-container">
        <span>Oh!! Time Out</span>
        <div class="play-again-container">
            <button class="btn btn-primary play-again" time="60">

            </button>
        </div>
    </div>
    <div class="header-container">
        <div class="time-container">
            <span class="timer">
                   <span class="text">Remaining Time : </span>
                    <span class="time">0</span>
            </span>
        </div>
        <div class="start-container">
                <button class="btn btn-primary glyphicon glyphicon-info-sign info-span" onclick="alertify.alert('Touch and match same colored balls with in given time')""></button>
                <button class="btn btn-primary" onclick="startThis()">START</button>
        </div>
        <div class="score-container">
            <span class="score">
                  <span class="text">Matched Pair : </span>
                    <span class="pair">0</span>
            </span>
        </div>
    </div>
    <div class="container">
        <div class="ball0" id="ball0">

        </div>
        <div class="ball1" id="ball1">

        </div>
        <div class="ball2" id="ball2">

        </div>
        <div class="ball3" id="ball3">

        </div>
        <div class="ball4" id="ball4">

        </div>
        <div class="ball5" id="ball5">

        </div>
        <div class="ball6" id="ball6">

        </div>
        <div class="ball7" id="ball7">

        </div>
    </div>
    </body>
</html>