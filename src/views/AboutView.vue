<template>
      <body id = "background">
        
        
        <div class="container text-center">
      <div class="row align-items-center">

        <div id = "about-head-div" class = "mt-2">
          <h1 id = "about-me-head">About me</h1>
    
        </div>
     
        <div class="col-md-8 col-sm-8 mt-4">

          <div id = info-con>
          <h2 id = "about-me-title" class = "mt-">Who am I?</h2>

          <h5 id = "about-me-body" class = "mb-3 mx-3">I am an ambitious individual who loves to encounter new problems and I take pleasure in solving them. I have a great passion for expressing myself through my work. I believe that life is a never-ending journey of learning, there is always something new to learn, whether it is a new skill, a new piece of information, or a new way of looking at things. I am always willing to learn and not afraid to ask questions.</h5>

        </div>
        
      <div id = "about-pi-con" class = "mt-5">

        <h2 id = "about-me-pi">Personal Details</h2>

      <h5 id = "about-me-pi-bod1">Date of birth: 11 April 2001</h5> 
          <h5 id = "about-me-pi-bod2">Location: Heideveld </h5>
          <h5 id = "about-me-pi-bod3">Cell No: 067 774 1883 </h5>
          <h5 id = "about-me-pi-bod4">Email: muhammadrajah22@gmail.com</h5>
        </div>
       
        
      </div>
   
        <div class="col-lg-4 col-sm-4">
          <div id = "about-img-div">
            <img id = "about-img" class = "mt-4" src="https://cdn-images.imagevenue.com/67/45/01/ME17G5I8_o.png" alt="">
        </div>
      </div>
      </div>
    </div>

  </body>
</template>
<script>
export default {
    
}
</script>
<style scoped>

#background{
  background-color: black;
  min-height: 100vh;
  color: #44d62c;
}

#about-img{
  border-radius: 50px;
  border: 3px solid #44d62c;
}

#about-me-head{
  color: white;
  border: 4px solid #44d62c ;
  border-radius: 50px;
  font-family: "DM Serif Display";
  font-size: 55px;

}

#about-me-title{
  color: white;
  border-radius: 20px;
  font-size: 41px;
  text-decoration: underline;
  text-decoration-color: #44d62c;
}

#info-con{
  border: 2px solid #44d62c ;
  border-radius: 50px;
}

    
#about-pi-con{
  border: 2px solid #44d62c ;
  border-radius: 50px;
}

#about-me-pi{
  color: white;
  border-radius: 20px;
  font-size: 41px;
  text-decoration: underline;
  text-decoration-color: #44d62c;
}

/* #about-me-pi-bod1{

}

#about-me-pi-bod2{
  
}

#about-me-pi-bod3{
  
}

#about-me-pi-bod4{
  
} */

</style>