//hide and show games means start the game
var start=document.getElementById('start');
start.addEventListener('click',()=>{
    var game=document.getElementById('game');
    var starting=document.getElementById('starting');
    game.classList.remove('hide');
    starting.classList.add('hide');
    
})
//navbar
var navbar=document.getElementById('navbar');
navbar.addEventListener('click',()=>{
    var toggelbar=document.getElementById('toggelbar');
    toggelbar.classList.remove('hide');
    // game.style.opacity='0.8';
    // game.style.backgroundColor='black';
    // game.style.background='transparent';
});

//timer
var timer=document.getElementById('timer');
var minute=0;
var second=00;
setInterval(()=>{
    if(second<9){
        timer.innerHTML=minute+":0"+(second+1);
    }
    else{
        timer.innerHTML=minute+":"+(second+1);
    }
    second++;
    if(second>=59){
        minute++;
        second=-1;
    }

},1000);


//options styling
var optionlist=document.getElementsByClassName('option-list');

optionlist[0].style.backgroundColor='rgb(110, 232, 241)';
optionlist[0].style.border='7px solid rgb(132, 236, 244)';

optionlist[1].style.backgroundColor='rgb(143, 6, 6)';
optionlist[1].style.border='7px solid rgb(246, 106, 106)';

optionlist[2].style.backgroundColor='rgb(234, 135, 6)';
optionlist[2].style.border='7px solid rgb(247, 188, 112)';

optionlist[3].style.backgroundColor='rgb(19, 143, 5)';
optionlist[3].style.border='7px solid rgb(159, 245, 149)';


// options check
var score=document.getElementById('score');
var scoreValue=0;
var optionlist=[...optionlist];
optionlist.forEach(function(element) {
    var span=document.createElement('span');
    span.className='mark';
    span.id='mark';
    element.appendChild(span);
    element.addEventListener('click',function(){
        var img=document.getElementsByTagName('img');

        if(element.childNodes[3].innerHTML=='Pull and Push'){
            //this if for third option
            span.style.marginTop='-120px';

        }
        if(element.childNodes[3].innerHTML==img[0].alt){
            element.classList.add('animation');
            span.innerHTML='&#10003;';
            span.style.color='green';
            document.getElementById("awesomeSound").play(); // play the awesome sound
            var count=0;
            score.innerHTML="&#10003; "+(scoreValue+1);
            scoreValue++;
            var interval=setInterval(()=>{
                main();
                if(count==0){
                    clearInterval(interval);
                }
            },5000);
        }
        else{
            span.innerHTML='&#10007;';
            span.style.color='red';
            document.getElementById("yuckySound").play(); // Play the yucky sound
        }
    })
    
});


//images inserting
var images=[
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
var image=document.getElementById('image');
var button=document.getElementsByTagName('button');
button[0].addEventListener('click',main);
image.innerHTML=`<img src="./images/Push1.jpg" alt="Push"/>`;
var i=1;
function main(){
    image.innerHTML=`<img src="./images/${images[i]}" alt="${images[i].substring(0,4)}"/>`;
    i++;
    if(i>=images.length){
        i=0;
    }

    var span1=document.getElementsByClassName('mark');
    console.log(span1);
    for(var k=0;k<span1.length;k++){
        span1[k].innerHTML='';
    }
}


//&#10003;  //correct
//&#10007; //wrong