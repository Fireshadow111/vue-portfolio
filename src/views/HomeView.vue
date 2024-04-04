<template>
<div id="body">
  <div class="container" id="landingBody">
   
    <div class="px-4 py-5 my-5 text-center">
      <div class="display-5 fw-bold text-body-emphasis">
        <div class="container mt-5 mb-0" id="box">
          <span id="introText">Hi, I am Muhammad</span>
        </div>
      </div>
      <p class="lead mb-1 style fade-in" id="text-L">Web Developer</p>
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
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding-top: 60px;
padding-bottom: 70px;
}
#ic{
animation-name: fadeBeat;
animation-duration: 6s;
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
background-image: url("https://cdn-images.imagevenue.com/2f/8b/35/ME17Z5HP_o.png");
background-repeat: no-repeat;
background-size: cover;
border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
}

#button1{
  background-color: #d9d9d9;


}

#button2{
  background-color: #d9d9d9;
}

#box {
white-space: nowrap;
position: relative;
overflow: hidden;
width: 540px;
animation: typewriter 10s alternate;
/* animation-name: name;
  animation-duration: 20s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate; */
}
#introText {

font-weight: 700;
background: linear-gradient(to right,#44d62c, #44d62c);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
overflow: hidden; 
text-overflow: ellipsis; 
white-space: nowrap;
}
#text-L, #text-S{
color: #000000;
font-weight: 800;
transition: all 1s ease-in-out;
}
#text-L{
font-size: 30px;

color: white;

/* animation-name: webdev;
  animation-duration: 20s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate; */
}

@keyframes webdev{
  0%{
      left: 800px;
      top: 0px;
  }

  25%{
      left: 0px;
      top: 0px;

  }

  50%{
      left: 0px;
     top:0px;

  }

  75%{
      top: 0px;
      left: 0px 
   }

   100%{
      left: 0px;
      top: 0px;
  }
}  

@keyframes name{
  0%{
      left: -800px;
      top: 0px;
  }

  25%{
      left: 0px;
      top: 0px;

  }

  50%{
      left: 0px;
     top:0px;

  }

  75%{
      top: 0px;
      left: 0px 
   }

   100%{
      left: 0px;
      top: 0px;
  }
}  


.fade-in {
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;
}


@keyframes fadeIn{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
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
color: #44d62c;
font-weight: bold;
border-radius: 30em;
font-size: 15px;
font-family: inherit;
position: relative;
overflow: hidden;
z-index: 1;
border: 1px solid #44d62c;
}
[data-btn]::before {
content: '';
width: 0;
height: 3em;
border-radius: 30em;
position: absolute;
top: 0;
left: 0;
background-image: linear-gradient(to right, #44d62c, 10%, #44d62c, 100%);
transition: .5s ease;
display: block;
z-index: -1;
}
[data-btn]:hover::before {
width: 9em;
}


@keyframes typewriter {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
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
  color: #44d62c;
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
  background-image: linear-gradient(to right, #44d62c, 10%, #44d62c, 100%);
  transition: .5s ease;
  display: block;
  z-index: -1;
}
#button1{
    width: 130px;
    font-size: 15px;

  }

  #button2{
    width: 130px;
    font-size: 15px;
  }
}





@media (max-width: 500px) {
  #body {
    padding-top: 30px;
    padding-bottom: 40px;
  }

  #boxable {
    height: 200px;
    width: 120px;
    margin: 20px;
    left: 60%;
    top: 5%;
  }

  #moveableTxt {
    width: 120px;
    font-size: 8px;
  }

  #box {
    width: 300px;
  }

  #introText {
    font-size: 25px;
  }

  #text-L {
    font-size: 18px;
  }

  #text-S {
    font-size: 12px;
  }

  [data-btn] {
    width: 7em;
    height: 1.5em;
    border-radius: 15px;
  }

  [data-btn]::before {
    height: 1.5em;
    border-radius: 15px;
  }
  #button1{
    width: 130px;
    font-size: 15px;
  }

  #button2{
    width: 130px;
    font-size: 15px;
  }
}



@media (max-width: 400px) {
  #body {
    padding-top: 20px;
    padding-bottom: 30px;
  }

  #boxable {
    height: 180px;
    width: 100px;
    margin: 15px;
    left: 50%;
    top: 5%;
  }

  #moveableTxt {
    width: 100px;
    font-size: 6px;
  }

  #box {
    width: 250px;
  }

  #introText {
    font-size: 22px;
  }

  #text-L {
    font-size: 15px;
  }

  #text-S {
    font-size: 10px;
  }

  [data-btn] {
    width: 6em;
    height: 1.2em;
    border-radius: 10px;
  }

  [data-btn]::before {
    height: 1.2em;
    border-radius: 10px;
  }
  #button1{
    width: 130px;
    font-size: 12px;
  }

  #button2{
    width: 130px;
    font-size: 12px;
  }
}



@media (max-width: 300px) {
  #body {
    padding-top: 15px;
    padding-bottom: 20px;
  }

  #boxable {
    height: 150px;
    width: 80px;
    margin: 10px;
    left: 45%;
    top: 5%;
  }

  #moveableTxt {
    width: 80px;
    font-size: 5px;
  }

  #box {
    width: 200px;
  }

  #introText {
    font-size: 20px;
  }

  #text-L {
    font-size: 18px;
  }

  #text-S {
    font-size: 8px;
  }

  [data-btn] {
    width: 5em;
    height: 1em;
    border-radius: 8px;
  }

  [data-btn]::before {
    height: 1em;
    border-radius: 8px;
  }

  #button1{
    width: 130px;
    font-size: 12px;
  }

  #button2{
    width: 130px;
    font-size: 12px;
  }

 
}






@media (max-width: 358px) {
  #body {
    padding-top: 15px;
    padding-bottom: 20px;
  }

  #boxable {
    height: 150px;
    width: 80px;
    margin: 10px;
    left: 45%;
    top: 5%;
  }

  #moveableTxt {
    width: 80px;
    font-size: 5px;
  }

  #box {
    width: 200px;
  }

  #introText {
    font-size: 18px;
  }

  #text-L {
    font-size: 15px;
  }

  #text-S {
    font-size: 8px;
  }

  [data-btn] {
    width: 5em;
    height: 1em;
    border-radius: 8px;
  }

  [data-btn]::before {
    height: 1em;
    border-radius: 8px;
  }

  #button1{
    width: 130px;
    font-size: 12px;
  }

  #button2{
    width: 130px;
    font-size: 12px;
  }
}





</style>