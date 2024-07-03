<template>
    <div  id="navbarContainer" >


      <nav  class="navbar navbar-expand-lg fixed-top mx-auto mt-3" style="background-color: #d9d9d9; border-radius: 100px; max-width: 95%;">
  <div class="container justify-content-center">

  
    <a class="navbar-brand" href="#landingBody"><img id ="nav-image"  src="		https://cdn-images.imagevenue.com/f4/a4/a1/ME184HN5_o.png" alt=""></a>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a  id = "links" class = "mx-3 " aria-current="page" href= "#landingBody">Home</a> 
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
  max-width: 95%;
  /* width: 100%;
  position: fixed; */
  
}
#links {
  font-size: 35px;
  color: black;
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

.navbar{
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 4px #44d62c ;
}


#nav-image{
  height: 75px;
  width: 75px;
  border-radius: 50%;
  border: 5px solid #44d62c;
  box-shadow: 1px 1px 10px 1px #d9d9d9;

}



@media (max-width: 1125px) {
  .navbar-nav {
    flex-direction: column; 
    align-items: center;
  }

  #links {
    font-size: 25px;
    padding: 8px 12px;
  }

  #nav-image {
    height: 80px;
    width: 80px;
  }
}

@media (max-width: 1033px) {
  .navbar-nav {
    flex-direction: column; 
    align-items: center;
  }

  #links {
    font-size: 25px;
    padding: 8px 12px;
  }

  #nav-image {
    height: 80px;
    width: 80px;
  }
}

@media (width <= 1029px) {
  .navbar-nav {
    flex-direction: column; 
    align-items: center;
  }

  #links {
    font-size: 23px;
    padding: 8px 12px;
  }

  #nav-image {
    height: 80px;
    width: 80px;
  }
}




@media screen and (width <= 991px) {
  #nav-image {
    height: 60px;
    width: 60px;
  }
}


@media screen and (width <= 600px) {
  #nav-image {
    height: 40px;
    width: 40px;
  }
}


</style>