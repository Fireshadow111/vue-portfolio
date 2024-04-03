<template>
<div id="body">
  <div class="container" id="landingBody">
   
    <div class="px-4 py-5 my-5 text-center">
      <div class="display-5 fw-bold text-body-emphasis">
        <div class="container mt-5 mb-0" id="box">
          <span id="introText">Hi I am Muhammad</span>
        </div>
      </div>
      <p class="lead mb-1" id="text-L">Web Developer</p>
      <div class="col-lg-6 mx-auto">
      
        
<div id = "icons" class = "d-flex justify-content-center mt-4">

<div id = "linkedin-div">
  <a  href="https://www.linkedin.com/in/muhammad-rajah-a1a00421a/" target="_blank"><i id = "sol-icons" class="fa-brands fa-linkedin fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>
  
</div>

<div id = "github-div" class = "mx-3">

  <a  href="https://github.com/Fireshadow111" target="_blank"><i id = "sol-icons" class="fa-brands fa-github fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id = "whatsapp-div">

  <a  href="https://wa.me/+277741883" target="_blank"><i id = "sol-icons" class="fa-brands fa-whatsapp fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>

<div id = "instagram-div" class = "mx-3">

  <a  href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i id = "sol-icons" class="fa-brands fa-instagram fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id= "facebook-div">

  <a  href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i id = "sol-icons" class="fa-brands fa-square-facebook fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>
  
</div>
</div>

<div class = "d-flex justify-content-center mt-3">

  <a href = "#about">
    <button id = "button1" type="button" class="btn-lg mx-2">Who am I?</button>

  </a>

  <a href = "#contact">

    <button id = "button2" type="button" class="btn-lg mx-2">Contact Me</button>

  </a>
  
</div>




      </div>
</div>

</div>

</div>

</template>
<script>

// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default {
components : {
 
},

}
</script>
<style scoped>
#body{
font-family: Kaisei HarunoUmi;
overflow: hidden;

display: flex;
justify-content: center;
align-items: center;
padding-top: 60px;
padding-bottom: 70px;
}
#ic{
animation-name: fadeBeat;
animation-duration: 1s;
}
#ic:hover{
scale: 115%;
transition: all 0.15s ease-in-out;
}

@keyframes UpSideDown {
0%{
  transform: scale(70%);
  opacity: 0.5;
}
100% {
  transform: scale(100%);
}
}
#cursor{
width: 10px;
height: 5px;
background-color: #000000;
}
#body{
transition: all 0.5s ease-in-out;


background-position: center;
background-image: url("https://cdn-images.imagevenue.com/07/dd/8a/ME17Z49I_o.png");
background-repeat: no-repeat;
background-size: cover;
border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
}
#box {
white-space: nowrap;
position: relative;
overflow: hidden;
width: 540px;
animation: typewriter 4s steps(50) alternate;
}
#introText {
/* font-size: 35px; */
font-weight: 700;
background: linear-gradient(to right,#44d62c, #44d62c);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
overflow: hidden; /* Hides any content that overflows the container */
text-overflow: ellipsis; /* Displays an ellipsis (...) to indicate truncated text */
white-space: nowrap;
}
#text-L, #text-S{
color: #000000;
font-weight: 800;
transition: all 1s ease-in-out;
}
#text-L{
font-size: 30px;

color: #d9d9d9
}
@keyframes fadeBeat {
0%{
  filter: blur(90px);
}
25%{
  filter: blur(50px);
}
50%{
  filter: blur(20%);
}
75%{
  filter: blur(10%);
}
100%{
  filter: blur(0%);
}
}
[data-btn] {
width: 9em;
height: 3em;
color: rgb(255, 119, 0);
font-weight: bold;
border-radius: 30em;
font-size: 15px;
font-family: inherit;
position: relative;
overflow: hidden;
z-index: 1;
border: 1px solid orangered;
}
[data-btn]::before {
content: '';
width: 0;
height: 3em;
border-radius: 30em;
position: absolute;
top: 0;
left: 0;
background-image: linear-gradient(to right, #FF9100 10%, #F9B847 100%);
transition: .5s ease;
display: block;
z-index: -1;
}
[data-btn]:hover::before {
width: 9em;
}
@keyframes typewriter {
0% {
  width: 0px;
}
100% {
  width: 540px;
}
}
@media (max-width: 998px) {
#boxable{
  height: 250px;
  position: fixed;
  width: 170px;
  margin: 30px;
  left: 75%;
  top: 20%;
}
#moveableTxt{
  position: fixed;
  left: 0%;
  width: 150px;
  top: 0%;
  font-size: 10px;
}
}
@media (max-width: 780px) {
#boxable{
  height: 250px;
  position: fixed;
  width: 150px;
  margin: 30px;
  left: 75%;
  top: 10%;
}
#moveableTxt{
  position: fixed;
  left: 0%;
  width: 150px;
  top: 0%;
  font-size: 10px;
}
#box {
  width: 400px;
}
#introText {
  font-size: 30px;
  font-weight: 700;
}
}
@media (max-width: 598px) {
#boxable{
  height: 250px;
  position: fixed;
  width: 150px;
  margin: 30px;
  left: 63.5%;
  top: 10%;
}
#moveableTxt{
  position: fixed;
  left: 0%;
  width: 150px;
  top: 0%;
  font-size: 10px;
}
#box {
 width: 400px;
}
#introText {
  font-size: 25px;
  font-weight: 700;
}
#text-L{
  font-size: 20px;
}
#text-S{
  font-size: 15px;
}
[data-btn] {
  width: 9em;
  height: 2em;
  color: rgb(255, 119, 0);
  font-weight: bold;
  border-radius: 20em;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
[data-btn]::before {
  content: '';
  width: 0;
  height: 2em;
  border-radius: 20em;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #D80F0F 10%, #FF8000 100%);
  transition: .5s ease;
  display: block;
  z-index: -1;
}
}






@media (max-width: 540px) {
#introText{
  font-size: 20px;
}
#box {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 250px;
  animation: typewriter 4s steps(50) alternate;
}
#text-L{
  font-size: 15px;
}
#text-S{
  font-size: 11px;
}
@keyframes typewriter {
  0% {
    width: 0px;
  }
  100% {
    width: 300px;
  }
}
}
@media (max-width: 380px) {
#introText{
  font-size: 20px;
}
#box {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 250px;
  animation: typewriter 4s steps(50) alternate;
}
#text-L{
  font-size: 15px;
}
#text-S{
  font-size: 11px;
}
[data-btn]{
  font-size: 13px;
}
@keyframes typewriter {
  0% {
    width: 0px;
  }
  100% {
    width: 300px;
  }
}
}
</style>