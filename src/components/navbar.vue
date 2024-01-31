<template>
    <div id="navbarContainer" class="bg-black">


      <nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background-color: black;">
  <div class="container-fluid justify-content-center">

  
    <a class="navbar-brand" href="#"><img id ="nav-image" src="https://cdn-images.imagevenue.com/94/d5/66/ME17GIVB_o.jpg" alt=""></a>
  
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
  color: #44d62c;
  font-family: "DM Serif Display";
  font-style: italic;
  font-weight: bold;

  transition: text-decoration 0.5s;
  text-decoration: none;
}

#links:hover {
  text-decoration: underline;
  text-decoration-color: #44d62c;
  text-decoration-thickness: 3px;
}

#navbarNavAltMarkup{
  border-bottom: 2px solid #44d62c;
  text-decoration-thickness: 3px;
}
    

  #nav-image{
    max-width: 160px;
  
    
  }
</style>