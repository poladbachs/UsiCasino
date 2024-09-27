//EJS Compiled Views - This file was automatically generated on Fri Sep 27 2024 06:21:20 GMT+0200 (Central European Summer Time)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_blackjack = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Black Jack</title>\n        <link rel=\"stylesheet\" href=\"../css/black-jack.css\">\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n\n\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'BJF';\n                src: url(../font/BJF.ttf);\n            }\n        </style>\n       \n    </head>\n<body>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2> \n    <form>\n        <p class=\"creditholder\" style=\"color: #e0aa35;\">Your Credits: <span id=\"credits\"><%= user.credits %></span></h2> \n        <p class=\"inputholder\" style=\"color: #e0aa35;\">Your Bet: <input type=\"number\" id=\"betInput\" required min=\"1\" step=\"1\"></p>\n        <h2 class=\"usernameholder\" style=\"display: block;\"> Dear <%= user.username %>, please place your bet.</h2> \n        <button id=\"start\">Start Game</button>\n    </form>\n    <h2 id=\"message\">\n\n    </h2>\n    <div id=\"counter\" style=\" font-size: 16pt;\" >  </div>\n\n    <div id=\"game-block\">\n        <h2>Dealer: <span id=\"dealer-sum\"></span></h2>\n        <div id=\"dealer-cards\">\n        </div>\n\n        <h2>You: <span id=\"your-sum\"></span></h2>\n\n        <div id=\"your-cards\">\n        </div>\n\n        <br>\n\n        <button id=\"hit\">Hit</button>\n        <button id=\"stay\">Stay</button>\n        <form action=\"/home\" method=\"GET\">\n            <button id=\"black-jack\">Home</button>\n        </form>\n    </div>\n\n    <script src=\"../socket.io/socket.io.js\"></script>\n    <script src=\"../js/ws-client-blackjack.js\"></script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Black Jack</title>\n        <link rel=\"stylesheet\" href=\"../css/black-jack.css\">\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n\n\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'BJF';\n                src: url(../font/BJF.ttf);\n            }\n        </style>\n       \n    </head>\n<body>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 21
    ; __append(escapeFn( user.email ))
    ; __append("</h2> \n    <form>\n        <p class=\"creditholder\" style=\"color: #e0aa35;\">Your Credits: <span id=\"credits\">")
    ; __line = 23
    ; __append(escapeFn( user.credits ))
    ; __append("</span></h2> \n        <p class=\"inputholder\" style=\"color: #e0aa35;\">Your Bet: <input type=\"number\" id=\"betInput\" required min=\"1\" step=\"1\"></p>\n        <h2 class=\"usernameholder\" style=\"display: block;\"> Dear ")
    ; __line = 25
    ; __append(escapeFn( user.username ))
    ; __append(", please place your bet.</h2> \n        <button id=\"start\">Start Game</button>\n    </form>\n    <h2 id=\"message\">\n\n    </h2>\n    <div id=\"counter\" style=\" font-size: 16pt;\" >  </div>\n\n    <div id=\"game-block\">\n        <h2>Dealer: <span id=\"dealer-sum\"></span></h2>\n        <div id=\"dealer-cards\">\n        </div>\n\n        <h2>You: <span id=\"your-sum\"></span></h2>\n\n        <div id=\"your-cards\">\n        </div>\n\n        <br>\n\n        <button id=\"hit\">Hit</button>\n        <button id=\"stay\">Stay</button>\n        <form action=\"/home\" method=\"GET\">\n            <button id=\"black-jack\">Home</button>\n        </form>\n    </div>\n\n    <script src=\"../socket.io/socket.io.js\"></script>\n    <script src=\"../js/ws-client-blackjack.js\"></script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n</html>")
    ; __line = 56
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_fortune_wheel = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"color-scheme\" content=\"light dark\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Wheel of Fortune</title>\n  <link rel=\"stylesheet\" href=\"/css/fortune_wheel.css\" />\n  <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n  <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n  <link rel=\"stylesheet\" href=\"/css/index.css\" />\n  <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body>\n  <audio id=\"backgroundAudio\" controls autoplay loop hidden >\n    <source src=\"../music/Wheel of Fortune Closing Theme.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n  <script>\n    var audio = document.getElementById(\"backgroundAudio\");\n    audio.volume = 0.1;\n  </script>\n  <h2 class=\"usernameholder\" style=\"display: none;\">\n    <%= user.username %>\n  </h2>\n  <h2 class=\"emailholder\" style=\"display: none;\">\n    <%= user.email %>\n  </h2>\n  <div class=\"number-slots\" style=\"display: none;\">\n    <div class=\"group\">\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n    </div>\n\n    <h2 class=\"js-announcement announcement\"></h2>\n\n    <button class=\"new-btn1\" id=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button>\n    <button class=\"slotButton\">\n      Press to Start\n    </button>\n  </div>\n\n  <!-- <button class=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button> -->\n\n  <div class=\"container-board\" style=\"display: none;\">\n    <div class=\"guess-board\">\n\n      <div class=\"question-container\">\n        <p class=\"question-tiles\"></p>\n      </div>\n\n      <div class=\"guess-tiles-container\"></div>\n    </div>\n\n    <div class=\"guess-game-buttons\">\n      <form action=\"/incrementCredits\" method=\"POST\"></form>\n      <form action=\"/decrementCredits\" method=\"POST\"></form>\n      <div class=\"game-btn guess-container\">\n        <input type=\"text\" id=\"guessInput\" name=\"guessInput\" required placeholder=\"Guess letter\">\n        <div class=\"guess-btn\">Reveal</div>\n      </div>\n      <div id=\"winning-message\" class=\"message-win\" style=\"display: none\">\n        <p class=\"message-text\" id=\"end-message\"></p>\n        <button class=\"new-btn\">Go back to Wheel</button>\n        <!-- <button class=\"back-btn\">Go back to Main Menu</button> -->\n      </div>\n      <div class=\"game-btn answer-container\">\n        <input type=\"text\" id=\"answerInput\" name=\"answerInput\" required placeholder=\"Give answer\">\n        <div class=\"answer-btn\">Check</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-game\">\n\n    <div class=\"interface-container\">\n      <div class=\"credits-container\">\n        <div class=\"start-credits-window\" id=\"startCreditsWindow\">\n          <p class=\"start-credits\" id=\"startCredits\"></p>\n          <p id=\"spinCounter\" style=\"color: rgb(29, 180, 194);\">Spins: 0</p>\n        </div>\n        <p>Current Credits: <span id=\"creditAmount\" style=\"color: rgb(19, 229, 19);\">\n            <%= user.credits %>\n          </span></p>\n        <div class=\"message-window\" id=\"messageWindow\">\n          <p class=\"message-text\" id=\"messageText\"></p>\n        </div>\n      </div>\n\n      <div class=\"bet-container\">\n        <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"10\" step=\"10\" required\n          placeholder=\"Bet\">\n      </div>\n\n      <div id=\"wheelContainer\">\n        <img src=\"/images/wheelborder.png\" alt=\"wheel border\" id=\"wheelborder\">\n        <canvas id=\"wheel\" width=\"430\" height=\"430\"></canvas>\n        <div id=\"spin\">SPIN</div>\n      </div>\n    </div>\n  </div>\n\n\n  </div>\n\n  <form action=\"/home\" method=\"GET\">\n    <button id=\"homeButton\" class=\"homepage\">HOME</button>\n  </form>\n\n  <div id=\"counter\" style=\"display: none;\"> 0 </div>\n\n\n\n\n\n\n  <script defer src=\"/js/fortune_wheel.js\"></script>\n  <script src=\"/socket.io/socket.io.js\"></script>\n  <script src=\"/js/ws-client.js\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.6.4.min.js\"></script>\n  <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"color-scheme\" content=\"light dark\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Wheel of Fortune</title>\n  <link rel=\"stylesheet\" href=\"/css/fortune_wheel.css\" />\n  <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n  <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n  <link rel=\"stylesheet\" href=\"/css/index.css\" />\n  <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body>\n  <audio id=\"backgroundAudio\" controls autoplay loop hidden >\n    <source src=\"../music/Wheel of Fortune Closing Theme.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n  <script>\n    var audio = document.getElementById(\"backgroundAudio\");\n    audio.volume = 0.1;\n  </script>\n  <h2 class=\"usernameholder\" style=\"display: none;\">\n    ")
    ; __line = 26
    ; __append(escapeFn( user.username ))
    ; __append("\n  </h2>\n  <h2 class=\"emailholder\" style=\"display: none;\">\n    ")
    ; __line = 29
    ; __append(escapeFn( user.email ))
    ; __append("\n  </h2>\n  <div class=\"number-slots\" style=\"display: none;\">\n    <div class=\"group\">\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n    </div>\n\n    <h2 class=\"js-announcement announcement\"></h2>\n\n    <button class=\"new-btn1\" id=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button>\n    <button class=\"slotButton\">\n      Press to Start\n    </button>\n  </div>\n\n  <!-- <button class=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button> -->\n\n  <div class=\"container-board\" style=\"display: none;\">\n    <div class=\"guess-board\">\n\n      <div class=\"question-container\">\n        <p class=\"question-tiles\"></p>\n      </div>\n\n      <div class=\"guess-tiles-container\"></div>\n    </div>\n\n    <div class=\"guess-game-buttons\">\n      <form action=\"/incrementCredits\" method=\"POST\"></form>\n      <form action=\"/decrementCredits\" method=\"POST\"></form>\n      <div class=\"game-btn guess-container\">\n        <input type=\"text\" id=\"guessInput\" name=\"guessInput\" required placeholder=\"Guess letter\">\n        <div class=\"guess-btn\">Reveal</div>\n      </div>\n      <div id=\"winning-message\" class=\"message-win\" style=\"display: none\">\n        <p class=\"message-text\" id=\"end-message\"></p>\n        <button class=\"new-btn\">Go back to Wheel</button>\n        <!-- <button class=\"back-btn\">Go back to Main Menu</button> -->\n      </div>\n      <div class=\"game-btn answer-container\">\n        <input type=\"text\" id=\"answerInput\" name=\"answerInput\" required placeholder=\"Give answer\">\n        <div class=\"answer-btn\">Check</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-game\">\n\n    <div class=\"interface-container\">\n      <div class=\"credits-container\">\n        <div class=\"start-credits-window\" id=\"startCreditsWindow\">\n          <p class=\"start-credits\" id=\"startCredits\"></p>\n          <p id=\"spinCounter\" style=\"color: rgb(29, 180, 194);\">Spins: 0</p>\n        </div>\n        <p>Current Credits: <span id=\"creditAmount\" style=\"color: rgb(19, 229, 19);\">\n            ")
    ; __line = 96
    ; __append(escapeFn( user.credits ))
    ; __append("\n          </span></p>\n        <div class=\"message-window\" id=\"messageWindow\">\n          <p class=\"message-text\" id=\"messageText\"></p>\n        </div>\n      </div>\n\n      <div class=\"bet-container\">\n        <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"10\" step=\"10\" required\n          placeholder=\"Bet\">\n      </div>\n\n      <div id=\"wheelContainer\">\n        <img src=\"/images/wheelborder.png\" alt=\"wheel border\" id=\"wheelborder\">\n        <canvas id=\"wheel\" width=\"430\" height=\"430\"></canvas>\n        <div id=\"spin\">SPIN</div>\n      </div>\n    </div>\n  </div>\n\n\n  </div>\n\n  <form action=\"/home\" method=\"GET\">\n    <button id=\"homeButton\" class=\"homepage\">HOME</button>\n  </form>\n\n  <div id=\"counter\" style=\"display: none;\"> 0 </div>\n\n\n\n\n\n\n  <script defer src=\"/js/fortune_wheel.js\"></script>\n  <script src=\"/socket.io/socket.io.js\"></script>\n  <script src=\"/js/ws-client.js\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.6.4.min.js\"></script>\n  <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n\n</html>")
    ; __line = 137
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_include_SoloWheel = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<style>\n  \n  .image-container {\n    position: relative;\n    width: 760px;\n    height: 760px;\n    margin: 0;\n    padding: 0;\n\n    scale: 0.5;\n  }\n  \n  .image {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  \n  .image:nth-child(2) {\n    z-index: 1; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(3) {\n    z-index: 2; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(4) {\n    z-index: 3; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(5) {\n    z-index: 4; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(6) {\n    width: 30px;\n    height: 30px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .square {\n    rotate: 45deg;\n    position: absolute;\n    top: 150px;\n    left: 150px;\n    scale: 0.95;\n    /* transform: translate(-50%, -50%); */\n    width: 450px;\n    height: 450px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  #TheBall {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 30px;\n    height: 30px;\n    scale: 1.3;\n    border-radius: 50%;\n  }\n  \n  /* @keyframes spin2 {\n    0% {\n      transform: rotate(var(--my-start-degree-ball));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree-ball));\n    }\n  } \n  \n  @keyframes spin {\n    0% {\n      transform: rotate(var(--my-start-degree));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree)); \n    }\n  }\n  \n  \n  .theSpinOneanim {\n    animation: spin 10s cubic-bezier(0,.84,.55,.98) forwards; \n  }\n\n  .squareanim {\n    animation: spin2 10s cubic-bezier(0,.84,.55,.98) forwards;\n  }\n  */\n</style>\n\n<div class=\"image-container\">\n  <img src=\"/images/rouletteImages/roulette_1.png\" alt=\"Image 1\" class=\"image\" id=\"ThefirstOne\">\n  <img src=\"/images/rouletteImages/roulette_2.png\" alt=\"Image 2\" class=\"image theSpinOneanim\" id=\"theSpinOne\"> \n  <img src=\"/images/rouletteImages/roulette_3.png\" alt=\"Image 3\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_4.png\" alt=\"Image 4\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_5.png\" alt=\"Image 5\" class=\"image\">\n  <div id=\"TheBallOne\" class=\"square squareanim\">\n    <img src=\"/images/rouletteImages/ball.png\" alt=\"Image 6\" class=\"image\" id=\"TheBall\">\n   </div>\n</div>\n\n\n\n<!-- <script>\nfunction init() {\n  function generateRandomNumber() {\n    return Math.floor(Math.random() * 37);\n  } \n\n  const randomNumber = generateRandomNumber();  \n  console.log(\"Random Number:\" + randomNumber);\n\n  const singleRotation = 360/37;\n\n  const rouletteWheelNumbers = [ \n    0, 32, 15, 19, 4, 21, 2, 25, 17,\n    34, 6, 27, 13, 36, 11, 30, 8, 23,\n    10, 5, 24, 16, 33, 1, 20, 14, 31,\n    9, 22, 18, 29, 7, 28, 12, 35, 3, 26\n  ];\n\n  function calculateDegreesRoulette(number) {\n    let degreesRoulette = 0;\n    for (let i = 0; i < rouletteWheelNumbers.length; i++) {\n      if (number == rouletteWheelNumbers[i]) {\n        degreesRoulette = i * singleRotation;\n      }\n    }\n    return degreesRoulette;\n  }\n\nfunction generateRandomRotation() {\n  return Math.floor(Math.random() * 360);\n}\n\nconst randomRotation = generateRandomRotation();\nconsole.log(\"Random Rotation: \" + randomRotation);\n\n  const rawdegree = calculateDegreesRoulette(randomNumber);\n  // document.getElementById(\"theSpinOne\").style.transform = `rotate(${-degreesRoulette}deg)`;\n  const degreesRoulette = rawdegree + 1080 + randomRotation ; \n  console.log(\"Degrees Roulette: \" + -degreesRoulette);\n  document.getElementById(\"theSpinOne\").style.setProperty('--my-end-degree', `${-degreesRoulette}deg`);\n\n  const rawdegreeBall = 360 - degreesRoulette; \n  console.log(\"Raw Degree Ball: \" + rawdegreeBall); \n\n  const degreesBall = (360 - randomRotation) + 1080;\n  // document.getElementsById(\"theBallOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  // document.getElementsByClassName(\"theSpinOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  document.documentElement.style .setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n}\n</script> -->"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<style>\n  \n  .image-container {\n    position: relative;\n    width: 760px;\n    height: 760px;\n    margin: 0;\n    padding: 0;\n\n    scale: 0.5;\n  }\n  \n  .image {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  \n  .image:nth-child(2) {\n    z-index: 1; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(3) {\n    z-index: 2; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(4) {\n    z-index: 3; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(5) {\n    z-index: 4; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(6) {\n    width: 30px;\n    height: 30px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .square {\n    rotate: 45deg;\n    position: absolute;\n    top: 150px;\n    left: 150px;\n    scale: 0.95;\n    /* transform: translate(-50%, -50%); */\n    width: 450px;\n    height: 450px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  #TheBall {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 30px;\n    height: 30px;\n    scale: 1.3;\n    border-radius: 50%;\n  }\n  \n  /* @keyframes spin2 {\n    0% {\n      transform: rotate(var(--my-start-degree-ball));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree-ball));\n    }\n  } \n  \n  @keyframes spin {\n    0% {\n      transform: rotate(var(--my-start-degree));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree)); \n    }\n  }\n  \n  \n  .theSpinOneanim {\n    animation: spin 10s cubic-bezier(0,.84,.55,.98) forwards; \n  }\n\n  .squareanim {\n    animation: spin2 10s cubic-bezier(0,.84,.55,.98) forwards;\n  }\n  */\n</style>\n\n<div class=\"image-container\">\n  <img src=\"/images/rouletteImages/roulette_1.png\" alt=\"Image 1\" class=\"image\" id=\"ThefirstOne\">\n  <img src=\"/images/rouletteImages/roulette_2.png\" alt=\"Image 2\" class=\"image theSpinOneanim\" id=\"theSpinOne\"> \n  <img src=\"/images/rouletteImages/roulette_3.png\" alt=\"Image 3\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_4.png\" alt=\"Image 4\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_5.png\" alt=\"Image 5\" class=\"image\">\n  <div id=\"TheBallOne\" class=\"square squareanim\">\n    <img src=\"/images/rouletteImages/ball.png\" alt=\"Image 6\" class=\"image\" id=\"TheBall\">\n   </div>\n</div>\n\n\n\n<!-- <script>\nfunction init() {\n  function generateRandomNumber() {\n    return Math.floor(Math.random() * 37);\n  } \n\n  const randomNumber = generateRandomNumber();  \n  console.log(\"Random Number:\" + randomNumber);\n\n  const singleRotation = 360/37;\n\n  const rouletteWheelNumbers = [ \n    0, 32, 15, 19, 4, 21, 2, 25, 17,\n    34, 6, 27, 13, 36, 11, 30, 8, 23,\n    10, 5, 24, 16, 33, 1, 20, 14, 31,\n    9, 22, 18, 29, 7, 28, 12, 35, 3, 26\n  ];\n\n  function calculateDegreesRoulette(number) {\n    let degreesRoulette = 0;\n    for (let i = 0; i < rouletteWheelNumbers.length; i++) {\n      if (number == rouletteWheelNumbers[i]) {\n        degreesRoulette = i * singleRotation;\n      }\n    }\n    return degreesRoulette;\n  }\n\nfunction generateRandomRotation() {\n  return Math.floor(Math.random() * 360);\n}\n\nconst randomRotation = generateRandomRotation();\nconsole.log(\"Random Rotation: \" + randomRotation);\n\n  const rawdegree = calculateDegreesRoulette(randomNumber);\n  // document.getElementById(\"theSpinOne\").style.transform = `rotate(${-degreesRoulette}deg)`;\n  const degreesRoulette = rawdegree + 1080 + randomRotation ; \n  console.log(\"Degrees Roulette: \" + -degreesRoulette);\n  document.getElementById(\"theSpinOne\").style.setProperty('--my-end-degree', `${-degreesRoulette}deg`);\n\n  const rawdegreeBall = 360 - degreesRoulette; \n  console.log(\"Raw Degree Ball: \" + rawdegreeBall); \n\n  const degreesBall = (360 - randomRotation) + 1080;\n  // document.getElementsById(\"theBallOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  // document.getElementsByClassName(\"theSpinOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  document.documentElement.style .setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n}\n</script> -->")
    ; __line = 155
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_include_rouletteDIV = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"result\">\n    <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\"><%= credit %></span></p>\n    <p style=\"color: white;\" id=\"winNumber\"><%= winNumber %> : winNumber</p>\n    <p style=\"color: white;\" id=\"winAmount\">winAmount: <%= winAmount %></p>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"result\">\n    <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\">")
    ; __line = 2
    ; __append(escapeFn( credit ))
    ; __append("</span></p>\n    <p style=\"color: white;\" id=\"winNumber\">")
    ; __line = 3
    ; __append(escapeFn( winNumber ))
    ; __append(" : winNumber</p>\n    <p style=\"color: white;\" id=\"winAmount\">winAmount: ")
    ; __line = 4
    ; __append(escapeFn( winAmount ))
    ; __append("</p>\n</div>")
    ; __line = 5
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>USI-CASINO</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"../css/index.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    \n    <style media=\"screen,print\">\n        @font-face {\n            font-family: 'Inter';\n            src: url(../font/Inter.ttf);\n        }\n    </style>\n</head>\n<body>\n    <audio controls autoplay loop hidden>\n        <source src=\"../music/index-background.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n    </audio>\n    <div id=\"cookieConsentContainer\">\n        <div id=\"cookieConsentOverlay\"></div>\n        <div id=\"cookieConsentBanner\">\n            <p>This site uses cookies. By continuing to use this site, you accept our use of cookies.</p>\n            <p>Also we are not using real money. So, have fun!</p>\n            <button id=\"acceptCookies\">Accept</button>\n        </div>\n    </div>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2>\n\n\n\n\n\n\n    <section class=\"top-part\">\n\n\n\n        <div class=\"credits-section\">\n            <p class=\"username\" >Balance: <%= user.credits %> \n                <img src=\"../images/usicoin.png\" alt=\"usi coin\" class=\"coin\"/>  \n            </p>\n            <!-- Plus sign -->\n            <span class=\"plus-sign\" onclick=\"toggleDropdown('plus-sign')\">Add money &#43;</span>\n            <!-- Dropdown menu for Credits -->\n            <div class=\"dropdown\" id=\"dropdownCredits\">\n                <div class=\"dropdown-content\">\n                \n                    <form class=\"moneyAddition\" action=\"/addMoney\" method=\"POST\">\n                        <label class=\"username\" >Enter your amount:</label>\n                        <input type=\"number\"  id=\"creditAmount\" placeholder=\"Enter amount\" />\n\n                        <p class=\"username\" id=\"amountError\" class=\"error-message\"></p>\n\n                        <label class=\"username\" id=\"promocodeTitle\" >Enter valid promocode:</label>\n                        <input type=\"text\"  id=\"promoCode\" placeholder=\"Enter promocode\" />\n\n                        <p class=\"username\" id=\"promoCodeError\" class=\"error-message\"></p>\n\n                        <% if (user.credits > 500) { %>\n                            <button id=\"addMoney\" disabled>Apply</button>\n                            <p class=\"username\" class=\"error-message\">You can still get back at it!</p>\n                        <% } else { %>\n                            <button id=\"addMoney\">Apply</button>\n                        <% } %>\n                    </form>\n\n                </div>\n            </div>\n\n            \n        </div>\n        \n\n\n\n\n        <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\" />\n\n\n\n\n\n        <div class=\"information-section\">\n\n            <div class=\"user-information\" onclick=\"toggleDropdown('user-information')\" >\n                \n                <img  class=\"user-menu\" src=\"../images/indexImages/user.png\" alt=\"burgen menu\"   >\n\n                <p class=\"usernameInfo\"> <%= user.username %> </p>\n\n            </div>\n\n\n            <!-- User dropdown -->\n            <div class=\"dropdown\" id=\"dropdownUserInfo\">\n                <div class=\"dropdown-content\">\n                    \n                    <p class=\"username\">Username: <%= user.username %></p>\n                    <p class=\"username\">Email:    <%= user.email %></p>\n                    <p class=\"username\">UniqueID: <%= user.id %></p>\n\n                    \n\n                    <label class=\"username\" for=\"newUsername\" id=\"changeUsernameLabel\">Change Username</label>\n            \n                    <div id=\"changeUsernameSection\" style=\"display: none;\">\n                        <p class=\"username\">The cost of renaming: 5000</p>\n\n                        <form action=\"/nameRenaming\" method=\"POST\">\n                            <input type=\"text\" name=\"newUsername\" id=\"newUsername\" placeholder=\"Enter new username\" /> <br>\n                            \n                        \n                            <% if (user.credits < 5000) { %>\n                                <p class=\"username\" id=\"renamingNameError\">Not enought credits</p>\n                            <% } else { %>    \n                                <button id=\"confirmUsername\" disabled>Confirm</button>\n                            <% } %>     \n                        </form>\n                    </div> \n                    \n                    <form id=\"logoutForm\" action=\"/logout\" method=\"POST\">\n                        <button id=\"logout\">Log out</button>\n                    </form>\n                </div>     \n            </div>\n            \n\n        </div>\n        \n\n\n    </section>\n\n\n\n\n\n\n\n    <div class=\"greetingAndCounter\">\n\n        <div class=\"greetingLabel\">\n            <p id=\"greeting\"></p>\n            <!-- Display username -->\n            <p class=\"usernameholder\">, <%= user.username %>!</p>\n        </div>\n\n        <div id=\"counter\"> 0 </div>   \n\n    </div>   \n\n        \n\n\n\n    \n\n\n    <br> <br>\n    \n\n\n\n\n\n    <div class=\"container\">\n        <input type=\"radio\" name=\"slider\" id=\"item-1\" checked>\n        <input type=\"radio\" name=\"slider\" id=\"item-2\">\n        <input type=\"radio\" name=\"slider\" id=\"item-3\">\n        <input type=\"radio\" name=\"slider\" id=\"item-4\">\n\n      <div class=\"cards\">\n        <label class=\"card\" for=\"item-1\" id=\"song-1\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/wheel-of-fortune.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/fortune-wheel\" method=\"GET\">\n              <button id=\"fortune-wheel\">Play fortune Wheel</button>\n            </form>\n          </label>\n        \n        <label class=\"card\" for=\"item-2\" id=\"song-2\">\n          <img class=\"game-pictures\" src=\"../images/indexImages/slot-machine.png\" alt=\"Game Picture\">\n          <form class=\"game-buttons\" action=\"/games/slot\" method=\"GET\">\n            <button id=\"slots\">Play slot game</button>\n          </form>\n        </label>\n        <label class=\"card\" for=\"item-3\" id=\"song-3\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/blackjack.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action='/games/blackjack' method=\"GET\">\n              <button id=\"black-jack\">Play black jack</button>\n            </form>\n          </label>\n        <label class=\"card\" for=\"item-4\" id=\"song-4\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/roulette.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/roulette\" method=\"GET\">\n                <button id=\"roulette\">Play roulette</button>\n            </form>\n        </label>\n      </div>\n      \n    </div>\n\n\n\n\n\n    <footer>\n        <div class=\"footer-content\">\n            <div class=\"left\">\n                <p>&copy; USI.Casino 2023</p>\n            </div>\n            <div class=\"center\">\n            </div>\n            <div class=\"right\">\n                <p>Email: <a href=\"mailto:support@usi.casino\">support@usi.casino</a></p>\n            </div>\n        </div>\n    </footer>\n\n\n\n\n\n\n\n    \n    \n\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <script src=\"../js/indexPage.js\"> </script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n    <!-- <script src=\"js/indexWheel.js\"></script> -->\n\n    <script>\n        //audioObject.play();\n        // JavaScript function to toggle the active class on the plus sign or user logo\n        function toggleDropdown(elementClass) {\n            var element = document.querySelector('.' + elementClass);\n            element.classList.toggle('active');\n        }\n\n        // JavaScript to toggle visibility of Change Username section\n         document.getElementById('changeUsernameLabel').addEventListener('click', function () {\n            var changeUsernameSection = document.getElementById('changeUsernameSection');\n            changeUsernameSection.style.display = (changeUsernameSection.style.display === 'none' || changeUsernameSection.style.display === '') ? 'flex' : 'none';\n        });\n\n    </script>\n\n\n\n\n    </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>USI-CASINO</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"../css/index.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    \n    <style media=\"screen,print\">\n        @font-face {\n            font-family: 'Inter';\n            src: url(../font/Inter.ttf);\n        }\n    </style>\n</head>\n<body>\n    <audio controls autoplay loop hidden>\n        <source src=\"../music/index-background.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n    </audio>\n    <div id=\"cookieConsentContainer\">\n        <div id=\"cookieConsentOverlay\"></div>\n        <div id=\"cookieConsentBanner\">\n            <p>This site uses cookies. By continuing to use this site, you accept our use of cookies.</p>\n            <p>Also we are not using real money. So, have fun!</p>\n            <button id=\"acceptCookies\">Accept</button>\n        </div>\n    </div>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 31
    ; __append(escapeFn( user.email ))
    ; __append("</h2>\n\n\n\n\n\n\n    <section class=\"top-part\">\n\n\n\n        <div class=\"credits-section\">\n            <p class=\"username\" >Balance: ")
    ; __line = 43
    ; __append(escapeFn( user.credits ))
    ; __append(" \n                <img src=\"../images/usicoin.png\" alt=\"usi coin\" class=\"coin\"/>  \n            </p>\n            <!-- Plus sign -->\n            <span class=\"plus-sign\" onclick=\"toggleDropdown('plus-sign')\">Add money &#43;</span>\n            <!-- Dropdown menu for Credits -->\n            <div class=\"dropdown\" id=\"dropdownCredits\">\n                <div class=\"dropdown-content\">\n                \n                    <form class=\"moneyAddition\" action=\"/addMoney\" method=\"POST\">\n                        <label class=\"username\" >Enter your amount:</label>\n                        <input type=\"number\"  id=\"creditAmount\" placeholder=\"Enter amount\" />\n\n                        <p class=\"username\" id=\"amountError\" class=\"error-message\"></p>\n\n                        <label class=\"username\" id=\"promocodeTitle\" >Enter valid promocode:</label>\n                        <input type=\"text\"  id=\"promoCode\" placeholder=\"Enter promocode\" />\n\n                        <p class=\"username\" id=\"promoCodeError\" class=\"error-message\"></p>\n\n                        ")
    ; __line = 63
    ;  if (user.credits > 500) { 
    ; __append("\n                            <button id=\"addMoney\" disabled>Apply</button>\n                            <p class=\"username\" class=\"error-message\">You can still get back at it!</p>\n                        ")
    ; __line = 66
    ;  } else { 
    ; __append("\n                            <button id=\"addMoney\">Apply</button>\n                        ")
    ; __line = 68
    ;  } 
    ; __append("\n                    </form>\n\n                </div>\n            </div>\n\n            \n        </div>\n        \n\n\n\n\n        <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\" />\n\n\n\n\n\n        <div class=\"information-section\">\n\n            <div class=\"user-information\" onclick=\"toggleDropdown('user-information')\" >\n                \n                <img  class=\"user-menu\" src=\"../images/indexImages/user.png\" alt=\"burgen menu\"   >\n\n                <p class=\"usernameInfo\"> ")
    ; __line = 93
    ; __append(escapeFn( user.username ))
    ; __append(" </p>\n\n            </div>\n\n\n            <!-- User dropdown -->\n            <div class=\"dropdown\" id=\"dropdownUserInfo\">\n                <div class=\"dropdown-content\">\n                    \n                    <p class=\"username\">Username: ")
    ; __line = 102
    ; __append(escapeFn( user.username ))
    ; __append("</p>\n                    <p class=\"username\">Email:    ")
    ; __line = 103
    ; __append(escapeFn( user.email ))
    ; __append("</p>\n                    <p class=\"username\">UniqueID: ")
    ; __line = 104
    ; __append(escapeFn( user.id ))
    ; __append("</p>\n\n                    \n\n                    <label class=\"username\" for=\"newUsername\" id=\"changeUsernameLabel\">Change Username</label>\n            \n                    <div id=\"changeUsernameSection\" style=\"display: none;\">\n                        <p class=\"username\">The cost of renaming: 5000</p>\n\n                        <form action=\"/nameRenaming\" method=\"POST\">\n                            <input type=\"text\" name=\"newUsername\" id=\"newUsername\" placeholder=\"Enter new username\" /> <br>\n                            \n                        \n                            ")
    ; __line = 117
    ;  if (user.credits < 5000) { 
    ; __append("\n                                <p class=\"username\" id=\"renamingNameError\">Not enought credits</p>\n                            ")
    ; __line = 119
    ;  } else { 
    ; __append("    \n                                <button id=\"confirmUsername\" disabled>Confirm</button>\n                            ")
    ; __line = 121
    ;  } 
    ; __append("     \n                        </form>\n                    </div> \n                    \n                    <form id=\"logoutForm\" action=\"/logout\" method=\"POST\">\n                        <button id=\"logout\">Log out</button>\n                    </form>\n                </div>     \n            </div>\n            \n\n        </div>\n        \n\n\n    </section>\n\n\n\n\n\n\n\n    <div class=\"greetingAndCounter\">\n\n        <div class=\"greetingLabel\">\n            <p id=\"greeting\"></p>\n            <!-- Display username -->\n            <p class=\"usernameholder\">, ")
    ; __line = 149
    ; __append(escapeFn( user.username ))
    ; __append("!</p>\n        </div>\n\n        <div id=\"counter\"> 0 </div>   \n\n    </div>   \n\n        \n\n\n\n    \n\n\n    <br> <br>\n    \n\n\n\n\n\n    <div class=\"container\">\n        <input type=\"radio\" name=\"slider\" id=\"item-1\" checked>\n        <input type=\"radio\" name=\"slider\" id=\"item-2\">\n        <input type=\"radio\" name=\"slider\" id=\"item-3\">\n        <input type=\"radio\" name=\"slider\" id=\"item-4\">\n\n      <div class=\"cards\">\n        <label class=\"card\" for=\"item-1\" id=\"song-1\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/wheel-of-fortune.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/fortune-wheel\" method=\"GET\">\n              <button id=\"fortune-wheel\">Play fortune Wheel</button>\n            </form>\n          </label>\n        \n        <label class=\"card\" for=\"item-2\" id=\"song-2\">\n          <img class=\"game-pictures\" src=\"../images/indexImages/slot-machine.png\" alt=\"Game Picture\">\n          <form class=\"game-buttons\" action=\"/games/slot\" method=\"GET\">\n            <button id=\"slots\">Play slot game</button>\n          </form>\n        </label>\n        <label class=\"card\" for=\"item-3\" id=\"song-3\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/blackjack.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action='/games/blackjack' method=\"GET\">\n              <button id=\"black-jack\">Play black jack</button>\n            </form>\n          </label>\n        <label class=\"card\" for=\"item-4\" id=\"song-4\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/roulette.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/roulette\" method=\"GET\">\n                <button id=\"roulette\">Play roulette</button>\n            </form>\n        </label>\n      </div>\n      \n    </div>\n\n\n\n\n\n    <footer>\n        <div class=\"footer-content\">\n            <div class=\"left\">\n                <p>&copy; USI.Casino 2023</p>\n            </div>\n            <div class=\"center\">\n            </div>\n            <div class=\"right\">\n                <p>Email: <a href=\"mailto:support@usi.casino\">support@usi.casino</a></p>\n            </div>\n        </div>\n    </footer>\n\n\n\n\n\n\n\n    \n    \n\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <script src=\"../js/indexPage.js\"> </script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n    <!-- <script src=\"js/indexWheel.js\"></script> -->\n\n    <script>\n        //audioObject.play();\n        // JavaScript function to toggle the active class on the plus sign or user logo\n        function toggleDropdown(elementClass) {\n            var element = document.querySelector('.' + elementClass);\n            element.classList.toggle('active');\n        }\n\n        // JavaScript to toggle visibility of Change Username section\n         document.getElementById('changeUsernameLabel').addEventListener('click', function () {\n            var changeUsernameSection = document.getElementById('changeUsernameSection');\n            changeUsernameSection.style.display = (changeUsernameSection.style.display === 'none' || changeUsernameSection.style.display === '') ? 'flex' : 'none';\n        });\n\n    </script>\n\n\n\n\n    </body>\n</html>")
    ; __line = 258
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_landingpage = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>USI-CASINO</title>\n    <link rel=\"stylesheet\" href=\"../css/landingpage.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    <style media=\"screen,print\">\n      @font-face {\n          font-family: 'Inter';\n          src: url(../font/Inter.ttf);\n      }\n  </style>\n</head>\n\n<body>\n\n    <div class=\"container\">\n\n\n        \n        <div class=\"header\">\n          <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\">\n\n\n          \n\n          \n        </div>\n\n        <p class=\"text\" id=\"capt\" >Welcome to USI Casino: Elevate Your Gaming Experience!</p>\n\n        <p class=\"text\">\n            Are you ready to embark on a thrilling journey where entertainment meets \n            responsible gaming? Look no further! Introducing USI Casino, where we redefine \n            the online gambling experience, allowing you to enjoy your free time without \n            the worry of losing your assets.\n        </p>\n\n\n        <p class=\"text\">Why USI Casino?</p>\n\n\n\n        <div class=\"main\">\n      \n          <div class=\"item\">\n            <img src=\"../images/usicoin.png\" alt=\"picture\">\n            <div class=\"description\">\n              <p class=\"label\">Risk-Free Enjoyment:</p>\n              <p class=\"innertext\">\n                At USI Casino, we prioritize your enjoyment without compromising your assets. Also\n                we use our own curency - USI coins.\n                Say goodbye to the fear of losing big – our platform ensures a risk-free \n                environment for you to indulge in the excitement of gambling.\n              </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/252.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Diverse Gaming Options:</p>\n                <p class=\"innertext\">\n                  Immerse yourself in a world of variety with our selection of four different  \n                  gambling games. Whether you're a fan of classic card games, thrilling slots, or\n                   strategic table games, we have something for everyone. Our diverse portfolio guarantees\n                    endless entertainment tailored to your preferences.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"..//images/landingPage/wheel.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Joyful Mini Games:</p>\n                 <p class=\"innertext\">\n                    Experience the joy of gaming within the game! USI Casino takes it a step further by \n                    integrating delightful mini-games that add an extra layer of fun to your overall gaming\n                    experience. It's not just about winning – it's about relishing every moment.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/antivirus.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Seamless User Experience:</p>\n                <p class=\"innertext\">\n                  Our user-friendly interface ensures a smooth and hassle-free navigation, \n                  allowing you to focus on what matters most – enjoying the games. Whether you're a \n                  seasoned gambler or a first-timer, USI Casino is designed to cater to all levels of expertise.\n                </p>\n            </div>\n          </div>\n\n          <div class=\"item\">\n            <img src=\"../images/landingPage/responsive.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Responsible Gaming:</p>\n                <p class=\"innertext\">\n                  We understand the importance of responsible gaming. USI Casino promotes a safe and accountable \n                  gambling environment. Set your limits, stay in control, and make the most of your leisure time \n                  without any regrets.\n                </p>\n            </div>\n          </div>\n        </div>\n\n\n\n\n        <p class=\"text\">Ready to Roll the Dice? Sign Up Now!</p>\n\n        <p class=\"text\">\n            Join USI Casino today and unlock a world of entertainment like never before. \n            Our platform is designed for enthusiasts who seek the perfect balance between excitement\n             and responsibility. Don't miss out on the fun – sign up now and let the games begin!\n        </p>\n\n        <form action=\"/registration\" method=\"GET\">\n            <button id=\"sign-up\">Sign Up!</button>\n        </form>\n\n\n        <p class=\"text\">USI Casino – Where Entertainment Meets Responsibility.</p>\n\n\n\n\n\n\n\n        <p class=\"dev\">Developers:</p>\n\n        <div class=\"dev-images\">\n\n\n            <img class=\"image\" src=\"../images/landingPage/max.jpg\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/polad.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/nikita.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/masha.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/ivan.png\" alt=\"picture\">\n\n\n        </div>\n        \n\n      </div>\n      \n      \n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>USI-CASINO</title>\n    <link rel=\"stylesheet\" href=\"../css/landingpage.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    <style media=\"screen,print\">\n      @font-face {\n          font-family: 'Inter';\n          src: url(../font/Inter.ttf);\n      }\n  </style>\n</head>\n\n<body>\n\n    <div class=\"container\">\n\n\n        \n        <div class=\"header\">\n          <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\">\n\n\n          \n\n          \n        </div>\n\n        <p class=\"text\" id=\"capt\" >Welcome to USI Casino: Elevate Your Gaming Experience!</p>\n\n        <p class=\"text\">\n            Are you ready to embark on a thrilling journey where entertainment meets \n            responsible gaming? Look no further! Introducing USI Casino, where we redefine \n            the online gambling experience, allowing you to enjoy your free time without \n            the worry of losing your assets.\n        </p>\n\n\n        <p class=\"text\">Why USI Casino?</p>\n\n\n\n        <div class=\"main\">\n      \n          <div class=\"item\">\n            <img src=\"../images/usicoin.png\" alt=\"picture\">\n            <div class=\"description\">\n              <p class=\"label\">Risk-Free Enjoyment:</p>\n              <p class=\"innertext\">\n                At USI Casino, we prioritize your enjoyment without compromising your assets. Also\n                we use our own curency - USI coins.\n                Say goodbye to the fear of losing big – our platform ensures a risk-free \n                environment for you to indulge in the excitement of gambling.\n              </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/252.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Diverse Gaming Options:</p>\n                <p class=\"innertext\">\n                  Immerse yourself in a world of variety with our selection of four different  \n                  gambling games. Whether you're a fan of classic card games, thrilling slots, or\n                   strategic table games, we have something for everyone. Our diverse portfolio guarantees\n                    endless entertainment tailored to your preferences.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"..//images/landingPage/wheel.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Joyful Mini Games:</p>\n                 <p class=\"innertext\">\n                    Experience the joy of gaming within the game! USI Casino takes it a step further by \n                    integrating delightful mini-games that add an extra layer of fun to your overall gaming\n                    experience. It's not just about winning – it's about relishing every moment.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/antivirus.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Seamless User Experience:</p>\n                <p class=\"innertext\">\n                  Our user-friendly interface ensures a smooth and hassle-free navigation, \n                  allowing you to focus on what matters most – enjoying the games. Whether you're a \n                  seasoned gambler or a first-timer, USI Casino is designed to cater to all levels of expertise.\n                </p>\n            </div>\n          </div>\n\n          <div class=\"item\">\n            <img src=\"../images/landingPage/responsive.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Responsible Gaming:</p>\n                <p class=\"innertext\">\n                  We understand the importance of responsible gaming. USI Casino promotes a safe and accountable \n                  gambling environment. Set your limits, stay in control, and make the most of your leisure time \n                  without any regrets.\n                </p>\n            </div>\n          </div>\n        </div>\n\n\n\n\n        <p class=\"text\">Ready to Roll the Dice? Sign Up Now!</p>\n\n        <p class=\"text\">\n            Join USI Casino today and unlock a world of entertainment like never before. \n            Our platform is designed for enthusiasts who seek the perfect balance between excitement\n             and responsibility. Don't miss out on the fun – sign up now and let the games begin!\n        </p>\n\n        <form action=\"/registration\" method=\"GET\">\n            <button id=\"sign-up\">Sign Up!</button>\n        </form>\n\n\n        <p class=\"text\">USI Casino – Where Entertainment Meets Responsibility.</p>\n\n\n\n\n\n\n\n        <p class=\"dev\">Developers:</p>\n\n        <div class=\"dev-images\">\n\n\n            <img class=\"image\" src=\"../images/landingPage/max.jpg\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/polad.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/nikita.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/masha.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/ivan.png\" alt=\"picture\">\n\n\n        </div>\n        \n\n      </div>\n      \n      \n\n</html>")
    ; __line = 160
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"color-scheme\" content=\"light dark\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        \n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Login</b></p>\n\n            <form class=\"log\" action=\"/login\" method=\"POST\">\n\n                \n                <input id=\"email\" name= \"email_login\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\">\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password_login\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\">\n                    <button id=\"toggle-password1\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                </div>\n\n\n                <% if(errorMessage) { %>\n                    <p class=\"error-message\"><%= errorMessage %></p>\n                <% } %>\n                \n                <button id=\"login\">Login</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/registration\" method=\"GET\">\n                <button id=\"create\">Don't have an account? Sign up</button>\n            </form>\n\n\n            <form  action=\"/landingpage\" method=\"GET\">\n                <button id=\"create\">About Us</button>\n            </form>\n        </div>\n        \n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          var passwordInput = document.getElementById('password');\n          var toggleButton = document.getElementById('toggle-password1');\n      \n          if (passwordInput.type === 'password') {\n            passwordInput.type = 'text';\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"color-scheme\" content=\"light dark\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        \n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Login</b></p>\n\n            <form class=\"log\" action=\"/login\" method=\"POST\">\n\n                \n                <input id=\"email\" name= \"email_login\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\">\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password_login\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\">\n                    <button id=\"toggle-password1\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                </div>\n\n\n                ")
    ; __line = 36
    ;  if(errorMessage) { 
    ; __append("\n                    <p class=\"error-message\">")
    ; __line = 37
    ; __append(escapeFn( errorMessage ))
    ; __append("</p>\n                ")
    ; __line = 38
    ;  } 
    ; __append("\n                \n                <button id=\"login\">Login</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/registration\" method=\"GET\">\n                <button id=\"create\">Don't have an account? Sign up</button>\n            </form>\n\n\n            <form  action=\"/landingpage\" method=\"GET\">\n                <button id=\"create\">About Us</button>\n            </form>\n        </div>\n        \n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          var passwordInput = document.getElementById('password');\n          var toggleButton = document.getElementById('toggle-password1');\n      \n          if (passwordInput.type === 'password') {\n            passwordInput.type = 'text';\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>")
    ; __line = 71
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_registration = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <meta name=\"color-scheme\" content=\"light dark\">\n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Register</b></p>\n\n            <form class=\"log\" action=\"/create\" method=\"POST\">\n\n                \n                <input id=\"username\" name= \"username\" type=\"text\" required  title=\"Enter a valid title\" placeholder=\"Username\" value=\"<%= username || '' %>\">\n                \n                <% if (usernameTaken) { %>\n                    <p class=\"error-message\">Username is already in use</p>\n                <% } %>\n\n\n                <input id=\"email\" name= \"email\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\" value=\"<%= email || '' %>\">\n\n                <% if (emailTaken) { %>\n                    <p class=\"error-message\">Email is already in use</p>\n                <% } %>\n\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\" value=\"<%= password || '' %>\">\n                    <button id=\"toggle-password\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                    <input id=\"confirm-password\" name=\"confirm_password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Confirm password\">\n                </div>\n\n                <% if (passwordMismatch) { %>\n                    <p class=\"error-message\">Passwords are not the same</p>\n                <% } %>\n\n\n                \n                <button id=\"login\">Register</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/login\" method=\"GET\">\n                <button id=\"create\">Already have an account? Login</button>\n            </form>\n        </div>\n\n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          let passwordInput = document.getElementById('password');\n          let toggleButton = document.getElementById('toggle-password');\n          let confirmPass = document.getElementById('confirm-password');\n      \n          if (passwordInput.type === 'password' && confirmPass.type ==='password') {\n            passwordInput.type = 'text';\n            confirmPass.type ='text'\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            confirmPass.type ='password'\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <meta name=\"color-scheme\" content=\"light dark\">\n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Register</b></p>\n\n            <form class=\"log\" action=\"/create\" method=\"POST\">\n\n                \n                <input id=\"username\" name= \"username\" type=\"text\" required  title=\"Enter a valid title\" placeholder=\"Username\" value=\"")
    ; __line = 27
    ; __append(escapeFn( username || '' ))
    ; __append("\">\n                \n                ")
    ; __line = 29
    ;  if (usernameTaken) { 
    ; __append("\n                    <p class=\"error-message\">Username is already in use</p>\n                ")
    ; __line = 31
    ;  } 
    ; __append("\n\n\n                <input id=\"email\" name= \"email\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\" value=\"")
    ; __line = 34
    ; __append(escapeFn( email || '' ))
    ; __append("\">\n\n                ")
    ; __line = 36
    ;  if (emailTaken) { 
    ; __append("\n                    <p class=\"error-message\">Email is already in use</p>\n                ")
    ; __line = 38
    ;  } 
    ; __append("\n\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\" value=\"")
    ; __line = 42
    ; __append(escapeFn( password || '' ))
    ; __append("\">\n                    <button id=\"toggle-password\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                    <input id=\"confirm-password\" name=\"confirm_password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Confirm password\">\n                </div>\n\n                ")
    ; __line = 47
    ;  if (passwordMismatch) { 
    ; __append("\n                    <p class=\"error-message\">Passwords are not the same</p>\n                ")
    ; __line = 49
    ;  } 
    ; __append("\n\n\n                \n                <button id=\"login\">Register</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/login\" method=\"GET\">\n                <button id=\"create\">Already have an account? Login</button>\n            </form>\n        </div>\n\n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          let passwordInput = document.getElementById('password');\n          let toggleButton = document.getElementById('toggle-password');\n          let confirmPass = document.getElementById('confirm-password');\n      \n          if (passwordInput.type === 'password' && confirmPass.type ==='password') {\n            passwordInput.type = 'text';\n            confirmPass.type ='text'\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            confirmPass.type ='password'\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>")
    ; __line = 82
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_roulette = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>Roulette 2.0\n    </title>\n    <link rel=\"stylesheet\" href=\"../css/roulette.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n   \n</head>\n<body>\n    \n    <div class=\"roulettespiner\">\n        <img src=\"../public/images/rouletteImages/roulette_1.jpg\" alt=\"\">\n        <img class=\"actualSpinner\" src=\"../public/images/rouletteImages/roulette_2.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_3.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_4.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_5.png\" alt=\"\">\n    </div>\n\n\n    <form action=\"/home\" method=\"GET\">\n        <button class=\"homepage\">HOME</button>\n    </form>\n\n    <h2 class=\"usernameholder\" style=\"display: none;\"><%= user.username %></h2>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2>\n    <h2 class=\"message\" style=\"color: white;\"></h2>\n    <br>\n    <div style=\"color: white;\"> <p>Table history:</p> </div>\n    <div class=\"history\"></div>\n    <br>\n    <div id=\"counter\" style=\"color: white; font-size: 16pt;\" > 345678 </div>\n    <br>\n\n    \n    <div class=\"result\">\n        <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\"><%= user.credits %></span></p>\n        <p id=\"winNumber\"></p>\n        <p id=\"winAmount\"></p>\n    </div>\n\n    <div class=\"gamestuffs\">\n        <%- include(\"./include/SoloWheel\")%>\n        <div class=\"roulette-table\">\n            <button class=\"chips\" id=\"one\">1</button>\n            <button class=\"chips\" id=\"five\">5</button>\n            <button class=\"chips\" id=\"ten\">10</button>\n            <button class=\"chips\" id=\"twenty\">20</button>\n            <button class=\"chips\" id=\"fifty\">50</button>\n    \n            \n    \n            \n            <table id=\"theBettingTableAsAWhole\">\n                <tr id=\"Hello\">\n                    <td colspan=\"14\" id=\"PlaceBets\">Place Your Bets <br> Your total bet: <span id=\"yourmoneywhichisnowmine\">0</span>\n                    </td>\n                </tr>\n                <tr id=\"_NotTopLine\">\n                    <td rowspan=\"3\" class=\"green\" id=\"_0\"><span id=\"_0\">0</span><div id=\"_0\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_3\"><span id=\"_3\">3</span><div id=\"_3\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_6\"><span id=\"_6\">6</span><div id=\"_6\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_9\"><span id=\"_9\">9</span><div id=\"_9\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_12\"><span id=\"_12\">12</span><div id=\"_12\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_15\"><span id=\"_15\">15</span><div id=\"_15\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_18\"><span id=\"_18\">18</span><div id=\"_18\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_21\"><span id=\"_21\">21</span><div id=\"_21\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_24\"><span id=\"_24\">24</span><div id=\"_24\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_27\"><span id=\"_27\">27</span><div id=\"_27\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_30\"><span id=\"_30\">30</span><div id=\"_30\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_33\"><span id=\"_33\">33</span><div id=\"_33\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_36\"><span id=\"_36\">36</span><div id=\"_36\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_TopLine\"><span id=\"_TopLine\">1Line</span><div id=\"_TopLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotCenterLine\">\n                    <td class=\"black\" id=\"_2\"><span id=\"_2\">2</span><div id=\"_2\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_5\"><span id=\"_5\">5</span><div id=\"_5\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_8\"><span id=\"_8\">8</span><div id=\"_8\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_11\"><span id=\"_11\">11</span><div id=\"_11\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_14\"><span id=\"_14\">14</span><div id=\"_14\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_17\"><span id=\"_17\">17</span><div id=\"_17\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_20\"><span id=\"_20\">20</span><div id=\"_20\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_23\"><span id=\"_23\">23</span><div id=\"_23\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_26\"><span id=\"_26\">26</span><div id=\"_26\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_29\"><span id=\"_29\">29</span><div id=\"_29\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_32\"><span id=\"_32\">32</span><div id=\"_32\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_35\"><span id=\"_35\">35</span><div id=\"_35\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_CenterLine\"><span id=\"_CenterLine\">2Line</span><div id=\"_CenterLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotBottomLine\">\n                    <td class=\"red\" id=\"_1\"><span id=\"_1\">1</span><div id=\"_1\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_4\"><span id=\"_4\">4</span><div id=\"_4\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_7\"><span id=\"_7\">7</span><div id=\"_7\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_10\"><span id=\"_10\">10</span><div id=\"_10\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_13\"><span id=\"_13\">13</span><div id=\"_13\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_16\"><span id=\"_16\">16</span><div id=\"_16\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_19\"><span id=\"_19\">19</span><div id=\"_19\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_22\"><span id=\"_22\">22</span><div id=\"_22\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_25\"><span id=\"_25\">25</span><div id=\"_25\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_28\"><span id=\"_28\">28</span><div id=\"_28\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_31\"><span id=\"_31\">31</span><div id=\"_31\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_34\"><span id=\"_34\">34</span><div id=\"_34\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_BottomLine\"><span id=\"_BottomLine\">3Line</span><div id=\"_BottomLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_twelves\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_firstTwelve\"><span id=\"_firstTwelve\">1st 12</span><div id=\"_firstTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_secondTwelve\"><span id=\"_secondTwelve\">2nd 12</span><div id=\"_secondTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_thirdTwelve\"><span id=\"_thirdTwelve\">3rd 12</span><div id=\"_thirdTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_oneToOneBets\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_oneToEighteen\"><span id=\"_oneToEighteen\">1 to 18</span><div id=\"_oneToEighteen\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_EVEN\"><span id=\"_EVEN\">EVEN</span><div id=\"_EVEN\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"red\" id=\"_RED\"><span id=\"_RED\">RED</span><div id=\"_RED\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"black\" id=\"_BLACK\"><span id=\"_BLACK\">BLACK</span><div id=\"_BLACK\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ODD\"><span id=\"_ODD\">ODD</span><div id=\"_ODD\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ninteenToThreeSix\"><span id=\"_ninteenToThreeSix\">19 to 36</span><div id=\"_ninteenToThreeSix\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n            </table>\n            </div>\n    </div>\n\n<script src=\"../socket.io/socket.io.js\"></script>\n<script src=\"../js/checkClick.js\"></script>\n<script src=\"../js/ws-client-roullette.js\"></script>\n<script src=\"../js/ejs.min.js\"></script>\n<script src=\"../js/styleR.js\"></script>\n<script src=\"../js/api-client.js\"></script>\n<script src=\"../js/views.js\"></script>\n<script src=\"../js/inactivityTimer.js\"> </script>\n<!-- <script>\n    const updatedUserCredits = updated_user.credits;\n    const winningAmount = winningAmount;\n    const randomNumber = randomNumber;\n\n    document.getElementById(\"creditsDisplay\").textContent = updatedUserCredits;\n    document.getElementById(\"winAmount\").textContent = winningAmount;\n    document.getElementById(\"winNumber\").textContent = randomNumber;\n</script> -->\n\n</body>\n</html>\n\n    \n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>Roulette 2.0\n    </title>\n    <link rel=\"stylesheet\" href=\"../css/roulette.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n   \n</head>\n<body>\n    \n    <div class=\"roulettespiner\">\n        <img src=\"../public/images/rouletteImages/roulette_1.jpg\" alt=\"\">\n        <img class=\"actualSpinner\" src=\"../public/images/rouletteImages/roulette_2.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_3.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_4.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_5.png\" alt=\"\">\n    </div>\n\n\n    <form action=\"/home\" method=\"GET\">\n        <button class=\"homepage\">HOME</button>\n    </form>\n\n    <h2 class=\"usernameholder\" style=\"display: none;\">")
    ; __line = 30
    ; __append(escapeFn( user.username ))
    ; __append("</h2>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 31
    ; __append(escapeFn( user.email ))
    ; __append("</h2>\n    <h2 class=\"message\" style=\"color: white;\"></h2>\n    <br>\n    <div style=\"color: white;\"> <p>Table history:</p> </div>\n    <div class=\"history\"></div>\n    <br>\n    <div id=\"counter\" style=\"color: white; font-size: 16pt;\" > 345678 </div>\n    <br>\n\n    \n    <div class=\"result\">\n        <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\">")
    ; __line = 42
    ; __append(escapeFn( user.credits ))
    ; __append("</span></p>\n        <p id=\"winNumber\"></p>\n        <p id=\"winAmount\"></p>\n    </div>\n\n    <div class=\"gamestuffs\">\n        ")
    ; __line = 48
    ; __append( include("./include/SoloWheel"))
    ; __append("\n        <div class=\"roulette-table\">\n            <button class=\"chips\" id=\"one\">1</button>\n            <button class=\"chips\" id=\"five\">5</button>\n            <button class=\"chips\" id=\"ten\">10</button>\n            <button class=\"chips\" id=\"twenty\">20</button>\n            <button class=\"chips\" id=\"fifty\">50</button>\n    \n            \n    \n            \n            <table id=\"theBettingTableAsAWhole\">\n                <tr id=\"Hello\">\n                    <td colspan=\"14\" id=\"PlaceBets\">Place Your Bets <br> Your total bet: <span id=\"yourmoneywhichisnowmine\">0</span>\n                    </td>\n                </tr>\n                <tr id=\"_NotTopLine\">\n                    <td rowspan=\"3\" class=\"green\" id=\"_0\"><span id=\"_0\">0</span><div id=\"_0\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_3\"><span id=\"_3\">3</span><div id=\"_3\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_6\"><span id=\"_6\">6</span><div id=\"_6\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_9\"><span id=\"_9\">9</span><div id=\"_9\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_12\"><span id=\"_12\">12</span><div id=\"_12\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_15\"><span id=\"_15\">15</span><div id=\"_15\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_18\"><span id=\"_18\">18</span><div id=\"_18\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_21\"><span id=\"_21\">21</span><div id=\"_21\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_24\"><span id=\"_24\">24</span><div id=\"_24\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_27\"><span id=\"_27\">27</span><div id=\"_27\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_30\"><span id=\"_30\">30</span><div id=\"_30\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_33\"><span id=\"_33\">33</span><div id=\"_33\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_36\"><span id=\"_36\">36</span><div id=\"_36\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_TopLine\"><span id=\"_TopLine\">1Line</span><div id=\"_TopLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotCenterLine\">\n                    <td class=\"black\" id=\"_2\"><span id=\"_2\">2</span><div id=\"_2\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_5\"><span id=\"_5\">5</span><div id=\"_5\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_8\"><span id=\"_8\">8</span><div id=\"_8\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_11\"><span id=\"_11\">11</span><div id=\"_11\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_14\"><span id=\"_14\">14</span><div id=\"_14\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_17\"><span id=\"_17\">17</span><div id=\"_17\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_20\"><span id=\"_20\">20</span><div id=\"_20\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_23\"><span id=\"_23\">23</span><div id=\"_23\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_26\"><span id=\"_26\">26</span><div id=\"_26\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_29\"><span id=\"_29\">29</span><div id=\"_29\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_32\"><span id=\"_32\">32</span><div id=\"_32\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_35\"><span id=\"_35\">35</span><div id=\"_35\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_CenterLine\"><span id=\"_CenterLine\">2Line</span><div id=\"_CenterLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotBottomLine\">\n                    <td class=\"red\" id=\"_1\"><span id=\"_1\">1</span><div id=\"_1\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_4\"><span id=\"_4\">4</span><div id=\"_4\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_7\"><span id=\"_7\">7</span><div id=\"_7\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_10\"><span id=\"_10\">10</span><div id=\"_10\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_13\"><span id=\"_13\">13</span><div id=\"_13\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_16\"><span id=\"_16\">16</span><div id=\"_16\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_19\"><span id=\"_19\">19</span><div id=\"_19\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_22\"><span id=\"_22\">22</span><div id=\"_22\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_25\"><span id=\"_25\">25</span><div id=\"_25\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_28\"><span id=\"_28\">28</span><div id=\"_28\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_31\"><span id=\"_31\">31</span><div id=\"_31\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_34\"><span id=\"_34\">34</span><div id=\"_34\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_BottomLine\"><span id=\"_BottomLine\">3Line</span><div id=\"_BottomLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_twelves\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_firstTwelve\"><span id=\"_firstTwelve\">1st 12</span><div id=\"_firstTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_secondTwelve\"><span id=\"_secondTwelve\">2nd 12</span><div id=\"_secondTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_thirdTwelve\"><span id=\"_thirdTwelve\">3rd 12</span><div id=\"_thirdTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_oneToOneBets\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_oneToEighteen\"><span id=\"_oneToEighteen\">1 to 18</span><div id=\"_oneToEighteen\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_EVEN\"><span id=\"_EVEN\">EVEN</span><div id=\"_EVEN\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"red\" id=\"_RED\"><span id=\"_RED\">RED</span><div id=\"_RED\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"black\" id=\"_BLACK\"><span id=\"_BLACK\">BLACK</span><div id=\"_BLACK\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ODD\"><span id=\"_ODD\">ODD</span><div id=\"_ODD\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ninteenToThreeSix\"><span id=\"_ninteenToThreeSix\">19 to 36</span><div id=\"_ninteenToThreeSix\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n            </table>\n            </div>\n    </div>\n\n<script src=\"../socket.io/socket.io.js\"></script>\n<script src=\"../js/checkClick.js\"></script>\n<script src=\"../js/ws-client-roullette.js\"></script>\n<script src=\"../js/ejs.min.js\"></script>\n<script src=\"../js/styleR.js\"></script>\n<script src=\"../js/api-client.js\"></script>\n<script src=\"../js/views.js\"></script>\n<script src=\"../js/inactivityTimer.js\"> </script>\n<!-- <script>\n    const updatedUserCredits = updated_user.credits;\n    const winningAmount = winningAmount;\n    const randomNumber = randomNumber;\n\n    document.getElementById(\"creditsDisplay\").textContent = updatedUserCredits;\n    document.getElementById(\"winAmount\").textContent = winningAmount;\n    document.getElementById(\"winNumber\").textContent = randomNumber;\n</script> -->\n\n</body>\n</html>\n\n    \n")
    ; __line = 151
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_slot_machine = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n\n<head>\n    <title>Slot Machine</title>\n    <link rel=\"stylesheet\" href=\"../css/slot_machine.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n\n    <meta charset=\"UTF-8\" />\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style media=\"screen, print\"></style>\n    <script src=\"../js/slot_machine.js\"></script>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body onload=\"slot()\">\n    <h2 class=\"usernameholder\" style=\"display: none;\"><%= user.username %></h2>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2>\n\n\n    <div id=\"app\">\n        <h2 id=\"message\" style=\"color: white;\">\n                \n        </h2>\n        <div class=\"doors\">\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n        </div>\n\n        <div class=\"buttons\">\n         \n            <form id=\"betForm\" action=\"/casino/slot/bet\" method=\"POST\">\n                <p style=\"color: rgb(218, 75, 32);\">Win / Loss <span id=\"addedCreditsDisplay\">...</span></p>\n                <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\"><%= user.credits %></span></p>     \n                <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"0.5\" step=\"0.1\" max=\"100\" placeholder=\"Enter bet\">\n                <button type=\"button\" id=\"playButton\">Play</button>\n                <button type=\"button\" id=\"autoPlayButton\">Auto</button>\n            </form>\n\n            <form action=\"/home\" method=\"GET\">\n                <button class=\"homepage\">HOME</button>\n            </form>\n        \n        </div>\n\n\n        \n    </div>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n\n</body>\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n\n<head>\n    <title>Slot Machine</title>\n    <link rel=\"stylesheet\" href=\"../css/slot_machine.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n\n    <meta charset=\"UTF-8\" />\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style media=\"screen, print\"></style>\n    <script src=\"../js/slot_machine.js\"></script>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body onload=\"slot()\">\n    <h2 class=\"usernameholder\" style=\"display: none;\">")
    ; __line = 20
    ; __append(escapeFn( user.username ))
    ; __append("</h2>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 21
    ; __append(escapeFn( user.email ))
    ; __append("</h2>\n\n\n    <div id=\"app\">\n        <h2 id=\"message\" style=\"color: white;\">\n                \n        </h2>\n        <div class=\"doors\">\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n        </div>\n\n        <div class=\"buttons\">\n         \n            <form id=\"betForm\" action=\"/casino/slot/bet\" method=\"POST\">\n                <p style=\"color: rgb(218, 75, 32);\">Win / Loss <span id=\"addedCreditsDisplay\">...</span></p>\n                <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\">")
    ; __line = 52
    ; __append(escapeFn( user.credits ))
    ; __append("</span></p>     \n                <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"0.5\" step=\"0.1\" max=\"100\" placeholder=\"Enter bet\">\n                <button type=\"button\" id=\"playButton\">Play</button>\n                <button type=\"button\" id=\"autoPlayButton\">Auto</button>\n            </form>\n\n            <form action=\"/home\" method=\"GET\">\n                <button class=\"homepage\">HOME</button>\n            </form>\n        \n        </div>\n\n\n        \n    </div>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n\n</body>\n\n</html>")
    ; __line = 71
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_blackjack = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Black Jack</title>\n        <link rel=\"stylesheet\" href=\"../css/black-jack.css\">\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n\n\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'BJF';\n                src: url(../font/BJF.ttf);\n            }\n        </style>\n       \n    </head>\n<body>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2> \n    <form>\n        <p class=\"creditholder\" style=\"color: #e0aa35;\">Your Credits: <span id=\"credits\"><%= user.credits %></span></h2> \n        <p class=\"inputholder\" style=\"color: #e0aa35;\">Your Bet: <input type=\"number\" id=\"betInput\" required min=\"1\" step=\"1\"></p>\n        <h2 class=\"usernameholder\" style=\"display: block;\"> Dear <%= user.username %>, please place your bet.</h2> \n        <button id=\"start\">Start Game</button>\n    </form>\n    <h2 id=\"message\">\n\n    </h2>\n    <div id=\"counter\" style=\" font-size: 16pt;\" >  </div>\n\n    <div id=\"game-block\">\n        <h2>Dealer: <span id=\"dealer-sum\"></span></h2>\n        <div id=\"dealer-cards\">\n        </div>\n\n        <h2>You: <span id=\"your-sum\"></span></h2>\n\n        <div id=\"your-cards\">\n        </div>\n\n        <br>\n\n        <button id=\"hit\">Hit</button>\n        <button id=\"stay\">Stay</button>\n        <form action=\"/home\" method=\"GET\">\n            <button id=\"black-jack\">Home</button>\n        </form>\n    </div>\n\n    <script src=\"../socket.io/socket.io.js\"></script>\n    <script src=\"../js/ws-client-blackjack.js\"></script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Black Jack</title>\n        <link rel=\"stylesheet\" href=\"../css/black-jack.css\">\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n\n\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'BJF';\n                src: url(../font/BJF.ttf);\n            }\n        </style>\n       \n    </head>\n<body>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 21
    ; __append(escapeFn( user.email ))
    ; __append("</h2> \n    <form>\n        <p class=\"creditholder\" style=\"color: #e0aa35;\">Your Credits: <span id=\"credits\">")
    ; __line = 23
    ; __append(escapeFn( user.credits ))
    ; __append("</span></h2> \n        <p class=\"inputholder\" style=\"color: #e0aa35;\">Your Bet: <input type=\"number\" id=\"betInput\" required min=\"1\" step=\"1\"></p>\n        <h2 class=\"usernameholder\" style=\"display: block;\"> Dear ")
    ; __line = 25
    ; __append(escapeFn( user.username ))
    ; __append(", please place your bet.</h2> \n        <button id=\"start\">Start Game</button>\n    </form>\n    <h2 id=\"message\">\n\n    </h2>\n    <div id=\"counter\" style=\" font-size: 16pt;\" >  </div>\n\n    <div id=\"game-block\">\n        <h2>Dealer: <span id=\"dealer-sum\"></span></h2>\n        <div id=\"dealer-cards\">\n        </div>\n\n        <h2>You: <span id=\"your-sum\"></span></h2>\n\n        <div id=\"your-cards\">\n        </div>\n\n        <br>\n\n        <button id=\"hit\">Hit</button>\n        <button id=\"stay\">Stay</button>\n        <form action=\"/home\" method=\"GET\">\n            <button id=\"black-jack\">Home</button>\n        </form>\n    </div>\n\n    <script src=\"../socket.io/socket.io.js\"></script>\n    <script src=\"../js/ws-client-blackjack.js\"></script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n</html>")
    ; __line = 56
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_fortune_wheel = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"color-scheme\" content=\"light dark\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Wheel of Fortune</title>\n  <link rel=\"stylesheet\" href=\"/css/fortune_wheel.css\" />\n  <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n  <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n  <link rel=\"stylesheet\" href=\"/css/index.css\" />\n  <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body>\n  <audio id=\"backgroundAudio\" controls autoplay loop hidden >\n    <source src=\"../music/Wheel of Fortune Closing Theme.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n  <script>\n    var audio = document.getElementById(\"backgroundAudio\");\n    audio.volume = 0.1;\n  </script>\n  <h2 class=\"usernameholder\" style=\"display: none;\">\n    <%= user.username %>\n  </h2>\n  <h2 class=\"emailholder\" style=\"display: none;\">\n    <%= user.email %>\n  </h2>\n  <div class=\"number-slots\" style=\"display: none;\">\n    <div class=\"group\">\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n    </div>\n\n    <h2 class=\"js-announcement announcement\"></h2>\n\n    <button class=\"new-btn1\" id=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button>\n    <button class=\"slotButton\">\n      Press to Start\n    </button>\n  </div>\n\n  <!-- <button class=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button> -->\n\n  <div class=\"container-board\" style=\"display: none;\">\n    <div class=\"guess-board\">\n\n      <div class=\"question-container\">\n        <p class=\"question-tiles\"></p>\n      </div>\n\n      <div class=\"guess-tiles-container\"></div>\n    </div>\n\n    <div class=\"guess-game-buttons\">\n      <form action=\"/incrementCredits\" method=\"POST\"></form>\n      <form action=\"/decrementCredits\" method=\"POST\"></form>\n      <div class=\"game-btn guess-container\">\n        <input type=\"text\" id=\"guessInput\" name=\"guessInput\" required placeholder=\"Guess letter\">\n        <div class=\"guess-btn\">Reveal</div>\n      </div>\n      <div id=\"winning-message\" class=\"message-win\" style=\"display: none\">\n        <p class=\"message-text\" id=\"end-message\"></p>\n        <button class=\"new-btn\">Go back to Wheel</button>\n        <!-- <button class=\"back-btn\">Go back to Main Menu</button> -->\n      </div>\n      <div class=\"game-btn answer-container\">\n        <input type=\"text\" id=\"answerInput\" name=\"answerInput\" required placeholder=\"Give answer\">\n        <div class=\"answer-btn\">Check</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-game\">\n\n    <div class=\"interface-container\">\n      <div class=\"credits-container\">\n        <div class=\"start-credits-window\" id=\"startCreditsWindow\">\n          <p class=\"start-credits\" id=\"startCredits\"></p>\n          <p id=\"spinCounter\" style=\"color: rgb(29, 180, 194);\">Spins: 0</p>\n        </div>\n        <p>Current Credits: <span id=\"creditAmount\" style=\"color: rgb(19, 229, 19);\">\n            <%= user.credits %>\n          </span></p>\n        <div class=\"message-window\" id=\"messageWindow\">\n          <p class=\"message-text\" id=\"messageText\"></p>\n        </div>\n      </div>\n\n      <div class=\"bet-container\">\n        <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"10\" step=\"10\" required\n          placeholder=\"Bet\">\n      </div>\n\n      <div id=\"wheelContainer\">\n        <img src=\"/images/wheelborder.png\" alt=\"wheel border\" id=\"wheelborder\">\n        <canvas id=\"wheel\" width=\"430\" height=\"430\"></canvas>\n        <div id=\"spin\">SPIN</div>\n      </div>\n    </div>\n  </div>\n\n\n  </div>\n\n  <form action=\"/home\" method=\"GET\">\n    <button id=\"homeButton\" class=\"homepage\">HOME</button>\n  </form>\n\n  <div id=\"counter\" style=\"display: none;\"> 0 </div>\n\n\n\n\n\n\n  <script defer src=\"/js/fortune_wheel.js\"></script>\n  <script src=\"/socket.io/socket.io.js\"></script>\n  <script src=\"/js/ws-client.js\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.6.4.min.js\"></script>\n  <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"color-scheme\" content=\"light dark\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Wheel of Fortune</title>\n  <link rel=\"stylesheet\" href=\"/css/fortune_wheel.css\" />\n  <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n  <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n  <link rel=\"stylesheet\" href=\"/css/index.css\" />\n  <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body>\n  <audio id=\"backgroundAudio\" controls autoplay loop hidden >\n    <source src=\"../music/Wheel of Fortune Closing Theme.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n  <script>\n    var audio = document.getElementById(\"backgroundAudio\");\n    audio.volume = 0.1;\n  </script>\n  <h2 class=\"usernameholder\" style=\"display: none;\">\n    ")
    ; __line = 26
    ; __append(escapeFn( user.username ))
    ; __append("\n  </h2>\n  <h2 class=\"emailholder\" style=\"display: none;\">\n    ")
    ; __line = 29
    ; __append(escapeFn( user.email ))
    ; __append("\n  </h2>\n  <div class=\"number-slots\" style=\"display: none;\">\n    <div class=\"group\">\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n      <div class=\"fake-reel\"></div>\n    </div>\n\n    <div class=\"group\">\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n      <div class=\"reel\"></div>\n    </div>\n\n    <h2 class=\"js-announcement announcement\"></h2>\n\n    <button class=\"new-btn1\" id=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button>\n    <button class=\"slotButton\">\n      Press to Start\n    </button>\n  </div>\n\n  <!-- <button class=\"new-btn1\" style=\"display: none;\">Go back to Wheel</button> -->\n\n  <div class=\"container-board\" style=\"display: none;\">\n    <div class=\"guess-board\">\n\n      <div class=\"question-container\">\n        <p class=\"question-tiles\"></p>\n      </div>\n\n      <div class=\"guess-tiles-container\"></div>\n    </div>\n\n    <div class=\"guess-game-buttons\">\n      <form action=\"/incrementCredits\" method=\"POST\"></form>\n      <form action=\"/decrementCredits\" method=\"POST\"></form>\n      <div class=\"game-btn guess-container\">\n        <input type=\"text\" id=\"guessInput\" name=\"guessInput\" required placeholder=\"Guess letter\">\n        <div class=\"guess-btn\">Reveal</div>\n      </div>\n      <div id=\"winning-message\" class=\"message-win\" style=\"display: none\">\n        <p class=\"message-text\" id=\"end-message\"></p>\n        <button class=\"new-btn\">Go back to Wheel</button>\n        <!-- <button class=\"back-btn\">Go back to Main Menu</button> -->\n      </div>\n      <div class=\"game-btn answer-container\">\n        <input type=\"text\" id=\"answerInput\" name=\"answerInput\" required placeholder=\"Give answer\">\n        <div class=\"answer-btn\">Check</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-game\">\n\n    <div class=\"interface-container\">\n      <div class=\"credits-container\">\n        <div class=\"start-credits-window\" id=\"startCreditsWindow\">\n          <p class=\"start-credits\" id=\"startCredits\"></p>\n          <p id=\"spinCounter\" style=\"color: rgb(29, 180, 194);\">Spins: 0</p>\n        </div>\n        <p>Current Credits: <span id=\"creditAmount\" style=\"color: rgb(19, 229, 19);\">\n            ")
    ; __line = 96
    ; __append(escapeFn( user.credits ))
    ; __append("\n          </span></p>\n        <div class=\"message-window\" id=\"messageWindow\">\n          <p class=\"message-text\" id=\"messageText\"></p>\n        </div>\n      </div>\n\n      <div class=\"bet-container\">\n        <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"10\" step=\"10\" required\n          placeholder=\"Bet\">\n      </div>\n\n      <div id=\"wheelContainer\">\n        <img src=\"/images/wheelborder.png\" alt=\"wheel border\" id=\"wheelborder\">\n        <canvas id=\"wheel\" width=\"430\" height=\"430\"></canvas>\n        <div id=\"spin\">SPIN</div>\n      </div>\n    </div>\n  </div>\n\n\n  </div>\n\n  <form action=\"/home\" method=\"GET\">\n    <button id=\"homeButton\" class=\"homepage\">HOME</button>\n  </form>\n\n  <div id=\"counter\" style=\"display: none;\"> 0 </div>\n\n\n\n\n\n\n  <script defer src=\"/js/fortune_wheel.js\"></script>\n  <script src=\"/socket.io/socket.io.js\"></script>\n  <script src=\"/js/ws-client.js\"></script>\n  <script src=\"https://code.jquery.com/jquery-3.6.4.min.js\"></script>\n  <script src=\"../js/inactivityTimer.js\"> </script>\n</body>\n\n</html>")
    ; __line = 137
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_include_SoloWheel = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<style>\n  \n  .image-container {\n    position: relative;\n    width: 760px;\n    height: 760px;\n    margin: 0;\n    padding: 0;\n\n    scale: 0.5;\n  }\n  \n  .image {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  \n  .image:nth-child(2) {\n    z-index: 1; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(3) {\n    z-index: 2; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(4) {\n    z-index: 3; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(5) {\n    z-index: 4; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(6) {\n    width: 30px;\n    height: 30px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .square {\n    rotate: 45deg;\n    position: absolute;\n    top: 150px;\n    left: 150px;\n    scale: 0.95;\n    /* transform: translate(-50%, -50%); */\n    width: 450px;\n    height: 450px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  #TheBall {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 30px;\n    height: 30px;\n    scale: 1.3;\n    border-radius: 50%;\n  }\n  \n  /* @keyframes spin2 {\n    0% {\n      transform: rotate(var(--my-start-degree-ball));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree-ball));\n    }\n  } \n  \n  @keyframes spin {\n    0% {\n      transform: rotate(var(--my-start-degree));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree)); \n    }\n  }\n  \n  \n  .theSpinOneanim {\n    animation: spin 10s cubic-bezier(0,.84,.55,.98) forwards; \n  }\n\n  .squareanim {\n    animation: spin2 10s cubic-bezier(0,.84,.55,.98) forwards;\n  }\n  */\n</style>\n\n<div class=\"image-container\">\n  <img src=\"/images/rouletteImages/roulette_1.png\" alt=\"Image 1\" class=\"image\" id=\"ThefirstOne\">\n  <img src=\"/images/rouletteImages/roulette_2.png\" alt=\"Image 2\" class=\"image theSpinOneanim\" id=\"theSpinOne\"> \n  <img src=\"/images/rouletteImages/roulette_3.png\" alt=\"Image 3\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_4.png\" alt=\"Image 4\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_5.png\" alt=\"Image 5\" class=\"image\">\n  <div id=\"TheBallOne\" class=\"square squareanim\">\n    <img src=\"/images/rouletteImages/ball.png\" alt=\"Image 6\" class=\"image\" id=\"TheBall\">\n   </div>\n</div>\n\n\n\n<!-- <script>\nfunction init() {\n  function generateRandomNumber() {\n    return Math.floor(Math.random() * 37);\n  } \n\n  const randomNumber = generateRandomNumber();  \n  console.log(\"Random Number:\" + randomNumber);\n\n  const singleRotation = 360/37;\n\n  const rouletteWheelNumbers = [ \n    0, 32, 15, 19, 4, 21, 2, 25, 17,\n    34, 6, 27, 13, 36, 11, 30, 8, 23,\n    10, 5, 24, 16, 33, 1, 20, 14, 31,\n    9, 22, 18, 29, 7, 28, 12, 35, 3, 26\n  ];\n\n  function calculateDegreesRoulette(number) {\n    let degreesRoulette = 0;\n    for (let i = 0; i < rouletteWheelNumbers.length; i++) {\n      if (number == rouletteWheelNumbers[i]) {\n        degreesRoulette = i * singleRotation;\n      }\n    }\n    return degreesRoulette;\n  }\n\nfunction generateRandomRotation() {\n  return Math.floor(Math.random() * 360);\n}\n\nconst randomRotation = generateRandomRotation();\nconsole.log(\"Random Rotation: \" + randomRotation);\n\n  const rawdegree = calculateDegreesRoulette(randomNumber);\n  // document.getElementById(\"theSpinOne\").style.transform = `rotate(${-degreesRoulette}deg)`;\n  const degreesRoulette = rawdegree + 1080 + randomRotation ; \n  console.log(\"Degrees Roulette: \" + -degreesRoulette);\n  document.getElementById(\"theSpinOne\").style.setProperty('--my-end-degree', `${-degreesRoulette}deg`);\n\n  const rawdegreeBall = 360 - degreesRoulette; \n  console.log(\"Raw Degree Ball: \" + rawdegreeBall); \n\n  const degreesBall = (360 - randomRotation) + 1080;\n  // document.getElementsById(\"theBallOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  // document.getElementsByClassName(\"theSpinOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  document.documentElement.style .setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n}\n</script> -->"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<style>\n  \n  .image-container {\n    position: relative;\n    width: 760px;\n    height: 760px;\n    margin: 0;\n    padding: 0;\n\n    scale: 0.5;\n  }\n  \n  .image {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  \n  .image:nth-child(2) {\n    z-index: 1; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(3) {\n    z-index: 2; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(4) {\n    z-index: 3; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(5) {\n    z-index: 4; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .image:nth-child(6) {\n    width: 30px;\n    height: 30px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  .square {\n    rotate: 45deg;\n    position: absolute;\n    top: 150px;\n    left: 150px;\n    scale: 0.95;\n    /* transform: translate(-50%, -50%); */\n    width: 450px;\n    height: 450px;\n    z-index: 8; /* Adjust the z-index to control the stacking order */\n  }\n  \n  #TheBall {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 30px;\n    height: 30px;\n    scale: 1.3;\n    border-radius: 50%;\n  }\n  \n  /* @keyframes spin2 {\n    0% {\n      transform: rotate(var(--my-start-degree-ball));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree-ball));\n    }\n  } \n  \n  @keyframes spin {\n    0% {\n      transform: rotate(var(--my-start-degree));\n    }\n    100% {\n      transform: rotate(var(--my-end-degree)); \n    }\n  }\n  \n  \n  .theSpinOneanim {\n    animation: spin 10s cubic-bezier(0,.84,.55,.98) forwards; \n  }\n\n  .squareanim {\n    animation: spin2 10s cubic-bezier(0,.84,.55,.98) forwards;\n  }\n  */\n</style>\n\n<div class=\"image-container\">\n  <img src=\"/images/rouletteImages/roulette_1.png\" alt=\"Image 1\" class=\"image\" id=\"ThefirstOne\">\n  <img src=\"/images/rouletteImages/roulette_2.png\" alt=\"Image 2\" class=\"image theSpinOneanim\" id=\"theSpinOne\"> \n  <img src=\"/images/rouletteImages/roulette_3.png\" alt=\"Image 3\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_4.png\" alt=\"Image 4\" class=\"image\">\n  <img src=\"/images/rouletteImages/roulette_5.png\" alt=\"Image 5\" class=\"image\">\n  <div id=\"TheBallOne\" class=\"square squareanim\">\n    <img src=\"/images/rouletteImages/ball.png\" alt=\"Image 6\" class=\"image\" id=\"TheBall\">\n   </div>\n</div>\n\n\n\n<!-- <script>\nfunction init() {\n  function generateRandomNumber() {\n    return Math.floor(Math.random() * 37);\n  } \n\n  const randomNumber = generateRandomNumber();  \n  console.log(\"Random Number:\" + randomNumber);\n\n  const singleRotation = 360/37;\n\n  const rouletteWheelNumbers = [ \n    0, 32, 15, 19, 4, 21, 2, 25, 17,\n    34, 6, 27, 13, 36, 11, 30, 8, 23,\n    10, 5, 24, 16, 33, 1, 20, 14, 31,\n    9, 22, 18, 29, 7, 28, 12, 35, 3, 26\n  ];\n\n  function calculateDegreesRoulette(number) {\n    let degreesRoulette = 0;\n    for (let i = 0; i < rouletteWheelNumbers.length; i++) {\n      if (number == rouletteWheelNumbers[i]) {\n        degreesRoulette = i * singleRotation;\n      }\n    }\n    return degreesRoulette;\n  }\n\nfunction generateRandomRotation() {\n  return Math.floor(Math.random() * 360);\n}\n\nconst randomRotation = generateRandomRotation();\nconsole.log(\"Random Rotation: \" + randomRotation);\n\n  const rawdegree = calculateDegreesRoulette(randomNumber);\n  // document.getElementById(\"theSpinOne\").style.transform = `rotate(${-degreesRoulette}deg)`;\n  const degreesRoulette = rawdegree + 1080 + randomRotation ; \n  console.log(\"Degrees Roulette: \" + -degreesRoulette);\n  document.getElementById(\"theSpinOne\").style.setProperty('--my-end-degree', `${-degreesRoulette}deg`);\n\n  const rawdegreeBall = 360 - degreesRoulette; \n  console.log(\"Raw Degree Ball: \" + rawdegreeBall); \n\n  const degreesBall = (360 - randomRotation) + 1080;\n  // document.getElementsById(\"theBallOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  // document.getElementsByClassName(\"theSpinOne\").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n  document.documentElement.style .setProperty('--my-end-degree-ball', `${degreesBall}deg`);\n}\n</script> -->")
    ; __line = 155
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_include_rouletteDIV = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"result\">\n    <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\"><%= credit %></span></p>\n    <p style=\"color: white;\" id=\"winNumber\"><%= winNumber %> : winNumber</p>\n    <p style=\"color: white;\" id=\"winAmount\">winAmount: <%= winAmount %></p>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<div class=\"result\">\n    <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\">")
    ; __line = 2
    ; __append(escapeFn( credit ))
    ; __append("</span></p>\n    <p style=\"color: white;\" id=\"winNumber\">")
    ; __line = 3
    ; __append(escapeFn( winNumber ))
    ; __append(" : winNumber</p>\n    <p style=\"color: white;\" id=\"winAmount\">winAmount: ")
    ; __line = 4
    ; __append(escapeFn( winAmount ))
    ; __append("</p>\n</div>")
    ; __line = 5
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>USI-CASINO</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"../css/index.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    \n    <style media=\"screen,print\">\n        @font-face {\n            font-family: 'Inter';\n            src: url(../font/Inter.ttf);\n        }\n    </style>\n</head>\n<body>\n    <audio controls autoplay loop hidden>\n        <source src=\"../music/index-background.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n    </audio>\n    <div id=\"cookieConsentContainer\">\n        <div id=\"cookieConsentOverlay\"></div>\n        <div id=\"cookieConsentBanner\">\n            <p>This site uses cookies. By continuing to use this site, you accept our use of cookies.</p>\n            <p>Also we are not using real money. So, have fun!</p>\n            <button id=\"acceptCookies\">Accept</button>\n        </div>\n    </div>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2>\n\n\n\n\n\n\n    <section class=\"top-part\">\n\n\n\n        <div class=\"credits-section\">\n            <p class=\"username\" >Balance: <%= user.credits %> \n                <img src=\"../images/usicoin.png\" alt=\"usi coin\" class=\"coin\"/>  \n            </p>\n            <!-- Plus sign -->\n            <span class=\"plus-sign\" onclick=\"toggleDropdown('plus-sign')\">Add money &#43;</span>\n            <!-- Dropdown menu for Credits -->\n            <div class=\"dropdown\" id=\"dropdownCredits\">\n                <div class=\"dropdown-content\">\n                \n                    <form class=\"moneyAddition\" action=\"/addMoney\" method=\"POST\">\n                        <label class=\"username\" >Enter your amount:</label>\n                        <input type=\"number\"  id=\"creditAmount\" placeholder=\"Enter amount\" />\n\n                        <p class=\"username\" id=\"amountError\" class=\"error-message\"></p>\n\n                        <label class=\"username\" id=\"promocodeTitle\" >Enter valid promocode:</label>\n                        <input type=\"text\"  id=\"promoCode\" placeholder=\"Enter promocode\" />\n\n                        <p class=\"username\" id=\"promoCodeError\" class=\"error-message\"></p>\n\n                        <% if (user.credits > 500) { %>\n                            <button id=\"addMoney\" disabled>Apply</button>\n                            <p class=\"username\" class=\"error-message\">You can still get back at it!</p>\n                        <% } else { %>\n                            <button id=\"addMoney\">Apply</button>\n                        <% } %>\n                    </form>\n\n                </div>\n            </div>\n\n            \n        </div>\n        \n\n\n\n\n        <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\" />\n\n\n\n\n\n        <div class=\"information-section\">\n\n            <div class=\"user-information\" onclick=\"toggleDropdown('user-information')\" >\n                \n                <img  class=\"user-menu\" src=\"../images/indexImages/user.png\" alt=\"burgen menu\"   >\n\n                <p class=\"usernameInfo\"> <%= user.username %> </p>\n\n            </div>\n\n\n            <!-- User dropdown -->\n            <div class=\"dropdown\" id=\"dropdownUserInfo\">\n                <div class=\"dropdown-content\">\n                    \n                    <p class=\"username\">Username: <%= user.username %></p>\n                    <p class=\"username\">Email:    <%= user.email %></p>\n                    <p class=\"username\">UniqueID: <%= user.id %></p>\n\n                    \n\n                    <label class=\"username\" for=\"newUsername\" id=\"changeUsernameLabel\">Change Username</label>\n            \n                    <div id=\"changeUsernameSection\" style=\"display: none;\">\n                        <p class=\"username\">The cost of renaming: 5000</p>\n\n                        <form action=\"/nameRenaming\" method=\"POST\">\n                            <input type=\"text\" name=\"newUsername\" id=\"newUsername\" placeholder=\"Enter new username\" /> <br>\n                            \n                        \n                            <% if (user.credits < 5000) { %>\n                                <p class=\"username\" id=\"renamingNameError\">Not enought credits</p>\n                            <% } else { %>    \n                                <button id=\"confirmUsername\" disabled>Confirm</button>\n                            <% } %>     \n                        </form>\n                    </div> \n                    \n                    <form id=\"logoutForm\" action=\"/logout\" method=\"POST\">\n                        <button id=\"logout\">Log out</button>\n                    </form>\n                </div>     \n            </div>\n            \n\n        </div>\n        \n\n\n    </section>\n\n\n\n\n\n\n\n    <div class=\"greetingAndCounter\">\n\n        <div class=\"greetingLabel\">\n            <p id=\"greeting\"></p>\n            <!-- Display username -->\n            <p class=\"usernameholder\">, <%= user.username %>!</p>\n        </div>\n\n        <div id=\"counter\"> 0 </div>   \n\n    </div>   \n\n        \n\n\n\n    \n\n\n    <br> <br>\n    \n\n\n\n\n\n    <div class=\"container\">\n        <input type=\"radio\" name=\"slider\" id=\"item-1\" checked>\n        <input type=\"radio\" name=\"slider\" id=\"item-2\">\n        <input type=\"radio\" name=\"slider\" id=\"item-3\">\n        <input type=\"radio\" name=\"slider\" id=\"item-4\">\n\n      <div class=\"cards\">\n        <label class=\"card\" for=\"item-1\" id=\"song-1\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/wheel-of-fortune.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/fortune-wheel\" method=\"GET\">\n              <button id=\"fortune-wheel\">Play fortune Wheel</button>\n            </form>\n          </label>\n        \n        <label class=\"card\" for=\"item-2\" id=\"song-2\">\n          <img class=\"game-pictures\" src=\"../images/indexImages/slot-machine.png\" alt=\"Game Picture\">\n          <form class=\"game-buttons\" action=\"/games/slot\" method=\"GET\">\n            <button id=\"slots\">Play slot game</button>\n          </form>\n        </label>\n        <label class=\"card\" for=\"item-3\" id=\"song-3\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/blackjack.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action='/games/blackjack' method=\"GET\">\n              <button id=\"black-jack\">Play black jack</button>\n            </form>\n          </label>\n        <label class=\"card\" for=\"item-4\" id=\"song-4\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/roulette.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/roulette\" method=\"GET\">\n                <button id=\"roulette\">Play roulette</button>\n            </form>\n        </label>\n      </div>\n      \n    </div>\n\n\n\n\n\n    <footer>\n        <div class=\"footer-content\">\n            <div class=\"left\">\n                <p>&copy; USI.Casino 2023</p>\n            </div>\n            <div class=\"center\">\n            </div>\n            <div class=\"right\">\n                <p>Email: <a href=\"mailto:support@usi.casino\">support@usi.casino</a></p>\n            </div>\n        </div>\n    </footer>\n\n\n\n\n\n\n\n    \n    \n\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <script src=\"../js/indexPage.js\"> </script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n    <!-- <script src=\"js/indexWheel.js\"></script> -->\n\n    <script>\n        //audioObject.play();\n        // JavaScript function to toggle the active class on the plus sign or user logo\n        function toggleDropdown(elementClass) {\n            var element = document.querySelector('.' + elementClass);\n            element.classList.toggle('active');\n        }\n\n        // JavaScript to toggle visibility of Change Username section\n         document.getElementById('changeUsernameLabel').addEventListener('click', function () {\n            var changeUsernameSection = document.getElementById('changeUsernameSection');\n            changeUsernameSection.style.display = (changeUsernameSection.style.display === 'none' || changeUsernameSection.style.display === '') ? 'flex' : 'none';\n        });\n\n    </script>\n\n\n\n\n    </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>USI-CASINO</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"../css/index.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    \n    <style media=\"screen,print\">\n        @font-face {\n            font-family: 'Inter';\n            src: url(../font/Inter.ttf);\n        }\n    </style>\n</head>\n<body>\n    <audio controls autoplay loop hidden>\n        <source src=\"../music/index-background.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n    </audio>\n    <div id=\"cookieConsentContainer\">\n        <div id=\"cookieConsentOverlay\"></div>\n        <div id=\"cookieConsentBanner\">\n            <p>This site uses cookies. By continuing to use this site, you accept our use of cookies.</p>\n            <p>Also we are not using real money. So, have fun!</p>\n            <button id=\"acceptCookies\">Accept</button>\n        </div>\n    </div>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 31
    ; __append(escapeFn( user.email ))
    ; __append("</h2>\n\n\n\n\n\n\n    <section class=\"top-part\">\n\n\n\n        <div class=\"credits-section\">\n            <p class=\"username\" >Balance: ")
    ; __line = 43
    ; __append(escapeFn( user.credits ))
    ; __append(" \n                <img src=\"../images/usicoin.png\" alt=\"usi coin\" class=\"coin\"/>  \n            </p>\n            <!-- Plus sign -->\n            <span class=\"plus-sign\" onclick=\"toggleDropdown('plus-sign')\">Add money &#43;</span>\n            <!-- Dropdown menu for Credits -->\n            <div class=\"dropdown\" id=\"dropdownCredits\">\n                <div class=\"dropdown-content\">\n                \n                    <form class=\"moneyAddition\" action=\"/addMoney\" method=\"POST\">\n                        <label class=\"username\" >Enter your amount:</label>\n                        <input type=\"number\"  id=\"creditAmount\" placeholder=\"Enter amount\" />\n\n                        <p class=\"username\" id=\"amountError\" class=\"error-message\"></p>\n\n                        <label class=\"username\" id=\"promocodeTitle\" >Enter valid promocode:</label>\n                        <input type=\"text\"  id=\"promoCode\" placeholder=\"Enter promocode\" />\n\n                        <p class=\"username\" id=\"promoCodeError\" class=\"error-message\"></p>\n\n                        ")
    ; __line = 63
    ;  if (user.credits > 500) { 
    ; __append("\n                            <button id=\"addMoney\" disabled>Apply</button>\n                            <p class=\"username\" class=\"error-message\">You can still get back at it!</p>\n                        ")
    ; __line = 66
    ;  } else { 
    ; __append("\n                            <button id=\"addMoney\">Apply</button>\n                        ")
    ; __line = 68
    ;  } 
    ; __append("\n                    </form>\n\n                </div>\n            </div>\n\n            \n        </div>\n        \n\n\n\n\n        <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\" />\n\n\n\n\n\n        <div class=\"information-section\">\n\n            <div class=\"user-information\" onclick=\"toggleDropdown('user-information')\" >\n                \n                <img  class=\"user-menu\" src=\"../images/indexImages/user.png\" alt=\"burgen menu\"   >\n\n                <p class=\"usernameInfo\"> ")
    ; __line = 93
    ; __append(escapeFn( user.username ))
    ; __append(" </p>\n\n            </div>\n\n\n            <!-- User dropdown -->\n            <div class=\"dropdown\" id=\"dropdownUserInfo\">\n                <div class=\"dropdown-content\">\n                    \n                    <p class=\"username\">Username: ")
    ; __line = 102
    ; __append(escapeFn( user.username ))
    ; __append("</p>\n                    <p class=\"username\">Email:    ")
    ; __line = 103
    ; __append(escapeFn( user.email ))
    ; __append("</p>\n                    <p class=\"username\">UniqueID: ")
    ; __line = 104
    ; __append(escapeFn( user.id ))
    ; __append("</p>\n\n                    \n\n                    <label class=\"username\" for=\"newUsername\" id=\"changeUsernameLabel\">Change Username</label>\n            \n                    <div id=\"changeUsernameSection\" style=\"display: none;\">\n                        <p class=\"username\">The cost of renaming: 5000</p>\n\n                        <form action=\"/nameRenaming\" method=\"POST\">\n                            <input type=\"text\" name=\"newUsername\" id=\"newUsername\" placeholder=\"Enter new username\" /> <br>\n                            \n                        \n                            ")
    ; __line = 117
    ;  if (user.credits < 5000) { 
    ; __append("\n                                <p class=\"username\" id=\"renamingNameError\">Not enought credits</p>\n                            ")
    ; __line = 119
    ;  } else { 
    ; __append("    \n                                <button id=\"confirmUsername\" disabled>Confirm</button>\n                            ")
    ; __line = 121
    ;  } 
    ; __append("     \n                        </form>\n                    </div> \n                    \n                    <form id=\"logoutForm\" action=\"/logout\" method=\"POST\">\n                        <button id=\"logout\">Log out</button>\n                    </form>\n                </div>     \n            </div>\n            \n\n        </div>\n        \n\n\n    </section>\n\n\n\n\n\n\n\n    <div class=\"greetingAndCounter\">\n\n        <div class=\"greetingLabel\">\n            <p id=\"greeting\"></p>\n            <!-- Display username -->\n            <p class=\"usernameholder\">, ")
    ; __line = 149
    ; __append(escapeFn( user.username ))
    ; __append("!</p>\n        </div>\n\n        <div id=\"counter\"> 0 </div>   \n\n    </div>   \n\n        \n\n\n\n    \n\n\n    <br> <br>\n    \n\n\n\n\n\n    <div class=\"container\">\n        <input type=\"radio\" name=\"slider\" id=\"item-1\" checked>\n        <input type=\"radio\" name=\"slider\" id=\"item-2\">\n        <input type=\"radio\" name=\"slider\" id=\"item-3\">\n        <input type=\"radio\" name=\"slider\" id=\"item-4\">\n\n      <div class=\"cards\">\n        <label class=\"card\" for=\"item-1\" id=\"song-1\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/wheel-of-fortune.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/fortune-wheel\" method=\"GET\">\n              <button id=\"fortune-wheel\">Play fortune Wheel</button>\n            </form>\n          </label>\n        \n        <label class=\"card\" for=\"item-2\" id=\"song-2\">\n          <img class=\"game-pictures\" src=\"../images/indexImages/slot-machine.png\" alt=\"Game Picture\">\n          <form class=\"game-buttons\" action=\"/games/slot\" method=\"GET\">\n            <button id=\"slots\">Play slot game</button>\n          </form>\n        </label>\n        <label class=\"card\" for=\"item-3\" id=\"song-3\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/blackjack.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action='/games/blackjack' method=\"GET\">\n              <button id=\"black-jack\">Play black jack</button>\n            </form>\n          </label>\n        <label class=\"card\" for=\"item-4\" id=\"song-4\">\n            <img class=\"game-pictures\" src=\"../images/indexImages/roulette.png\" alt=\"Game Picture\">\n            <form class=\"game-buttons\" action=\"/games/roulette\" method=\"GET\">\n                <button id=\"roulette\">Play roulette</button>\n            </form>\n        </label>\n      </div>\n      \n    </div>\n\n\n\n\n\n    <footer>\n        <div class=\"footer-content\">\n            <div class=\"left\">\n                <p>&copy; USI.Casino 2023</p>\n            </div>\n            <div class=\"center\">\n            </div>\n            <div class=\"right\">\n                <p>Email: <a href=\"mailto:support@usi.casino\">support@usi.casino</a></p>\n            </div>\n        </div>\n    </footer>\n\n\n\n\n\n\n\n    \n    \n\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <script src=\"../js/indexPage.js\"> </script>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n    <!-- <script src=\"js/indexWheel.js\"></script> -->\n\n    <script>\n        //audioObject.play();\n        // JavaScript function to toggle the active class on the plus sign or user logo\n        function toggleDropdown(elementClass) {\n            var element = document.querySelector('.' + elementClass);\n            element.classList.toggle('active');\n        }\n\n        // JavaScript to toggle visibility of Change Username section\n         document.getElementById('changeUsernameLabel').addEventListener('click', function () {\n            var changeUsernameSection = document.getElementById('changeUsernameSection');\n            changeUsernameSection.style.display = (changeUsernameSection.style.display === 'none' || changeUsernameSection.style.display === '') ? 'flex' : 'none';\n        });\n\n    </script>\n\n\n\n\n    </body>\n</html>")
    ; __line = 258
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_landingpage = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>USI-CASINO</title>\n    <link rel=\"stylesheet\" href=\"../css/landingpage.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    <style media=\"screen,print\">\n      @font-face {\n          font-family: 'Inter';\n          src: url(../font/Inter.ttf);\n      }\n  </style>\n</head>\n\n<body>\n\n    <div class=\"container\">\n\n\n        \n        <div class=\"header\">\n          <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\">\n\n\n          \n\n          \n        </div>\n\n        <p class=\"text\" id=\"capt\" >Welcome to USI Casino: Elevate Your Gaming Experience!</p>\n\n        <p class=\"text\">\n            Are you ready to embark on a thrilling journey where entertainment meets \n            responsible gaming? Look no further! Introducing USI Casino, where we redefine \n            the online gambling experience, allowing you to enjoy your free time without \n            the worry of losing your assets.\n        </p>\n\n\n        <p class=\"text\">Why USI Casino?</p>\n\n\n\n        <div class=\"main\">\n      \n          <div class=\"item\">\n            <img src=\"../images/usicoin.png\" alt=\"picture\">\n            <div class=\"description\">\n              <p class=\"label\">Risk-Free Enjoyment:</p>\n              <p class=\"innertext\">\n                At USI Casino, we prioritize your enjoyment without compromising your assets. Also\n                we use our own curency - USI coins.\n                Say goodbye to the fear of losing big – our platform ensures a risk-free \n                environment for you to indulge in the excitement of gambling.\n              </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/252.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Diverse Gaming Options:</p>\n                <p class=\"innertext\">\n                  Immerse yourself in a world of variety with our selection of four different  \n                  gambling games. Whether you're a fan of classic card games, thrilling slots, or\n                   strategic table games, we have something for everyone. Our diverse portfolio guarantees\n                    endless entertainment tailored to your preferences.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"..//images/landingPage/wheel.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Joyful Mini Games:</p>\n                 <p class=\"innertext\">\n                    Experience the joy of gaming within the game! USI Casino takes it a step further by \n                    integrating delightful mini-games that add an extra layer of fun to your overall gaming\n                    experience. It's not just about winning – it's about relishing every moment.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/antivirus.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Seamless User Experience:</p>\n                <p class=\"innertext\">\n                  Our user-friendly interface ensures a smooth and hassle-free navigation, \n                  allowing you to focus on what matters most – enjoying the games. Whether you're a \n                  seasoned gambler or a first-timer, USI Casino is designed to cater to all levels of expertise.\n                </p>\n            </div>\n          </div>\n\n          <div class=\"item\">\n            <img src=\"../images/landingPage/responsive.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Responsible Gaming:</p>\n                <p class=\"innertext\">\n                  We understand the importance of responsible gaming. USI Casino promotes a safe and accountable \n                  gambling environment. Set your limits, stay in control, and make the most of your leisure time \n                  without any regrets.\n                </p>\n            </div>\n          </div>\n        </div>\n\n\n\n\n        <p class=\"text\">Ready to Roll the Dice? Sign Up Now!</p>\n\n        <p class=\"text\">\n            Join USI Casino today and unlock a world of entertainment like never before. \n            Our platform is designed for enthusiasts who seek the perfect balance between excitement\n             and responsibility. Don't miss out on the fun – sign up now and let the games begin!\n        </p>\n\n        <form action=\"/registration\" method=\"GET\">\n            <button id=\"sign-up\">Sign Up!</button>\n        </form>\n\n\n        <p class=\"text\">USI Casino – Where Entertainment Meets Responsibility.</p>\n\n\n\n\n\n\n\n        <p class=\"dev\">Developers:</p>\n\n        <div class=\"dev-images\">\n\n\n            <img class=\"image\" src=\"../images/landingPage/max.jpg\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/polad.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/nikita.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/masha.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/ivan.png\" alt=\"picture\">\n\n\n        </div>\n        \n\n      </div>\n      \n      \n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>USI-CASINO</title>\n    <link rel=\"stylesheet\" href=\"../css/landingpage.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n    <style media=\"screen,print\">\n      @font-face {\n          font-family: 'Inter';\n          src: url(../font/Inter.ttf);\n      }\n  </style>\n</head>\n\n<body>\n\n    <div class=\"container\">\n\n\n        \n        <div class=\"header\">\n          <img src=\"../images/indexImages/logo.png\" alt=\"Logo\" class=\"logo\">\n\n\n          \n\n          \n        </div>\n\n        <p class=\"text\" id=\"capt\" >Welcome to USI Casino: Elevate Your Gaming Experience!</p>\n\n        <p class=\"text\">\n            Are you ready to embark on a thrilling journey where entertainment meets \n            responsible gaming? Look no further! Introducing USI Casino, where we redefine \n            the online gambling experience, allowing you to enjoy your free time without \n            the worry of losing your assets.\n        </p>\n\n\n        <p class=\"text\">Why USI Casino?</p>\n\n\n\n        <div class=\"main\">\n      \n          <div class=\"item\">\n            <img src=\"../images/usicoin.png\" alt=\"picture\">\n            <div class=\"description\">\n              <p class=\"label\">Risk-Free Enjoyment:</p>\n              <p class=\"innertext\">\n                At USI Casino, we prioritize your enjoyment without compromising your assets. Also\n                we use our own curency - USI coins.\n                Say goodbye to the fear of losing big – our platform ensures a risk-free \n                environment for you to indulge in the excitement of gambling.\n              </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/252.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Diverse Gaming Options:</p>\n                <p class=\"innertext\">\n                  Immerse yourself in a world of variety with our selection of four different  \n                  gambling games. Whether you're a fan of classic card games, thrilling slots, or\n                   strategic table games, we have something for everyone. Our diverse portfolio guarantees\n                    endless entertainment tailored to your preferences.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"..//images/landingPage/wheel.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Joyful Mini Games:</p>\n                 <p class=\"innertext\">\n                    Experience the joy of gaming within the game! USI Casino takes it a step further by \n                    integrating delightful mini-games that add an extra layer of fun to your overall gaming\n                    experience. It's not just about winning – it's about relishing every moment.\n                </p>\n            </div>\n          </div>\n      \n          <div class=\"item\">\n            <img src=\"../images/landingPage/antivirus.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Seamless User Experience:</p>\n                <p class=\"innertext\">\n                  Our user-friendly interface ensures a smooth and hassle-free navigation, \n                  allowing you to focus on what matters most – enjoying the games. Whether you're a \n                  seasoned gambler or a first-timer, USI Casino is designed to cater to all levels of expertise.\n                </p>\n            </div>\n          </div>\n\n          <div class=\"item\">\n            <img src=\"../images/landingPage/responsive.png\" alt=\"picture\">\n            <div class=\"description\">\n                <p class=\"label\">Responsible Gaming:</p>\n                <p class=\"innertext\">\n                  We understand the importance of responsible gaming. USI Casino promotes a safe and accountable \n                  gambling environment. Set your limits, stay in control, and make the most of your leisure time \n                  without any regrets.\n                </p>\n            </div>\n          </div>\n        </div>\n\n\n\n\n        <p class=\"text\">Ready to Roll the Dice? Sign Up Now!</p>\n\n        <p class=\"text\">\n            Join USI Casino today and unlock a world of entertainment like never before. \n            Our platform is designed for enthusiasts who seek the perfect balance between excitement\n             and responsibility. Don't miss out on the fun – sign up now and let the games begin!\n        </p>\n\n        <form action=\"/registration\" method=\"GET\">\n            <button id=\"sign-up\">Sign Up!</button>\n        </form>\n\n\n        <p class=\"text\">USI Casino – Where Entertainment Meets Responsibility.</p>\n\n\n\n\n\n\n\n        <p class=\"dev\">Developers:</p>\n\n        <div class=\"dev-images\">\n\n\n            <img class=\"image\" src=\"../images/landingPage/max.jpg\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/polad.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/nikita.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/masha.png\" alt=\"picture\">\n\n            <img class=\"image\" src=\"../images/landingPage/ivan.png\" alt=\"picture\">\n\n\n        </div>\n        \n\n      </div>\n      \n      \n\n</html>")
    ; __line = 160
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"color-scheme\" content=\"light dark\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        \n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Login</b></p>\n\n            <form class=\"log\" action=\"/login\" method=\"POST\">\n\n                \n                <input id=\"email\" name= \"email_login\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\">\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password_login\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\">\n                    <button id=\"toggle-password1\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                </div>\n\n\n                <% if(errorMessage) { %>\n                    <p class=\"error-message\"><%= errorMessage %></p>\n                <% } %>\n                \n                <button id=\"login\">Login</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/registration\" method=\"GET\">\n                <button id=\"create\">Don't have an account? Sign up</button>\n            </form>\n\n\n            <form  action=\"/landingpage\" method=\"GET\">\n                <button id=\"create\">About Us</button>\n            </form>\n        </div>\n        \n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          var passwordInput = document.getElementById('password');\n          var toggleButton = document.getElementById('toggle-password1');\n      \n          if (passwordInput.type === 'password') {\n            passwordInput.type = 'text';\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"color-scheme\" content=\"light dark\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        \n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Login</b></p>\n\n            <form class=\"log\" action=\"/login\" method=\"POST\">\n\n                \n                <input id=\"email\" name= \"email_login\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\">\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password_login\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\">\n                    <button id=\"toggle-password1\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                </div>\n\n\n                ")
    ; __line = 36
    ;  if(errorMessage) { 
    ; __append("\n                    <p class=\"error-message\">")
    ; __line = 37
    ; __append(escapeFn( errorMessage ))
    ; __append("</p>\n                ")
    ; __line = 38
    ;  } 
    ; __append("\n                \n                <button id=\"login\">Login</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/registration\" method=\"GET\">\n                <button id=\"create\">Don't have an account? Sign up</button>\n            </form>\n\n\n            <form  action=\"/landingpage\" method=\"GET\">\n                <button id=\"create\">About Us</button>\n            </form>\n        </div>\n        \n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          var passwordInput = document.getElementById('password');\n          var toggleButton = document.getElementById('toggle-password1');\n      \n          if (passwordInput.type === 'password') {\n            passwordInput.type = 'text';\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>")
    ; __line = 71
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_registration = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <meta name=\"color-scheme\" content=\"light dark\">\n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Register</b></p>\n\n            <form class=\"log\" action=\"/create\" method=\"POST\">\n\n                \n                <input id=\"username\" name= \"username\" type=\"text\" required  title=\"Enter a valid title\" placeholder=\"Username\" value=\"<%= username || '' %>\">\n                \n                <% if (usernameTaken) { %>\n                    <p class=\"error-message\">Username is already in use</p>\n                <% } %>\n\n\n                <input id=\"email\" name= \"email\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\" value=\"<%= email || '' %>\">\n\n                <% if (emailTaken) { %>\n                    <p class=\"error-message\">Email is already in use</p>\n                <% } %>\n\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\" value=\"<%= password || '' %>\">\n                    <button id=\"toggle-password\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                    <input id=\"confirm-password\" name=\"confirm_password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Confirm password\">\n                </div>\n\n                <% if (passwordMismatch) { %>\n                    <p class=\"error-message\">Passwords are not the same</p>\n                <% } %>\n\n\n                \n                <button id=\"login\">Register</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/login\" method=\"GET\">\n                <button id=\"create\">Already have an account? Login</button>\n            </form>\n        </div>\n\n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          let passwordInput = document.getElementById('password');\n          let toggleButton = document.getElementById('toggle-password');\n          let confirmPass = document.getElementById('confirm-password');\n      \n          if (passwordInput.type === 'password' && confirmPass.type ==='password') {\n            passwordInput.type = 'text';\n            confirmPass.type ='text'\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            confirmPass.type ='password'\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>USI-CASINO</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <meta name=\"color-scheme\" content=\"light dark\">\n\n        <link rel=\"stylesheet\" href=\"../css/log_reg.css\" />\n        <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n        <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n        <style media=\"screen,print\">\n            @font-face {\n                font-family: 'Inter';\n                src: url(../font/Inter.ttf);\n            }\n        </style>\n    </head>\n\n    <body>\n        <div class=\"Container\">\n\n            <p class=\"label\"><b>Register</b></p>\n\n            <form class=\"log\" action=\"/create\" method=\"POST\">\n\n                \n                <input id=\"username\" name= \"username\" type=\"text\" required  title=\"Enter a valid title\" placeholder=\"Username\" value=\"")
    ; __line = 27
    ; __append(escapeFn( username || '' ))
    ; __append("\">\n                \n                ")
    ; __line = 29
    ;  if (usernameTaken) { 
    ; __append("\n                    <p class=\"error-message\">Username is already in use</p>\n                ")
    ; __line = 31
    ;  } 
    ; __append("\n\n\n                <input id=\"email\" name= \"email\" type=\"email\" required  title=\"Enter a valid title\" placeholder=\"E-mail\" value=\"")
    ; __line = 34
    ; __append(escapeFn( email || '' ))
    ; __append("\">\n\n                ")
    ; __line = 36
    ;  if (emailTaken) { 
    ; __append("\n                    <p class=\"error-message\">Email is already in use</p>\n                ")
    ; __line = 38
    ;  } 
    ; __append("\n\n\n                <div class=\"password-input\">\n                    <input id=\"password\" name=\"password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Password\" value=\"")
    ; __line = 42
    ; __append(escapeFn( password || '' ))
    ; __append("\">\n                    <button id=\"toggle-password\" type=\"button\" onclick=\"togglePasswordVisibility()\">Show</button>\n                    <input id=\"confirm-password\" name=\"confirm_password\" type=\"password\" required  title=\"Enter a valid title\" placeholder=\"Confirm password\">\n                </div>\n\n                ")
    ; __line = 47
    ;  if (passwordMismatch) { 
    ; __append("\n                    <p class=\"error-message\">Passwords are not the same</p>\n                ")
    ; __line = 49
    ;  } 
    ; __append("\n\n\n                \n                <button id=\"login\">Register</button>\n\n                \n            </form>\n\n            <form class=\"reg\" action=\"/login\" method=\"GET\">\n                <button id=\"create\">Already have an account? Login</button>\n            </form>\n        </div>\n\n    </body>\n\n    <script>\n        function togglePasswordVisibility() {\n          let passwordInput = document.getElementById('password');\n          let toggleButton = document.getElementById('toggle-password');\n          let confirmPass = document.getElementById('confirm-password');\n      \n          if (passwordInput.type === 'password' && confirmPass.type ==='password') {\n            passwordInput.type = 'text';\n            confirmPass.type ='text'\n            toggleButton.textContent = 'Hide';\n          } else {\n            passwordInput.type = 'password';\n            confirmPass.type ='password'\n            toggleButton.textContent = 'Show';\n          }\n        }\n      </script>\n</html>")
    ; __line = 82
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_roulette = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>Roulette 2.0\n    </title>\n    <link rel=\"stylesheet\" href=\"../css/roulette.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n   \n</head>\n<body>\n    \n    <div class=\"roulettespiner\">\n        <img src=\"../public/images/rouletteImages/roulette_1.jpg\" alt=\"\">\n        <img class=\"actualSpinner\" src=\"../public/images/rouletteImages/roulette_2.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_3.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_4.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_5.png\" alt=\"\">\n    </div>\n\n\n    <form action=\"/home\" method=\"GET\">\n        <button class=\"homepage\">HOME</button>\n    </form>\n\n    <h2 class=\"usernameholder\" style=\"display: none;\"><%= user.username %></h2>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2>\n    <h2 class=\"message\" style=\"color: white;\"></h2>\n    <br>\n    <div style=\"color: white;\"> <p>Table history:</p> </div>\n    <div class=\"history\"></div>\n    <br>\n    <div id=\"counter\" style=\"color: white; font-size: 16pt;\" > 345678 </div>\n    <br>\n\n    \n    <div class=\"result\">\n        <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\"><%= user.credits %></span></p>\n        <p id=\"winNumber\"></p>\n        <p id=\"winAmount\"></p>\n    </div>\n\n    <div class=\"gamestuffs\">\n        <%- include(\"./include/SoloWheel\")%>\n        <div class=\"roulette-table\">\n            <button class=\"chips\" id=\"one\">1</button>\n            <button class=\"chips\" id=\"five\">5</button>\n            <button class=\"chips\" id=\"ten\">10</button>\n            <button class=\"chips\" id=\"twenty\">20</button>\n            <button class=\"chips\" id=\"fifty\">50</button>\n    \n            \n    \n            \n            <table id=\"theBettingTableAsAWhole\">\n                <tr id=\"Hello\">\n                    <td colspan=\"14\" id=\"PlaceBets\">Place Your Bets <br> Your total bet: <span id=\"yourmoneywhichisnowmine\">0</span>\n                    </td>\n                </tr>\n                <tr id=\"_NotTopLine\">\n                    <td rowspan=\"3\" class=\"green\" id=\"_0\"><span id=\"_0\">0</span><div id=\"_0\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_3\"><span id=\"_3\">3</span><div id=\"_3\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_6\"><span id=\"_6\">6</span><div id=\"_6\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_9\"><span id=\"_9\">9</span><div id=\"_9\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_12\"><span id=\"_12\">12</span><div id=\"_12\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_15\"><span id=\"_15\">15</span><div id=\"_15\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_18\"><span id=\"_18\">18</span><div id=\"_18\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_21\"><span id=\"_21\">21</span><div id=\"_21\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_24\"><span id=\"_24\">24</span><div id=\"_24\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_27\"><span id=\"_27\">27</span><div id=\"_27\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_30\"><span id=\"_30\">30</span><div id=\"_30\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_33\"><span id=\"_33\">33</span><div id=\"_33\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_36\"><span id=\"_36\">36</span><div id=\"_36\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_TopLine\"><span id=\"_TopLine\">1Line</span><div id=\"_TopLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotCenterLine\">\n                    <td class=\"black\" id=\"_2\"><span id=\"_2\">2</span><div id=\"_2\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_5\"><span id=\"_5\">5</span><div id=\"_5\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_8\"><span id=\"_8\">8</span><div id=\"_8\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_11\"><span id=\"_11\">11</span><div id=\"_11\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_14\"><span id=\"_14\">14</span><div id=\"_14\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_17\"><span id=\"_17\">17</span><div id=\"_17\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_20\"><span id=\"_20\">20</span><div id=\"_20\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_23\"><span id=\"_23\">23</span><div id=\"_23\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_26\"><span id=\"_26\">26</span><div id=\"_26\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_29\"><span id=\"_29\">29</span><div id=\"_29\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_32\"><span id=\"_32\">32</span><div id=\"_32\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_35\"><span id=\"_35\">35</span><div id=\"_35\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_CenterLine\"><span id=\"_CenterLine\">2Line</span><div id=\"_CenterLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotBottomLine\">\n                    <td class=\"red\" id=\"_1\"><span id=\"_1\">1</span><div id=\"_1\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_4\"><span id=\"_4\">4</span><div id=\"_4\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_7\"><span id=\"_7\">7</span><div id=\"_7\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_10\"><span id=\"_10\">10</span><div id=\"_10\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_13\"><span id=\"_13\">13</span><div id=\"_13\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_16\"><span id=\"_16\">16</span><div id=\"_16\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_19\"><span id=\"_19\">19</span><div id=\"_19\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_22\"><span id=\"_22\">22</span><div id=\"_22\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_25\"><span id=\"_25\">25</span><div id=\"_25\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_28\"><span id=\"_28\">28</span><div id=\"_28\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_31\"><span id=\"_31\">31</span><div id=\"_31\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_34\"><span id=\"_34\">34</span><div id=\"_34\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_BottomLine\"><span id=\"_BottomLine\">3Line</span><div id=\"_BottomLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_twelves\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_firstTwelve\"><span id=\"_firstTwelve\">1st 12</span><div id=\"_firstTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_secondTwelve\"><span id=\"_secondTwelve\">2nd 12</span><div id=\"_secondTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_thirdTwelve\"><span id=\"_thirdTwelve\">3rd 12</span><div id=\"_thirdTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_oneToOneBets\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_oneToEighteen\"><span id=\"_oneToEighteen\">1 to 18</span><div id=\"_oneToEighteen\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_EVEN\"><span id=\"_EVEN\">EVEN</span><div id=\"_EVEN\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"red\" id=\"_RED\"><span id=\"_RED\">RED</span><div id=\"_RED\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"black\" id=\"_BLACK\"><span id=\"_BLACK\">BLACK</span><div id=\"_BLACK\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ODD\"><span id=\"_ODD\">ODD</span><div id=\"_ODD\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ninteenToThreeSix\"><span id=\"_ninteenToThreeSix\">19 to 36</span><div id=\"_ninteenToThreeSix\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n            </table>\n            </div>\n    </div>\n\n<script src=\"../socket.io/socket.io.js\"></script>\n<script src=\"../js/checkClick.js\"></script>\n<script src=\"../js/ws-client-roullette.js\"></script>\n<script src=\"../js/ejs.min.js\"></script>\n<script src=\"../js/styleR.js\"></script>\n<script src=\"../js/api-client.js\"></script>\n<script src=\"../js/views.js\"></script>\n<script src=\"../js/inactivityTimer.js\"> </script>\n<!-- <script>\n    const updatedUserCredits = updated_user.credits;\n    const winningAmount = winningAmount;\n    const randomNumber = randomNumber;\n\n    document.getElementById(\"creditsDisplay\").textContent = updatedUserCredits;\n    document.getElementById(\"winAmount\").textContent = winningAmount;\n    document.getElementById(\"winNumber\").textContent = randomNumber;\n</script> -->\n\n</body>\n</html>\n\n    \n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <title>Roulette 2.0\n    </title>\n    <link rel=\"stylesheet\" href=\"../css/roulette.css\">\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n   \n</head>\n<body>\n    \n    <div class=\"roulettespiner\">\n        <img src=\"../public/images/rouletteImages/roulette_1.jpg\" alt=\"\">\n        <img class=\"actualSpinner\" src=\"../public/images/rouletteImages/roulette_2.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_3.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_4.png\" alt=\"\">\n        <img src=\"../public/images/rouletteImages/roulette_5.png\" alt=\"\">\n    </div>\n\n\n    <form action=\"/home\" method=\"GET\">\n        <button class=\"homepage\">HOME</button>\n    </form>\n\n    <h2 class=\"usernameholder\" style=\"display: none;\">")
    ; __line = 30
    ; __append(escapeFn( user.username ))
    ; __append("</h2>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 31
    ; __append(escapeFn( user.email ))
    ; __append("</h2>\n    <h2 class=\"message\" style=\"color: white;\"></h2>\n    <br>\n    <div style=\"color: white;\"> <p>Table history:</p> </div>\n    <div class=\"history\"></div>\n    <br>\n    <div id=\"counter\" style=\"color: white; font-size: 16pt;\" > 345678 </div>\n    <br>\n\n    \n    <div class=\"result\">\n        <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\">")
    ; __line = 42
    ; __append(escapeFn( user.credits ))
    ; __append("</span></p>\n        <p id=\"winNumber\"></p>\n        <p id=\"winAmount\"></p>\n    </div>\n\n    <div class=\"gamestuffs\">\n        ")
    ; __line = 48
    ; __append( include("./include/SoloWheel"))
    ; __append("\n        <div class=\"roulette-table\">\n            <button class=\"chips\" id=\"one\">1</button>\n            <button class=\"chips\" id=\"five\">5</button>\n            <button class=\"chips\" id=\"ten\">10</button>\n            <button class=\"chips\" id=\"twenty\">20</button>\n            <button class=\"chips\" id=\"fifty\">50</button>\n    \n            \n    \n            \n            <table id=\"theBettingTableAsAWhole\">\n                <tr id=\"Hello\">\n                    <td colspan=\"14\" id=\"PlaceBets\">Place Your Bets <br> Your total bet: <span id=\"yourmoneywhichisnowmine\">0</span>\n                    </td>\n                </tr>\n                <tr id=\"_NotTopLine\">\n                    <td rowspan=\"3\" class=\"green\" id=\"_0\"><span id=\"_0\">0</span><div id=\"_0\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_3\"><span id=\"_3\">3</span><div id=\"_3\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_6\"><span id=\"_6\">6</span><div id=\"_6\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_9\"><span id=\"_9\">9</span><div id=\"_9\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_12\"><span id=\"_12\">12</span><div id=\"_12\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_15\"><span id=\"_15\">15</span><div id=\"_15\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_18\"><span id=\"_18\">18</span><div id=\"_18\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_21\"><span id=\"_21\">21</span><div id=\"_21\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_24\"><span id=\"_24\">24</span><div id=\"_24\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_27\"><span id=\"_27\">27</span><div id=\"_27\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_30\"><span id=\"_30\">30</span><div id=\"_30\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_33\"><span id=\"_33\">33</span><div id=\"_33\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_36\"><span id=\"_36\">36</span><div id=\"_36\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_TopLine\"><span id=\"_TopLine\">1Line</span><div id=\"_TopLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotCenterLine\">\n                    <td class=\"black\" id=\"_2\"><span id=\"_2\">2</span><div id=\"_2\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_5\"><span id=\"_5\">5</span><div id=\"_5\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_8\"><span id=\"_8\">8</span><div id=\"_8\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_11\"><span id=\"_11\">11</span><div id=\"_11\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_14\"><span id=\"_14\">14</span><div id=\"_14\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_17\"><span id=\"_17\">17</span><div id=\"_17\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_20\"><span id=\"_20\">20</span><div id=\"_20\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_23\"><span id=\"_23\">23</span><div id=\"_23\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_26\"><span id=\"_26\">26</span><div id=\"_26\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_29\"><span id=\"_29\">29</span><div id=\"_29\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_32\"><span id=\"_32\">32</span><div id=\"_32\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_35\"><span id=\"_35\">35</span><div id=\"_35\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_CenterLine\"><span id=\"_CenterLine\">2Line</span><div id=\"_CenterLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_NotBottomLine\">\n                    <td class=\"red\" id=\"_1\"><span id=\"_1\">1</span><div id=\"_1\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_4\"><span id=\"_4\">4</span><div id=\"_4\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_7\"><span id=\"_7\">7</span><div id=\"_7\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_10\"><span id=\"_10\">10</span><div id=\"_10\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_13\"><span id=\"_13\">13</span><div id=\"_13\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_16\"><span id=\"_16\">16</span><div id=\"_16\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_19\"><span id=\"_19\">19</span><div id=\"_19\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_22\"><span id=\"_22\">22</span><div id=\"_22\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_25\"><span id=\"_25\">25</span><div id=\"_25\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_28\"><span id=\"_28\">28</span><div id=\"_28\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"black\" id=\"_31\"><span id=\"_31\">31</span><div id=\"_31\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"red\" id=\"_34\"><span id=\"_34\">34</span><div id=\"_34\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td class=\"green\" id=\"_BottomLine\"><span id=\"_BottomLine\">3Line</span><div id=\"_BottomLine\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_twelves\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_firstTwelve\"><span id=\"_firstTwelve\">1st 12</span><div id=\"_firstTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_secondTwelve\"><span id=\"_secondTwelve\">2nd 12</span><div id=\"_secondTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"4\" class=\"green\" id=\"_thirdTwelve\"><span id=\"_thirdTwelve\">3rd 12</span><div id=\"_thirdTwelve\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n                <tr id=\"_oneToOneBets\">\n                    <td class=\"nothing\"></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_oneToEighteen\"><span id=\"_oneToEighteen\">1 to 18</span><div id=\"_oneToEighteen\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_EVEN\"><span id=\"_EVEN\">EVEN</span><div id=\"_EVEN\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"red\" id=\"_RED\"><span id=\"_RED\">RED</span><div id=\"_RED\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"black\" id=\"_BLACK\"><span id=\"_BLACK\">BLACK</span><div id=\"_BLACK\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ODD\"><span id=\"_ODD\">ODD</span><div id=\"_ODD\" class=\"placedbetschipsandstuff\"></div></td>\n                    <td colspan=\"2\" class=\"green\" id=\"_ninteenToThreeSix\"><span id=\"_ninteenToThreeSix\">19 to 36</span><div id=\"_ninteenToThreeSix\" class=\"placedbetschipsandstuff\"></div></td>\n                </tr>\n            </table>\n            </div>\n    </div>\n\n<script src=\"../socket.io/socket.io.js\"></script>\n<script src=\"../js/checkClick.js\"></script>\n<script src=\"../js/ws-client-roullette.js\"></script>\n<script src=\"../js/ejs.min.js\"></script>\n<script src=\"../js/styleR.js\"></script>\n<script src=\"../js/api-client.js\"></script>\n<script src=\"../js/views.js\"></script>\n<script src=\"../js/inactivityTimer.js\"> </script>\n<!-- <script>\n    const updatedUserCredits = updated_user.credits;\n    const winningAmount = winningAmount;\n    const randomNumber = randomNumber;\n\n    document.getElementById(\"creditsDisplay\").textContent = updatedUserCredits;\n    document.getElementById(\"winAmount\").textContent = winningAmount;\n    document.getElementById(\"winNumber\").textContent = randomNumber;\n</script> -->\n\n</body>\n</html>\n\n    \n")
    ; __line = 151
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_slot_machine = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n\n<head>\n    <title>Slot Machine</title>\n    <link rel=\"stylesheet\" href=\"../css/slot_machine.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n\n    <meta charset=\"UTF-8\" />\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style media=\"screen, print\"></style>\n    <script src=\"../js/slot_machine.js\"></script>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body onload=\"slot()\">\n    <h2 class=\"usernameholder\" style=\"display: none;\"><%= user.username %></h2>\n    <h2 class=\"emailholder\" style=\"display: none;\"><%= user.email %></h2>\n\n\n    <div id=\"app\">\n        <h2 id=\"message\" style=\"color: white;\">\n                \n        </h2>\n        <div class=\"doors\">\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n        </div>\n\n        <div class=\"buttons\">\n         \n            <form id=\"betForm\" action=\"/casino/slot/bet\" method=\"POST\">\n                <p style=\"color: rgb(218, 75, 32);\">Win / Loss <span id=\"addedCreditsDisplay\">...</span></p>\n                <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\"><%= user.credits %></span></p>     \n                <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"0.5\" step=\"0.1\" max=\"100\" placeholder=\"Enter bet\">\n                <button type=\"button\" id=\"playButton\">Play</button>\n                <button type=\"button\" id=\"autoPlayButton\">Auto</button>\n            </form>\n\n            <form action=\"/home\" method=\"GET\">\n                <button class=\"homepage\">HOME</button>\n            </form>\n        \n        </div>\n\n\n        \n    </div>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n\n</body>\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n\n<head>\n    <title>Slot Machine</title>\n    <link rel=\"stylesheet\" href=\"../css/slot_machine.css\" />\n    <link rel=\"stylesheet\" href=\"../css/opening.css\" />\n    <link rel=\"stylesheet\" href=\"../css/standard.css\" />\n\n    <meta charset=\"UTF-8\" />\n    <meta name=\"color-scheme\" content=\"light dark\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style media=\"screen, print\"></style>\n    <script src=\"../js/slot_machine.js\"></script>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/js/ws-client.js\"></script>\n    <link rel=\"icon\" href=\"../images/usicoin.png\" type=\"image/x-icon\"/>\n</head>\n\n<body onload=\"slot()\">\n    <h2 class=\"usernameholder\" style=\"display: none;\">")
    ; __line = 20
    ; __append(escapeFn( user.username ))
    ; __append("</h2>\n    <h2 class=\"emailholder\" style=\"display: none;\">")
    ; __line = 21
    ; __append(escapeFn( user.email ))
    ; __append("</h2>\n\n\n    <div id=\"app\">\n        <h2 id=\"message\" style=\"color: white;\">\n                \n        </h2>\n        <div class=\"doors\">\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n\n            <div class=\"door\">\n                <div class=\"boxes\">\n                    <!-- <div class=\"box\">?</div> -->\n                </div>\n            </div>\n        </div>\n\n        <div class=\"buttons\">\n         \n            <form id=\"betForm\" action=\"/casino/slot/bet\" method=\"POST\">\n                <p style=\"color: rgb(218, 75, 32);\">Win / Loss <span id=\"addedCreditsDisplay\">...</span></p>\n                <p style=\"color: goldenrod;\">Credit: <span id=\"creditsDisplay\">")
    ; __line = 52
    ; __append(escapeFn( user.credits ))
    ; __append("</span></p>     \n                <input type=\"number\" id=\"betInput\" name=\"betAmount\" min=\"0.5\" step=\"0.1\" max=\"100\" placeholder=\"Enter bet\">\n                <button type=\"button\" id=\"playButton\">Play</button>\n                <button type=\"button\" id=\"autoPlayButton\">Auto</button>\n            </form>\n\n            <form action=\"/home\" method=\"GET\">\n                <button class=\"homepage\">HOME</button>\n            </form>\n        \n        </div>\n\n\n        \n    </div>\n    <script src=\"../js/inactivityTimer.js\"> </script>\n\n</body>\n\n</html>")
    ; __line = 71
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}