// Тоглогчийн ээлжийг хадгалах хувьсагч нэг-0 хоёр-1 гэе
var activePlayer

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore

var diceDom = document.querySelector(".dice");

//Тоглоом дууссан эсэхиыг хадгалах хувьсангч
var isNewGame;

initGame();

function initGame(){

isNewGame = true;

activePlayer = 0;

scores = [0, 0];

roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч
var dice = Math.floor( Math.random() * 6 ) + 1;

// Программ ажиллаж эхэллээ

document.getElementById("score-0").textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';


document.querySelector(".player-0-panel")
        .classList.remove("winner");

document.querySelector(".player-0-panel")
        .classList.add("active");

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector(".player-1-panel")
        .classList.remove("winner");


diceDom.style.display = "none";

}
// Шоог шидэх эвент листер
document.querySelector(".btn-roll").addEventListener("click", function(){
    if(isNewGame == true){

    // 1-6 доторх санамсанргүй нэг тоо
    var diceNumber = Math.floor( Math.random() * 6 ) + 1;

    // Буусан тооны шоог гаргаж  ирнэ
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 с члгаатай бол Тоглогчийн ээлжийн оноог өөрчилөх
    if(diceNumber != 1){

        // 1-ээс ялгаатай тоо буулаа
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

    }else{
       switchToNextPlayer();
    }
    }else{
        alert("Тоглоом дууслаа. Та дахин тоглохийг хүсвэл New game товчийг дарна уу!!");
    }
});

// HOLD товчны өөрчлөлт
document.querySelector('.btn-hold').addEventListener("click", function(){

    if(isNewGame == true){
    //Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө

    scores[activePlayer]= scores[activePlayer] + roundScore;

    // дэлгэц дээр оноог нь өөрчлөнө

    document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

    //Уг тоглогч хожсон эсэхийг шалгах
    if(scores[activePlayer] >= 100){

        //Тоглоомийг дуусгах
        isNewGame = false;

        // нэрийнх нь оронд бичих
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";

        document.querySelector(".player-" + activePlayer + '-panel')
        .classList.add("winner");

        document.querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

    }else{

        switchToNextPlayer();
    }
    }else{
        alert("Тоглоом дууслаа. Та дахин тоглохийг хүсвэл New game товчийг дарна уу!!");
    }
});

function switchToNextPlayer()
{
       //Ээлжийн oнooг нь 0 болгоно
       roundScore = 0;
       document.getElementById('current-' + activePlayer).textContent = 0;

    //тоглогчийн ээлжийг солих
    activePlayer === 0 ? activePlayer = 1: (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
     
    // шоог түр алга болгох
    diceDom.style.display = "none";

};

//шинэ тоглоом эхлүүлэх товчны эвент
document.querySelector(".btn-new").addEventListener("click", initGame);