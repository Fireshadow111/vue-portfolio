<template>
    <body id = "background">

       <div id = "projects" class="container text-center" data-aos="fade-up">

        <div class = "project-head-div pt-3">
        <h1 class = "project-head">Projects</h1>
          </div>
          
          
                        
                        <div id = "grid" data-aos="fade-up">
                        <div  v-for = "projects in rajah" :key = "projects" class="card mx-5 my-5">
                            <div class="cardImage">
                            <img   style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" :src="projects.projImage">
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

    
   
      

       <!-- <div class="container text-center">
      <div class="row align-items-center">

      <div class = "project-head-div mt-3">
        <h1 class = "project-head">Project</h1>
          </div>
        </div>

        </div>

      <div id = "proj-con" class="container text-center">
            <div class="row">
                <div class="col-md-4 my-5">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/01/e1/1e/ME17GDPY_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Interest Calculator</div>
                            <p>This project users JavaScript and accepts numeric inputs and outputs the amount of interest accumulated
                            over the duration given.</p>
                        </div>
                        <div class="footer">
                          <a target = _blank href="https://fancy-begonia-21b598.netlify.app/" style = "color: black; font-weight: bold;" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
                        <a target = _blank href="https://github.com/Fireshadow111/interest-amount.git" style = "color: black; font-weight: bold;" class="btn "><i class="fab fa-github"></i> Github</a>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-5">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/d9/ea/be/ME17GDQ4_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Ecommerce Store</div>
                            <p>Created with HTML/CSS/JavaScript that allows a user to add to cart, checkout and also gives administrative privilages to admins.</p>
                        </div>
                        <div class="footer">
                          <a target = _blank href="https://ecommerce-store-javascript.netlify.app/" style = "color: black; font-weight: bold;" class="btn  mr-2"><i class="fas fa-link"></i> Visit Site</a>
    <a target = _blank href="https://github.com/Fireshadow111/ecommerce-store-javascript.git" style = "color: black; font-weight: bold;" class="btn"><i class="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-5">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto ">
                        <div class="card-image">
                            <img style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/89/9f/2c/ME17GDQ1_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">RGB to HEX Converter</div>
                            <p>The primary function of the project involves receiving input in the form of RGB (Red, Green, Blue) color values and outputs the HEX colour equivalent.</p>
                        </div>
                        <div class="footer">
                          <a target = _blank href="https://chipper-biscotti-6718f0.netlify.app/" style = "color: black; font-weight: bold;" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
    <a target = _blank href="https://github.com/Fireshadow111/rgb-to-hex.git" style = "color: black; font-weight: bold;" class="btn "><i class="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 my-3">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/61/c0/1c/ME17GDPZ_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Temperature Converter</div>
                            <p>This project users JavaScript and converts fahrenheit to celsius.</p>
                        </div>
                        <div class="footer">
                          <a target = _blank href="https://chipper-sundae-f73811.netlify.app/" style = "color: black; font-weight: bold;" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
    <a target = _blank href="https://github.com/Fireshadow111/tempConverter-project.git" style = "color: black;font-weight: bold;" class="btn"><i class="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/54/6f/57/ME17GDQ5_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Razer Store</div>
                            <p>This is a store created with HTML/CSS, it has no real functionality.</p>
                        </div>
                        <div class="footer">
                          <a target = _blank href="https://musical-dodol-21bd7b.netlify.app/" style = "color: black; font-weight: bold;" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
    <a target = _blank href="https://github.com/Fireshadow111/razer-project-personal.git" style = "color: black; font-weight: bold;" class="btn"><i class="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto ">
                        <div class="card-image">
                            <img style = "border-radius: 20px;" class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/20/e1/23/ME17GDQ2_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Calculator</div>
                            <p>This calculator accepts the numbers and operations clicked by the user and outputs the answer.</p>
                        </div>
                        <div class="footer">
                          <a target = _blank href="https://effulgent-banoffee-8f84bc.netlify.app/" style = "color: black; font-weight: bold;" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
    <a target = _blank href="https://github.com/Fireshadow111/fancy-calculator.git" style = "color: black; font-weight: bold;" class="btn"><i class="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        




  


    
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

#projects{
    padding-top: 70px;
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

.project-head{
      background-color: black;
      color: white;
      border: 5px solid #44d62c;
      border-radius: 50px;
      font-family: "DM Serif Display";
      font-size: 55px;
     
  
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

        
