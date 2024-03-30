<template>
    <body id = "background">

       <div id = "projects" class="container text-center" data-aos="fade-up">

        <div class="row align-items-center">
        <div id="projects-head" class="mb-5" data-aos="fade-up">
          <h1 id="projectsDrag">Projects</h1>
      
    </div>
        </div>
       </div>
          
                        
                        <!-- <div id = "grid" data-aos="fade-up">
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
          -->
          <div class="container">

  <div class="row">

    <div class="col my-5 mx-4">
      <div class="flip-container">
        <div class="flipper">
          <div class="card_front">
            <div class="card_front_top_background"></div>
            <div class="center">
              <p>React</p>
              <p>CSS3</p>
              <p>Node | Express</p>
              <p>JWT | MongoDB</p>
            </div>
          </div>
          <div class="card_back">
            <p>CRUD web application to manage invitations, data stored in a MongoDB for each authentication.</p>
            <button><a href="https://github.com/octaviandd/invite-Me">Source Code</a></button>
          </div>
        </div>
      </div>
    </div>


    <div class="col my-5">
      <div class="flip-container">
        <div class="flipper">
          <div class="card_front">
            <div class="card_front_top_background"></div>
            <div class="center">
              <p>React</p>
              <p>CSS3</p>
              <p>Node | Express</p>
              <p>JWT | MongoDB</p>
            </div>
          </div>
          <div class="card_back">
            <p>CRUD web application to manage invitations, data stored in a MongoDB for each authentication.</p>
            <button><a href="https://github.com/octaviandd/invite-Me">Source Code</a></button>
          </div>
        </div>
      </div>
    </div>


    <div class="col my-5">
      <div class="flip-container">
        <div class="flipper">
          <div class="card_front">
            <div class="card_front_top_background"></div>
            <div class="center">
              <p>React</p>
              <p>CSS3</p>
              <p>Node | Express</p>
              <p>JWT | MongoDB</p>
            </div>
          </div>
          <div class="card_back">
            <p>CRUD web application to manage invitations, data stored in a MongoDB for each authentication.</p>
            <button><a href="https://github.com/octaviandd/invite-Me">Source Code</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>


<div class="row">

  <div class="col my-5 mx-4">
    <div class="flip-container">
      <div class="flipper">
        <div class="card_front">
          <div class="card_front_top_background"></div>
          <div class="center">
            <p>React</p>
            <p>CSS3</p>
            <p>Node | Express</p>
            <p>JWT | MongoDB</p>
          </div>
        </div>
        <div class="card_back">
          <p>CRUD web application to manage invitations, data stored in a MongoDB for each authentication.</p>
          <button><a href="https://github.com/octaviandd/invite-Me">Source Code</a></button>
        </div>
      </div>
    </div>
  </div>

  <div class="col my-5">
    <div class="flip-container">
      <div class="flipper">
        <div class="card_front">
          <div class="card_front_top_background"></div>
          <div class="center">
            <p>React</p>
            <p>CSS3</p>
            <p>Node | Express</p>
            <p>JWT | MongoDB</p>
          </div>
        </div>
        <div class="card_back">
          <p>CRUD web application to manage invitations, data stored in a MongoDB for each authentication.</p>
          <button><a href="https://github.com/octaviandd/invite-Me">Source Code</a></button>
        </div>
      </div>
    </div>
  </div>


  <div class="col my-5">
    <div class="flip-container">
      <div class="flipper">
        <div class="card_front">
          <div class="card_front_top_background"></div>
          <div class="center">
            <p>React</p>
            <p>CSS3</p>
            <p>Node | Express</p>
            <p>JWT | MongoDB</p>
          </div>
        </div>
        <div class="card_back">
          <p>CRUD web application to manage invitations, data stored in a MongoDB for each authentication.</p>
          <button><a href="https://github.com/octaviandd/invite-Me">Source Code</a></button>
        </div>
      </div>
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

.container{
  display: block;
}

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
    padding-top: 110px;
    max-width: 1500px;
}
#grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 20px;
}

#background{
    background-color: black;
   
   

  
}

.flip-container {
  position: relative;
  perspective: 1000px;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}
.flip-container{
  width: 320px;
  height: 480px;
  box-shadow: 0 0 25px #44d62c;
  border-radius: 8px;
}


.card_front,
.card_back {
  width: 320px;
  height: 480px;
 
  border-radius: 8px;
}

.flipper {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.card_front,
.card_back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  color: white;
  background-color: black;
}

.card_front {
  z-index: 2;
  transform: rotateY(0deg);
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  font-size: 1.3em;
}

.card_back {
  transform: rotateY(180deg);
  background-color: #44d62c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Sen", sans-serif;
}

.card_back p {
  padding: 10px 30px;
  text-align: center;
  line-height: 1.68;
  font-size: 18px;
  margin-bottom: 30px;
}

.card_back button {
  padding: 20px 50px;
  border: 0;
  box-shadow: 0.2rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card_back button:hover {
  transform: scale(1.1);
}

.card_back button a {
  text-decoration: none;
  color: black;
  font-size: 1.3em;
}

.card_front_top_background {
  position: relative;
  height: 30%;
  top: 0;
  left: 0;
  right: 0;
 background-color: white;
  width: 100%;
  transform: skewY(-6deg);
  transform-origin: top left;
}

.center {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.center p {
  width: 200px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
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

        
