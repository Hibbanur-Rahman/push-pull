//hide and show games means start the game
var start = document.getElementById('start');
var container = document.querySelector('.container');
start.addEventListener('click', () => {
    var game = document.getElementById('game');
    var starting = document.getElementById('starting');
    game.classList.remove('hide');
    starting.classList.add('hide');
})
//navbar
var navbar = document.getElementById('navbar');
navbar.addEventListener('click', (e) => {
    var toggelbar = document.getElementById('toggelbar');
    toggelbar.classList.remove('hide');
    game.style.opacity = '0.08';
    game.style.backgroundColor = 'rgba(0, 0, 0, 0.41)';
    console.log(e.currentTarget);
    game.addEventListener('click', resume1);
});


//timer
var timer = document.getElementById('timer');
var minute = 0;
var second = 0;
setInterval(() => {
    if (second < 9) {
        timer.innerHTML = minute + ":0" + (second + 1);
    }
    else {
        timer.innerHTML = minute + ":" + (second + 1);
    }
    second++;
    if (second >= 59) {
        minute++;
        second = -1;
    }

}, 1000);


//options styling
var optionlist = document.getElementsByClassName('option-list');

optionlist[0].style.backgroundColor = 'rgb(110, 232, 241)';
optionlist[0].style.border = '7px solid rgb(132, 236, 244)';

optionlist[1].style.backgroundColor = 'rgb(143, 6, 6)';
optionlist[1].style.border = '7px solid rgb(246, 106, 106)';

optionlist[2].style.backgroundColor = 'rgb(234, 135, 6)';
optionlist[2].style.border = '7px solid rgb(247, 188, 112)';

optionlist[3].style.backgroundColor = 'rgb(19, 143, 5)';
optionlist[3].style.border = '7px solid rgb(159, 245, 149)';


// options check
var score = document.getElementById('score');
var scoreValue = 0;
var optionlist = [...optionlist];
var storeResponse={};
var validition=0;
optionlist.forEach(function (element) {
    var span = document.createElement('span');
    span.className = 'mark';
    span.id = 'mark';
    element.appendChild(span);
    element.addEventListener('click', function () {
        var img = document.getElementsByTagName('img');
        if (element.childNodes[3].innerHTML == 'Pull and Push') {
            //this if for third option
            span.style.marginTop = '-120px';

        }
        if (element.childNodes[3].innerHTML == img[0].alt) {
            element.classList.add('animation');
            span.innerHTML = '&#10003;';
            span.style.color = 'green';
            document.getElementById("awesomeSound").play(); // play the awesome sound
            var count = 0;
            score.innerHTML = "&#10003; " + (scoreValue + 1);
            scoreValue++;
            var interval = setInterval(() => {
                main(1,element);
                if (count == 0) {
                    clearInterval(interval);
                }
            }, 5000);
        }
        else {
            span.innerHTML = '&#10007;';
            span.style.color = 'red';
            document.getElementById("yuckySound").play(); // Play the yucky sound
            var count = 0;
            var interval = setInterval(() => {
                main(0,element);
                if (count == 0) {
                    clearInterval(interval);
                }
            }, 5000);
        }
    })

});

// optionlist.forEach(function(element){
//     element.addEventListener('mouseover',speak('hibban'));
// })


//images inserting
var images = [
    "Push1.jpg",
    "Push2.png",
    "Push3.png",
    "Push4.jpg",
    "Push5.png",
    "Push6.png",
    "Push7.jpg",
    "Pull.jpg",
    "Pull1.jpg"
]
var image = document.getElementById('image');
var button = document.getElementsByTagName('button');
button[0].addEventListener('click', main);
image.innerHTML = `<img src="./images/Push1.jpg" alt="Push"/>`;
var i = 1;
function main(correctness,element) {
    image.innerHTML = `<img src="./images/${images[i]}" alt="${images[i].substring(0, 4)}"/>`;
    storeResponse[i]=element.childNodes[3].innerHTML;
    i++;
    if (i >= images.length) {
        i = 0;
    }

    var span1 = document.getElementsByClassName('mark');
    // console.log(span1);
    for (var k = 0; k < span1.length; k++) {
        span1[k].innerHTML = '';
    }
    console.log(correctness,element.childNodes[3].innerHTML);
    // if(element.childNodes[3].innerHTML=='Push'){
    //     storeResponse[i]=2;
    // };
    // if(element.childNodes[3].innerHTML=='Pull'){
    //     storeResponse[i]=1;
    // };
    // if(element.childNodes[3].innerHTML=='Pull and Push'){
    //     storeResponse[i]=3;
    // };
    // if(element.childNodes[3].innerHTML=='none'){
    //     storeResponse[i]=4;
    // }
    

    
}

//&#10003;  //correct
//&#10007; //wrong


//submitAnswer
var submitAnswer = document.getElementById('submitAnswer');
var startAgain = document.getElementById('startAgain');
var resume = document.getElementById('resume');

submitAnswer.addEventListener('click', () => {
    var showSubmit = document.querySelector('.show-submit');
    showSubmit.classList.remove('hide');
    game.style.opacity = '0.08';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.41)';
    toggelbar.classList.add('hide');
    navbar.classList.add('hide');
    game.style.pointerEvents = 'none';

    var scoreShow = document.querySelector('.score-show');
    scoreShow.innerHTML = `<p>Score</p>
    <p>${scoreValue}/${9}</p>`;

    var timeShow = document.querySelector('.time-show');
    if (second >= 10) {
        timeShow.innerHTML = `<p>Time</p>
        <p>${minute}.${second}min</p>`;
    }
    else {
        timeShow.innerHTML = `<p>Time</p>
        <p>${minute}.0${second}min</p>`;
    }

})

//for resume the game
resume.addEventListener('click', resume1)
function resume1() {
    var toggelbar = document.getElementById('toggelbar');
    toggelbar.classList.add('hide');
    game.style.opacity = '1';
    game.style.backgroundColor = 'white';
}

//show answers
var showAnswer = document.querySelector('.show-Answer');
showAnswer.addEventListener('click', showAnswer1);
function showAnswer1() {

    var answerList = document.querySelector('.answers-list');
    console.log(answerList, typeof answerList);
    console.log(storeResponse);
    for (var i = 0; i < scoreValue; i++) {
        

        var answerItemParent = document.createElement('div');
        answerItemParent.className = "answers-item";
        var answerItem = `
            <div class="sno">${i + 1}.</div>
            <div class="">
                <img src="./images/${images[i]}"/>
            </div>
            <div class="answer-item-p">
                <p>is this push Or pull,Or none</p>
            </div>
            <div class="your-answer answer">
                ${storeResponse[i]}
            </div>
            <div class="answer right-answer">

            </div>
        `
        answerItemParent.innerHTML = answerItem;
        answerList.appendChild(answerItemParent);
        console.log(storeResponse);
    }
}


//speek
function speak(message) {
    if ('speechSynthesis' in window) {
        // Create a SpeechSynthesisUtterance instance
        const speechUtterance = new SpeechSynthesisUtterance();

        // Set the default voice
        speechUtterance.voice = speechSynthesis.getVoices()[0];

        // Set the rate and pitch (optional)
        speechUtterance.rate = 1; // Speed rate (0.1 to 10)
        speechUtterance.pitch = 1; // Pitch (0 to 2)

        speechUtterance.text = message;
        speechSynthesis.speak(speechUtterance);
        console.log(message);

        // Attach an event listener to the speak button
        // speakButton.addEventListener('click', function () {
        //     // Set the text to be spoken
        //     speechUtterance.text = textInput.value;

        //     // Speak the text
        //     speechSynthesis.speak(speechUtterance);
        // });
    } else {
        alert('Speech synthesis is not supported in this browser.');
    }
}
