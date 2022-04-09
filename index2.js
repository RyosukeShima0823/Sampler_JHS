var musics = ['パフ.mp3','魔王魂  戦闘14.mp3','チーン1.mp3','「さあ、いくぞ！」.mp3','チリン.mp3','出題1.mp3',"thinkingtime1.mp3","Quiz-Results01-1.mp3","ジャジャーン.mp3","ちゃんちゃん♪2.mp3","ドンドンパフパフ.mp3","和太鼓でドドン.mp3","歓声と拍手1.mp3","Quiz-Correct_Answer02-3.mp3"];

document.onkeydown = function (e){
	if(!e) e = window.event;
    if(e.keyCode > 48 && e.keyCode < 58){
        let music = new Audio(musics [e.keyCode - 49]);
        music.play();

    };
    if(e.keyCode == 81){
        let music = new Audio(musics [9]);
        music.play();
    };
    if(e.keyCode == 87){
        let music = new Audio(musics [10]);
        music.play();
    };
    if(e.keyCode == 69){
        let music = new Audio(musics [11]);
        music.play();
    };
    if(e.keyCode == 82){
        const music = new Audio(musics [12]);
        music.play();
    };
    if(e.keyCode == 84){
        const music = new Audio(musics [13]);
        music.play();
    };
    if(e.keyCode == 89){
        const music = new Audio(musics [14]);
        music.play();
    };
    if(e.keyCode == 85){
        const music = new Audio(musics [15]);
        music.play();
    };
    if(e.keyCode == 73){
        const music = new Audio(musics [16]);
        music.play();
    };
    if(e.keyCode == 79){
        const music = new Audio(musics [17]);
        music.play();
    };
    if(e.keyCode == 80){
        const music = new Audio(musics [18]);
        music.play();
    };
    if(e.keyCode == 13){
        music.pause();
    }
};