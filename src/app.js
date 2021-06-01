import {data} from "./data.js";

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

// The variable count is used for counting words, n letter words will be displayed upt *count* times max count is 4
// i.e., The total number of four 3 letter words would be displayed, then four 4 letter words, then four 5 letter words and so on...

var count = 0; 
function countReset() {
  count = 0;
}

function countUp() {
  ++count;
}

//function for timer
var start = 300;
var time = document.getElementById("timer");
time.innerHTML = start;
var interval = setInterval(() => {
  timer();
}, 1000);

function timer() {
  if (start > 0) {
    start -= 1;
    time.innerHTML = start;
    return start;
  } else {
    return 0;
  }
}

// function to shuffle letters in 'mainWordAsArray'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// shiffles the letters of mainWordAsArray
// var mainWordAsShuffledArray = shuffleArray(mainWordAsArray);

//converts mainWordAsShuffledArray to string
// var shuffledWord = mainWordAsShuffledArray.join("");
// var length = mainWord.length;
// var hint1 = mainWord.substr(0, mainWord.length / 2 / 2);
// var hint2 = mainWord.substr(0, mainWord.length / 2);
actions();

function actions() {
  var mainWord = randomWord(data, level);
  console.log(mainWord);
  var mainWordAsArray = mainWord.split("");                   //turns the string into array

  var mainWordAsShuffledArray = shuffleArray(mainWordAsArray);  //shuffles the array (letters of words)

  var shuffledWord = mainWordAsShuffledArray.join("");        //array turns into array

  var length = mainWord.length;
  var hint1 = mainWord.substr(0, mainWord.length / 2 / 2);
  var hint2 = mainWord.substr(0, mainWord.length / 2);
  var wordLength = document.getElementById("length");       //finds the length of the word
  wordLength.innerHTML = length;                            //to set the length in game page

  var question = document.getElementById("question");
  question.innerHTML = shuffledWord;

  var answer = document.getElementById("answer");
  answer.setAttribute("maxlength", length);                 //to set the length of user input
  answer.setAttribute("placeholder", length + " letters");  // to set the value of place holder
  answer.addEventListener("keyup", validate);               // call the validate method every time the key is up
  var score = document.getElementById("score");       

  if (answer.value != mainWord && answer.value.length == mainWord.length) {
    incorrect.play();
  }
  // checking answers

  function validate() {
    let answer = document.getElementById("answer");
    console.log(answer.value.length);
    if (answer.value == mainWord) {
        correct.play();
        scoreUp();
        answer.value = "";
        score.innerHTML = s;

        if (count < 3) {console.log("count = "+count);countUp();}
        else {
          levelup();
          countReset();
        }

        actions();
    }
    // Result
    if (start == 0) {
        answer.setAttribute("disabled", "disabled");
        result.innerHTML = score.innerHTML;
        document.getElementById("resultDiv").style.display = "block";
    }
  }
}
// popup menu
document.getElementById("close").addEventListener("click", close);
function close() {
  document.getElementById("resultDiv").style.display = "none";
}
