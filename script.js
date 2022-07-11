const menuBtn = document.getElementById("btn-hamburger");
const nav = document.getElementById("nav-ham");
const hidden = document.body;



menuBtn.addEventListener('click',function(){
  nav.classList.toggle('active')
  menuBtn.classList.toggle('active')
  hidden.classList.toggle('active')

})