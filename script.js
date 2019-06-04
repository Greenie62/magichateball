var eightball=document.querySelector(".eightball")
var eightballBtn=document.querySelector(".eightball-btn");
var eightballText=document.querySelector(".eightball-text");
var breakIcon=document.querySelector(".break-icon")

var taunts=['do you dare?', 'you aint got the. circuitry!', 'cmon tough guy, push my button!', 'back for more eh?']

var outputs=['hey hey hey, whose that shaking me around, holy be jeez', 'one of us is important in this world, ill let you decide who', 'did you wash your hands before playing with me','i dont think i like you very much', 'cheer up, it could be worse. i could be you, i mean.ooops. yea your right, be depressed.times 2.maybe 3']

eightballBtn.addEventListener("mouseenter",tauntText)
eightball.addEventListener('click',insultClient)
eightballBtn.addEventListener("mouseleave",restoreText)

breakIcon.addEventListener("click",breakBall)


function tauntText(){
    eightballText.style.fontSize="12px"
    eightballText.textContent=taunts[Math.floor(Math.random()*taunts.length)]
}

function restoreText(){
    eightballText.style.fontSize="35px"
    eightballText.textContent="8"
}


function breakBall(){
    eightball.classList.toggle("show-ball")

}


function insultClient(){
   
        const speech=new SpeechSynthesisUtterance();
        speech.text=outputs[Math.floor(Math.random()*outputs.length)]
        speech.volume=1;
        speech.pitch=3;
        speech.rate=1;

        window.speechSynthesis.speak(speech)
    }
