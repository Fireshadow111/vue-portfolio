<template>
    <body id = "background">

       <div id = "projects" class="container text-center" data-aos="fade-up">

        <div class="row align-items-center">
        <div id="projects-head" class="mb-5" data-aos="fade-up">
          <h1 id="projectsDrag">Projects</h1>
      
    </div>
        </div>
          
          
                        
                        <div id = "grid" data-aos="fade-up">
                        <div  v-for = "projects in rajah" :key = "projects" class="card mx-5 my-5">
                            <div class="cardImage">
                            <img   style = "border-radius: 20px; height: 200px;" class="img-fluid d-flex mx-auto" :src="projects.projImage">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">{{projects.projCardTitle}}</div>
                            <p style = "color: black">{{projects.projCardInfo}}</p>
                        </div>
                        <div class="footer" style="border-radius: 20px;">
                          <a target = _blank href="https://fancy-begonia-21b598.netlify.app/" style = "color: black; font-weight: bold;" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
                        <a target = _blank href="https://github.com/Fireshadow111/interest-amount.git" style = "color: black; font-weight: bold;" class="btn "><i class="fab fa-github"></i> Github</a>
                            
                        </div>
                    </div>
                        
                </div>
            </div>



    
    </body>
</template>
<script>
import aos from 'aos'

export default {
    methods: {
    fetchDataProjects() {
      this.$store.dispatch('fetchDataProjects');
    }
  },

  computed:{

rajah()  {return this.$store.state.projects}
},
  mounted() {
    this.fetchDataProjects();
    aos.init({
      duration: 800,
      once: false,
    });
  },
}
</script>
<style scoped>

#projectsDrag{

color: white;
font-family: "DM Serif Display";
font-size: 60px;

}

#projects-head {
  background-color: black;
  color: white;
  border: 5px solid #44d62c;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;

}

#projects{
    padding-top: 70px;
    max-width: 1500px;
}
#grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 20px;
}

#background{
    background-color: black;
    color: #44d62c;
    min-height: 140vh;
  
}



.card{
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 28px #44d62c;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.card:hover{
    transform:scale(105%);
    box-shadow: 0 0 45px #44d62c;
}

.card-title{
  background-color: black;
  color: #44d62c;
  font-weight: bold;
  font-size: 18px;
}

p{
  font-weight: bold;
  
}


.btn i.fas.fa-link,
.btn i.fab.fa-github {
    transition: transform 0.3s ease;
}

.btn:hover i.fas.fa-link,
.btn:hover i.fab.fa-github {
    transform: scale(115%);
}

a{
    transition: transform 0.3s ease;
}

a:hover{
    transform: scale(115%);
}



@media (max-width: 300px) {
  .card {
    margin: 0 auto 10px;
  }
}

</style>

        
