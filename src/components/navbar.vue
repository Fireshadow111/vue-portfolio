<template>
    <div id="navbarContainer" class="bg-black">


      <nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background-color: black;">
  <div class="container justify-content-center">

  
    <a class="navbar-brand" href="#home-con"><img id ="nav-image" src="https://cdn-images.imagevenue.com/f2/e2/8a/ME17QREJ_o.png" alt=""></a>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a id = "links" class = "mx-3" aria-current="page" href= "#home-con">Home</a> 
        <a id = "links" class = "mx-3" href ="#about">About</a>
        <a id = "links" class = "mx-3" href ="#resume">Resume</a>
        <a id = "links" class = "mx-3" href ="#projects">Projects</a>
        <a id = "links" class = "mx-3" href ="#testimonials">Testimonials</a>
        <a id = "links" class = "mx-3" href ="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
      
        
    </div>
</template>
<script>
export default {
 
 
}
</script>
<style scoped>
#navbarContainer{
  display: flex;
  justify-content: center;
  /* width: 100%;
  position: fixed; */
}
#links {
  font-size: 35px;
  color: #d9d9d9;
  font-family: "DM Serif Display";
  font-weight: bold;

  transition: text-decoration 0.5s;
  text-decoration: none;
}

#links:hover {
  text-decoration: underline;
  text-decoration-color: #44d62c;
  text-decoration-thickness: 3px;
}


    

  #nav-image{
    max-width: 200px;
  max-height: 40px;
    
  }




  @media only screen and (max-width: 398px) {

  #navbarContainer {
    flex-direction: column;
  }

  .navbar-collapse {
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
  }

  .navbar-nav a {
    margin: 10px 0;
  }

  nav{
    width: 390px;
  }
}

@media only screen and (max-width: 301px) {
 
  #navbarContainer {
    padding: 10px; 
  }

  #nav-image {
    max-width: 130px; 
  }

  .navbar-nav a {
    font-size: 10px; 
  }

  nav{
    max-width: 290px;
  }
}




</style>