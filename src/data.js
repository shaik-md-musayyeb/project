var data = [];
var fruits =
  "Apples, Apricots, Avocados, Bananas, Boysenberries, Blueberries, Cherries, Cucumbers, Grapefruit, Grapes, Gooseberries, Guava, Jackfruit, Mulberry, Melon, Mango, Mango, Lime, Olive, Oranges, Papaya, Persimmon, Peach, Pomegranate, Pineapple, Rambutan, Raspberries, Watermelon, Wolfberry";
// fruits = fruits.toLowerCase();
// fruits = fruits.replace(/[^a-zA-Z ]/g, "");
// fruits = fruits.split(" "); //string to array

var fooditem =
  "Biryani, Dosa, Butter chicken/Butter paneer, Tandoori meats, vegetables and bread, Samosa, Chaat, DaalMakhni, upma idli chapathi poori vada";
// fooditem = fooditem.toLowerCase();
// fooditem = fooditem.replace(/[^a-zA-Z ]/g, "");
// fooditem = fooditem.split(" ");

var vehicles =
  "Ambulance Bicycle Boat Bullet Train Bus Jet Canoe Car Plane Motor Scooter Helicopter Cable Car Motor Racing Speed Boat Raft Paddle Sailboat Wheel Sports Car Accident Plane Helicopter Runway Ship Truck Submarine Skateboard Tractor Anchor Boat";
// vehicles = vehicles.toLowerCase();
// vehicles = vehicles.replace(/[^a-zA-Z ]/g, "");
// vehicles = vehicles.split(" ");
var insects =
  "Fly Grasshopper Ant Bee Beetle Butterfly Bug Caterpillar Centipede Cockroach Cricket Dragonfly Mosquito Snail";
var animals =
  "pig turkey chicken donkey goat horse hen duck rabbit sheep cow cat dog mouse deer wolf";
function cleaningData(data) {
  data = data.toLowerCase();
  data = data.replace(/[^a-zA-Z ]/g, "");
  data = data.split(" ");
  return data;
}
vehicles = cleaningData(vehicles);
fooditem = cleaningData(fooditem);
fruits = cleaningData(fruits);
insects = cleaningData(insects);
animals = cleaningData(animals);
data[0] = fruits;
data[1] = fooditem;
data[2] = vehicles;
data[3] = insects;
data[4] = animals;

var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
// ---function to generate random string---
var randomWord = (data, level) => {
  let i = Math.floor(Math.random() * data.length);
  let j = Math.floor(Math.random() * data[i].length);
  let item = data[i][j];
  if (item.length > level || item.length < level)
    return randomWord(data, level);
  return item;
};

var level = 3;

function levelup() {
  ++level;
}

var s = 0;

function scoreUp() {
  ++s;
}

var count = 0;

function countReset() {
  count = 0;
}

function countUp() {
  ++count;
}

// generating random word

// var mainWord = randomWord(data, level);

//converting the word into array
// var mainWordArray = mainWord.split("");

// function to shuffle letters in 'mainWordArray'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// shiffles the letters of mainWordArray
// var mainWordArrayShuffled = shuffleArray(mainWordArray);

//converts mainWordArrayShuffled to string
// var shuffledWord = mainWordArrayShuffled.join("");
// var length = mainWord.length;
// var hint1 = mainWord.substr(0, mainWord.length / 2 / 2);
// var hint2 = mainWord.substr(0, mainWord.length / 2);
actions();

function actions() {
  var mainWord = randomWord(data, level);
  console.log(mainWord);
  time(mainWord);
  var mainWordArray = mainWord.split("");
  var mainWordArrayShuffled = shuffleArray(mainWordArray);
  var shuffledWord = mainWordArrayShuffled.join("");
  var length = mainWord.length;

  var wordLength = document.getElementById("length");
  wordLength.innerHTML = length;

  var question = document.getElementById("question");
  question.innerHTML = shuffledWord;

  var answer = document.getElementById("answer");
  answer.setAttribute("maxlength", length);
  answer.setAttribute("placeholder", length + " letters");
  answer.addEventListener("keyup", validate);
  var score = document.getElementById("score");

  if (answer.value != mainWord && answer.value.length == mainWord.length) {
    incorrect.play();
  }
  // checking answers

  function validate() {
    let answer = document.getElementById("answer");
    console.log(answer.value.length);
    if (/*time.value > 0 && */ answer.value == mainWord) {
      correct.play();
      scoreUp();
      answer.value = "";
      score.innerHTML = s;

      if (count < 3) countUp();
      else {
        levelup();
        countReset();
      }
      actions();
    }
  }

  //function for timer

  function time(word) {
    var time = document.getElementById("timer");
    var start = word.length * 3;
    time.innerHTML = start;
    var interval = setInterval(() => {
      timer();
    }, 1000);

    function timer() {
      if (start > 0) {
        start -= 1;
        time.innerHTML = start;
      } else {
        clearInterval(interval);
      }
    }
  }
}
