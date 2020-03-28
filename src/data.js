var data = [];
var fruits =
  "Apples, Apricots, Avocados, Bananas, Boysenberries, Blueberries, Cherries, Cucumbers, Grapefruit, Grapes, Gooseberries, Guava, Jackfruit, Mulberry, Melon, Mango, Mango, Lime, Olive, Oranges, Papaya, Persimmon, Peach, Pomegranate, Pineapple, Rambutan, Raspberries, Watermelon, Wolfberry";
// fruits = fruits.toLowerCase();
// fruits = fruits.replace(/[^a-zA-Z ]/g, "");
// fruits = fruits.split(" "); //string to array

var fooditem =
  "vegetables, chicken, Hamburger, pizza, Biscuits , Barbecue, cuisine, ";
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
  "pig turkey chicken donkey goat horse hen duck rabbit sheep cow cat dog mouse deer wolf lion tiger bear crocodile rabbit";
var seasons = "spring, summer, autumn, winter";
var countries =
  "Australia Austria Bangladesh Belgium Bhutan Brazil Canada China Denmark Egypt France Germany Pakistan Philippines Panama Nepal Malaysia Kenya Iraq Iran India Qatar Spain Sudan Syria";
var random1 =
  "overflow underflow undefined determined determination doctor brother understand earthquakes educational effectively environment enhancement observation radiobiology fulfillments reevaluation reduplicated redirecting feasibility achievability fruitfulness reinstalling relativistic relationship repetitively representing repositories repositories classification categorization electrotherapy electrostatics extraordinaire essentialities xeroradiography conceptualization counteraggression counterdemonstrate counterintuitively impartialities illiberalities facilitative objectifies objectively observatory experience programme reinforcement passengers ultrasonic ultrasound visualized vaporizing";

var random2 =
  "abolished backbones backbone blackboard backslash cabdriver capstone accidents according capsuling validities validation variations vaporizers visualises ultrasmart unaccepted unacademic objectified facilitation featherbrain faithfulness  decentralized decomposition cabinetmaking carbohydrates cancellations circumstances clarification cleanlinesses determination diagnostician egocentrically electrofishing electronically Unscramble";
var random3 =
  "illegitimately immutabilities industrialised infusibilities legislatorships liberalizations latensification literalizations logarithmically vascularization videoconference vulnerabilities volatilizations viscoelasticity saponification semidocumentary sensationalism sensationalist semilogarithmic supernaturalism superstimulated suppressibility survivability synchronisation systematization quasicrystalline quasiperiodicity quadruplications xeroradiographies";
var random4 =
  "cardiorespiratory characterological commercialization counterblockading counterproductive dehydrochlorinate differentiability decriminalization ferrimagnetically fractionalization ultraconservatism uncontrollability unconventionality weatherproofnesses agammaglobulinemia astrophotographies astrophotographers anticounterfeiting antiadministration anthropocentricity aerothermodynamics bourgeoisification biodegradabilities conceptualization ";
var random5 =
  "any arc are ape ago add act mac man max mat lace lack lady last late loud leaf scout sleep shelf self jaguar jail jailor jasmin begin better behalf aware wait water juice milk meat team state shelter shadow zebra backup bangles tomato ability disability mix mud cap capability capable capacity capital captain capture champion championship chance change comedy comfort comfortable command commander comment commercial commission commit commitment committee defendant defense defensive deficit define definitely definition degree delay deliver egg eight either elderly elect election electric electricity electronic element elementary eliminate elite elsewhere few fewer fiber fiction field fifteen";
var random6 =
  "fifth fifty fight fighter fighting gaze gear gender gene general generally generate generation genetic gentleman headquarters health healthy hear hearing heart heat heaven heavily heavy heel indeed independence independent index iron Islamic island kick kid kill killer killing kind king kiss kitchen knee knife knock know knowledge lab laugh launch law lawn motivation motor mount mountain mouse mouth move negotiation neighbor neighborhood neither nerve nervous net network never news once one ongoing onion online only onto open opening operate operating operation operator opinion olympic pet phase phenomenon philosophy phone photo photograph photographer phrase prepare prescription presence";
var random7 =
  "present presentation preserve raw reach react reaction rope rose rough roughly round route routine she sheet shelf shell shelter specific specifically speech station statistics status stuff stupid style subject submit subsequent tent term thought thousand threat tour tourist tournament type typical typically ugly ultimate ultimately unable useful user usual usually utility vacation valley valuable value variable volunteer vote voter vs vulnerable wage wait wake walk wall wander war white who whole yes yesterday yet yield you young your yours yourself youth zone";

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
seasons = cleaningData(seasons);
countries = cleaningData(countries);
random1 = cleaningData(random1);
random2 = cleaningData(random2);
random3 = cleaningData(random3);
random4 = cleaningData(random4);
random5 = cleaningData(random5);
random6 = cleaningData(random6);
data[0] = fruits;
data[1] = fooditem;
data[2] = vehicles;
data[3] = insects;
data[4] = animals;
data[5] = seasons;
data[6] = countries;
data[7] = random1;
data[8] = random2;
data[9] = random3;
data[10] = random4;
data[11] = random5;
data[12] = random6;

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

var x = timer();
// function time(word) {
//   var time = document.getElementById("timer");
//   var start = word.length * 3;
//   time.innerHTML = start;
// }
// var time = document.getElementById("timer");
// var interval = setInterval(() => {
//   timer();
// }, 1000);

// function timer() {
//   if (start > 0) {
//     start -= 1;
//     time.innerHTML = start;
//   } else {
//     clearInterval(interval);
//   }
// }

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
  // time(mainWord);
  var mainWordArray = mainWord.split("");                   //turns the string into array

  var mainWordArrayShuffled = shuffleArray(mainWordArray);  //shuffles the array (letters of words)

  var shuffledWord = mainWordArrayShuffled.join("");        //array turns into array

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

        if (count < 3) countUp();
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
