var sounddictionary = { "a1":"パフ.mp3", "a2":"魔王魂  戦闘14.mp3", "a3":"チーン1.mp3", "a4":"「さあ、いくぞ！」.mp3","a5":"チリン.mp3","a6":"出題1.mp3","a7":"thinkingtime1.mp3","a8":"Quiz-Results01-1.mp3","a9":"ジャジャーン.mp3","b1":"ちゃんちゃん♪2.mp3","b2":"ドンドンパフパフ.mp3","b3":"和太鼓でドドン.mp3","b4":"歓声と拍手1.mp3","b5":"Quiz-Correct_Answer02-3.mp3","b6":"爆発1.mp3","b7":"浜田　結果発表.mp3","b8":"397.mp3","c1":"20秒.mp3","c2":"10秒.mp3","c3":"５秒.mp3"};
var flag = false;
function soundplay(id) {
    var music = new Audio(sounddictionary[id]);
    music.play();
    document.getElementById("stop_button").onclick = function() {
        music.pause();
        music.currentTime = 0;
    
    };
};

function colorchange(line) {
    var element = document.getElementById(line);
    var lineinitial = line.slice(0, 1);
    if (lineinitial == "a") {
        element.style.backgroundColor="#eb607c" ;
    } else if (lineinitial == "b") {
        element.style.backgroundColor="#89a0a1" ;
    } else if (lineinitial == "c") {
        element.style.backgroundColor="#b59e65" ;
    } else if (lineinitial == "d") {
        element.style.backgroundColor="#c7ebc7" ;
    };
};

function colorundo(line2) {
    var element2 = document.getElementById(line2);
    var lineinitial2 = line2.slice(0, 1);

    if (lineinitial2 == "a") {
        element2.style.backgroundColor="#dc143c" ;
    } else if (lineinitial2 == "b") {
        element2.style.backgroundColor="#5F9EA0" ;
    } else if (lineinitial2 == "c") {
        element2.style.backgroundColor="#B8860B" ;
    } else if (lineinitial2 == "d") {
        element2.style.backgroundColor="#90ee90" ;
    };
};

function color(buttonid) {
    colorchange(buttonid);
    var alter = function() {
        colorundo(buttonid);
    };
    setTimeout(alter, 500);
};


document.getElementById("a1").onclick = function () {
    var button_id = "a1";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a2").onclick = function () {
    var button_id = "a2";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a3").onclick = function () {
    var button_id = "a3";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a4").onclick = function () {
    var button_id = "a4";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a5").onclick = function () {
    var button_id = "a5";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a6").onclick = function () {
    var button_id = "a6";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a7").onclick = function () {
    var button_id = "a7";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a8").onclick = function () {
    var button_id = "a8";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("a9").onclick = function () {
    var button_id = "a9";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b1").onclick = function () {
    var button_id = "b1";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b2").onclick = function () {
    var button_id = "b2";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b3").onclick = function () {
    var button_id = "b3";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b4").onclick = function () {
    var button_id = "b4";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b5").onclick = function () {
    var button_id = "b5";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b6").onclick = function () {
    var button_id = "b6";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b7").onclick = function () {
    var button_id = "b7";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b8").onclick = function () {
    var button_id = "b8";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("b9").onclick = function () {
    var button_id = "b9";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c1").onclick = function () {
    var button_id = "c1";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c2").onclick = function () {
    var button_id = "c2";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c3").onclick = function () {
    var button_id = "c3";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c4").onclick = function () {
    var button_id = "c4";
    soundplay(button_id);
    color(button_id)
};

document.getElementById("c5").onclick = function () {
    var button_id = "c5";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c6").onclick = function () {
    var button_id = "c6";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c7").onclick = function () {
    var button_id = "c7";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c8").onclick = function () {
    var button_id = "c8";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("c9").onclick = function () {
    var button_id = "c9";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d1").onclick = function () {
    var button_id = "d1";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d2").onclick = function () {
    var button_id = "d2";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d3").onclick = function () {
    var button_id = "d3";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d4").onclick = function () {
    var button_id = "d4";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d5").onclick = function () {
    var button_id = "d5";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d6").onclick = function () {
    var button_id = "d6";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d7").onclick = function () {
    var button_id = "d7";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d8").onclick = function () {
    var button_id = "d8";
    soundplay(button_id);
    color(button_id);
};

document.getElementById("d9").onclick = function () {
    var button_id = "d9";
    soundplay(button_id);
    color(button_id);
};
