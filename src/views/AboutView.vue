<template>
  <body id="about-background">
    <div id="about" class="container text-center" data-aos="fade-up">
       <div class="row align-items-center">
        <div id="about-head" class="mb-5" data-aos="fade-up">
          <h1 id="aboutDrag">About</h1>
      
    </div>
        <div class="col-md-8 col-sm-8 mt-4" data-aos="fade-up">
          <div id="info-con">
            <h2 id="about-me-title" class="mt-">Who am I?</h2>
            <h5 id="about-me-body" class="mb-3 mx-3">
              I am an ambitious individual who loves to encounter new problems and I take pleasure in solving them. I have a great passion for expressing myself through my work. I believe that life is a never-ending journey of learning, there is always something new to learn, whether it is a new skill, a new piece of information, or a new way of looking at things. I am always willing to learn and not afraid to ask questions.
            </h5>
          </div>

          <div id="about-pi-con" class="mt-5" data-aos="fade-up">
            <h2 id="about-me-pi">Personal Details</h2>
            <h5 id="about-me-pi-bod">Date of birth: 11 April 2001</h5>
            <h5 id="about-me-pi-bod">Location: Heideveld </h5>
            
            
         
          </div>
        </div>

        <div class="col-lg-4 col-sm-4" data-aos="fade-right">
          <div id="about-img-div">
            <img id="about-img" class="mt-4" src="https://cdn-images.imagevenue.com/b9/f9/db/ME1868UJ_o.png" alt="">
          </div>
        </div>
      </div>
    </div>

    
  </body>
</template>

<script>
import aos from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {},
  mounted() {
    aos.init({
      duration: 800,
      once: false,
    });
  },
};
</script>

<style scoped>

#aboutDrag{

color: white;
font-family: "DM Serif Display";
font-size: 60px;

}

#about-head {
  background-color: black;
  color: #d9d9d9;
  border: 5px solid #44d62c;
  border-radius: 50px;
  font-family: "Raleway";
  font-size: 50px;
  text-align: center;


  box-shadow: 0px 0px 15px 4px #44d62c ;
}
#about {
  padding-top: 90px;
  max-width: 1500px;
}

#about-background {
  background-color: black;
  color: #44d62c;
  padding-top: 60px;

}

#about-img {
  border-radius: 50px;
  border: 3px solid #44d62c;
  transition: transform 0.3s;
  box-shadow: 0px 0px 15px 4px;
  width: 80%;
}



#about-me-title {
  color: #d9d9d9;
  border-radius: 20px;
  font-size: 41px;
  text-decoration: underline;
  text-decoration-color: #44d62c;
  font-weight: bold;
}

#info-con {
  border: 2px solid #44d62c;
  border-radius: 50px;
  transition: transform 0.3s;
  box-shadow: 0px 0px 15px 4px;
  font-family: "Raleway";
 
}


#about-pi-con {
  border: 2px solid #44d62c;
  border-radius: 50px;
  transition: transform 0.3s;
  box-shadow: 0px 0px 15px 4px;
  font-family: "Raleway";

}


#about-me-pi {
  color: #d9d9d9;
  border-radius: 20px;
  font-size: 41px;
  text-decoration: underline;
  text-decoration-color: #44d62c;
  font-family: "Raleway";
  font-weight: bold;
}


#about-me-body{
  font-weight: bold;
}

#about-me-pi-bod{
  font-weight: bold;
}




@media screen and (max-width: 1080px) {
  #about {
    padding-top: 50px;
    max-width: 100%;
  }

  #aboutDrag {
    font-size: 40px;
  }

  #about-head {
    font-size: 30px; 
  }

  #about-img {
    max-width: 100%; 
  }

  #info-con,
  #about-pi-con {
    font-size: 14px; 
  }
}


@media screen and (max-width: 720px) {
  #about {
    padding-top: 30px;
    max-width: 100%; 
  }

  #aboutDrag {
    font-size: 30px;
  }
  #about-head {
    font-size: 30px;
  }

  #about-img {
    max-width: 100%; 
  }

  #about-me-title{
    font-size: 26px;
  }

  #about-me-body{
    font-size: 15px;
  }

  #about-me-pi{
    font-size: 26px;
  }

  #about-me-pi-bod{
    font-size: 15px;
  }

  #blockquote{
    font-size: 15px;
  }
}


@media screen and (max-width: 300px) {
  #about {
    padding-top: 20px; 
    max-width: 100%; 
  }

  #aboutDrag {
    font-size: 32px;
  }
  
  #about-img {
    max-width: 100%; 
  }


  #about-me-title{
    font-size: 26px;
  }

  #about-me-body{
    font-size: 15px;
  }

  #about-me-pi{
    font-size: 26px;
  }

  #about-me-pi-bod{
    font-size: 15px;
  }

  #blockquote{
    font-size: 15px;
  }
}




</style>
