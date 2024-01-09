<template>
    <div id="navbarContainer" class="bg-black">

      
        
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid justify-content-center">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul class="navbar-nav mb-1 ">
        <router-link id = "links" class = "mx-2" aria-current="page" to= "/">Home</router-link> 
        <router-link id = "links" class = "mx-2" to ="/about">About</router-link>
        <router-link id = "links" class = "mx-2" to ="/resume">Resume</router-link>
        <router-link id = "links" class = "mx-2" to ="/projects">Projects</router-link>
        <router-link id = "links" class = "mx-2" to ="/testimonials">Testimonials</router-link>
        <router-link id = "links" class = "mx-2" to ="/contact">Contact</router-link>
      </ul>
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
  font-size: 25px;
  color: #44d62c;
  font-family: "Roboto";
  font-style: italic;
  font-weight: bold;

  transition: text-decoration 0.5s;
  text-decoration: none;
}

#links:hover {
  text-decoration: underline;
  text-decoration-color: var(--razerGreen);
  text-decoration-thickness: 3px;
}
    
</style>