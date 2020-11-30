// Тоглогчийн ээлжийг хадгалах хувьсагч нэг-0 хоёр-1 гэе
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч
var dice = Math.floor( Math.random() * 6 ) + 1;

// Программ ажиллаж эхэллээ
document.querySelector('#score-0').textContent = 0;

document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;

document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';

console.log('шоо : ' + dice);
