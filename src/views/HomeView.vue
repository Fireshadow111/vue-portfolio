<template>
  
<body id = "background">
  
  <div id = "home-con" class="container text-center">
      <div class="row align-items-center">

    <div id = "heading-div" class = "mt-5">
<div class = "d-flex justify-content-center">

  <h1>Muhammad Rajah</h1>

</div>

<div class = "d-flex justify-content-center mt-2">

  <h2>Aspiring Front End Developer</h2>

</div>


</div>

<div id = "icons" class = "d-flex justify-content-center mt-4">

<div id = "linkedin-div">
  <a href="https://www.linkedin.com/in/muhammad-rajah-a1a00421a/" target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>
  
</div>

<div id = "github-div" class = "mx-3">

  <a href="https://github.com/Fireshadow111" target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id = "whatsapp-div">

  <a href="https://wa.me/+277741883" target="_blank"><i class="fa-brands fa-whatsapp fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>

<div id = "instagram-div" class = "mx-3">

  <a href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i class="fa-brands fa-instagram fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id= "facebook-div">

  <a href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i class="fa-brands fa-square-facebook fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>
  
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


  

  


<footer class = "footer fixed-bottom">محمد - @Copyright&copy  - 2024</footer>
</body>
    
    
 
</template>

<script>



export default {
  name: 'HomeView',
  components: {
 
  }
}
</script>


<style scoped>

*{
  color:#44d62c ;
}

#home-con{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

}

#background{
  background-image: url("https://cdn-images.imagevenue.com/66/ad/a9/ME17G3OJ_o.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

#heading-div{
  background-color: black;
  border-radius: 70px;
  border: 3.5px solid #44d62c ;
  background-color: none;
  animation-name: welcome;
  animation-duration: 26s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
}

/* Home Page Animations */

@keyframes welcome{
  0%{
      left: 0px;
      top: -800px;
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






h1{
  font-family: "DM Serif Display";
  font-size: 70px;
}

h2{
  color: white;
  font-size: 45px;
  font-family: "Roboto";
  font-weight: bold;
  font-style: italic;
}

#button1{
  font-family: "Roboto";
  font-size: 22px;
  background-color: #44d62c;
  border-color: black;
  border-radius: 50px;
  margin-top: 20px;
  color: black;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  font-weight: bold;

}

#button2{
  font-family: "Roboto";
  font-size: 22px;
  background-color: #44d62c;
  border-color: black;
  border-radius: 50px;
  margin-top: 20px;
  color: black;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  font-weight: bold;
}

#button1:hover{
  background-color: black;
  color: #44d62c;
  border-color: white;
}

#button2:hover{
  background-color: black;
  color: #44d62c;
  border-color: white;
}


.footer {
  font-size: 15px;
  color: black;
  font-weight: bolder;
  text-align: center;
  background-color: #44d62c;
}

@media(max-width: 300px) {
  #heading-div {
    border-radius: 20px; 
  }

  h1 {
    font-size: 40px; 
  }

  h2 {
    font-size: 20px; 
  }

  #button1, #button2 {
    font-size: 16px; 
    margin-top: 10px; 
  }

  .footer {
    font-size: 12px; 
      margin-top: 20px;
  }
}



</style>
