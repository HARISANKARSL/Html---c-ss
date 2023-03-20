const forgtbtn = document.querySelector(".forgtbtn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

forgtbtn.addEventListener("click",()=>{
  popup.style.display="flex"
});
close.addEventListener("click",()=>{
  popup.style.display="none"
});