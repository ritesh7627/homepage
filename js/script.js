burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar-resp')
para = document.querySelector('.para-resp')
burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-resp');
    para.classList.toggle('para-resp')
})
let x;
document.getElementById("dice-roll").onclick = function(){
    x=Math.floor(Math.random()*6)+1;
    document.getElementById("dice-no").innerHTML=x;
}