// Тоглогчийн ээлжийг хадгалах хувьсагч нэг-0 хоёр-1 гэе
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч
var dice = Math.floor( Math.random() * 6 ) + 1;

// Программ ажиллаж эхэллээ

document.getElementById("score-0").textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листер
document.querySelector(".btn-roll").addEventListener("click", function(){

    // 1-6 доторх санамсанргүй нэг тоо
    var diceNumber = Math.floor( Math.random() * 6 ) + 1;

    // Буусан тооны шоог гаргаж  ирнэ
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 с члгаатай бол Тоглогчийн ээлжийн оноог өөрчилөх
    if(diceNumber != 1){

        // 1-ээс ялгаатай тоо буулаа, 
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;

    }else{
        
        // 1 буулаа тоглогчийн ээлжийг солих
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        
        
        // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго
        // Хэрэв идэвхтэй тоглогч нь 1 байвал идэвхтэй тоглогчийг 0 болго
        activePlayer === 0 ? activePlayer = 1: (activePlayer = 0);

        // Улаан цэгийг шилжүүлэх
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // Шоог түр алга болгох
        diceDom.style.display = "none";

    }
});

// HOLD товчны өөрчлөлт
document.querySelector('.btn-hold').addEventListener("click", function(){

    //Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө

    scores[activePlayer]= scores[activePlayer] + roundScore;
    // дэлгэц дээр оноог нь өөрчлөнө

    document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

    //Уг тоглогч хожсон эсэхийг шалгах
    if(scores[activePlayer] >= 100){

        // нэрийнх нь оронд бичих
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
        
    }else{

        switchToNextPlayer();
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






