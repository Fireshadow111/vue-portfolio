<template>
    <div id="navbarContainer" class="bg-black">


      <nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background-color: black;">
  <div class="container justify-content-center">

  
    <a class="navbar-brand" href="#landingBody"><img id ="nav-image" src="https://cdn-images.imagevenue.com/f2/e2/8a/ME17QREJ_o.png" alt=""></a>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a id = "links" class = "mx-3" aria-current="page" href= "#landingBody">Home</a> 
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
  mounted() {
    
    document.querySelectorAll('.navbar-nav a').forEach((elem) => {
      elem.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
      });
    });

    
    const toggleButton = document.querySelector('.navbar-toggler');
    toggleButton.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    });


    document.addEventListener('click', (event) => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (!navbarCollapse.contains(event.target) && !toggleButton.contains(event.target)) {
        navbarCollapse.classList.remove('show');
      }
    });
  }
  
   
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


  @media only screen and (max-width: 1080px) {

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

@media only screen and (max-width: 300px) {

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

@media only screen and (max-width: 992px) {

#links {
  font-size: 28px;
 
}
}


@media only screen and (max-width: 621px) {

#links {
 font-size: 22px;

}
}


@media only screen and (max-width: 383px) {

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
 max-width: 380px;
}
}



@media only screen and (max-width: 357px) {

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
 max-width: 350px;
}
}



@media only screen and (max-width: 341px) {

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
 max-width: 340px;
}
}





@media only screen and (max-width: 325px) {

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
 max-width: 320px;
}
}


@media only screen and (max-width: 307px) {

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
 max-width: 300px;
}
}


@media only screen and (max-width: 300px) {

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
 max-width: 295px;
}
}




@media only screen and (max-width: 291px) {

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