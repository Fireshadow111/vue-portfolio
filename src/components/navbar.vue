<template>
    <div id="navbarContainer" class="bg-black">


      <nav class="navbar navbar-expand-lg  navbar-dark">
  <div class="container-fluid justify-content-center">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link id = "links" class = "mx-3" aria-current="page" to= "/">Home</router-link> 
        <router-link id = "links" class = "mx-3" to ="/about">About</router-link>
        <router-link id = "links" class = "mx-3" to ="/resume">Resume</router-link>
        <router-link id = "links" class = "mx-3" to ="/projects">Projects</router-link>
        <router-link id = "links" class = "mx-3" to ="/testimonials">Testimonials</router-link>
        <router-link id = "links" class = "mx-3" to ="/contact">Contact</router-link>
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
<style>
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
    
</style>