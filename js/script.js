var bgmusic = document.getElementById("bgmusic");
bgmusic.volume = 0.03;
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar-resp')
para = document.querySelector('.para-resp')
burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-resp');
    para.classList.toggle('para-resp')
})
let x=0;
let y=0;
document.getElementById("dice-roll").onclick = function(){
    x=Math.floor(Math.random()*6)+1;
    y=document.getElementById("dice-no").innerText
    if(y==x)
    {
    document.getElementById("again").innerHTML="Again!!"; 
    }
    else{
    document.getElementById("dice-no").innerHTML=x;   
    document.getElementById("again").innerHTML=""; 
    }
    console.log(y);   
}
