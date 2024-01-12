<template>
    <body id = "background">


     

     
        
        <div class="container">

            
<div class="row">
    <div class="container text-center mt-3">
<div class="row align-items-center">
<div class = "test-head-div">
<h1 class = "test-head">Testimonials</h1>
</div>
</div>
</div>
    <div class="col my-5">
        <div v-for ="testimonials in raja" :key = "testimonials" style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
            <div class="card-image">
                <img class="img-fluid d-flex mx-auto" :src="testimonials.testImage">
            </div>
            <div class="card-text">
                <div class="card-title my-1">{{testimonials.testHead}}</div>
                <p>{{testimonials.testText}}</p>
            </div>
            <div class="footer">
                <span id="name">{{testimonials.testFooter}}</span>
            </div>
        </div>
    </div>
</div>
        </div>
        
        <!-- <div class="container">

            
            <div class="row">
                <div class="container text-center mt-3">
    <div class="row align-items-center">
      <div class = "test-head-div">
        <h1 class = "test-head">Testimonials</h1>
          </div>
        </div>
        </div>
                <div class="col-md-4 my-5">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/46/b0/a9/ME17GECZ_o.jpg">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Joel Mukanya</div>
                            <p>"Muhammad is a creative, and well-behaved individual who always prioritizes his work. He excels in collaborating with others and has gained proficiency in HTML5, CSS, and Bootstrap. Including Git and GitHub."</p>
                        </div>
                        <div class="footer">
                            <span id="name">-Coding Lecturer</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-5">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img class="img-fluid d-flex mx-auto" src="	https://cdn-images.imagevenue.com/93/11/7c/ME17GED0_o.jpg">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Damon Raffels</div>
                           <p>"Muhammad Rajah is a strong willed, hard-working man with a healthy competitive spirit when it comes to projects, always taking inspiration from others to better his knowledge and skills. He has a great understanding of the workings of the world and incredible religious values that is tuly humbling to be in the presence of."</p> 
                        </div>
                        <div class="footer">
                            <span id="name">-Colleague</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-5">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto ">
                        <div class="card-image">
                            <img class="img-fluid d-flex mx-auto" src="	https://cdn-images.imagevenue.com/18/d4/1c/ME17GED4_o.jpg">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Khwezilomso Mbobo</div>
                          <p>"Muhammad Rajah is someone of great integrity; spirit and determination, who reflects every aspect of this in his work. Anyone would be lucky to work with him, but proud to know him."</p>  
                        </div>
                        <div class="footer">
                            <span id="name">-Colleague</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 my-3">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/86/c5/e8/ME17GED3_o.jpg">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Haanim Pietersen</div>
                            <p>"Muhammad Rajah is an amazing person with an amazing personality. He is someone that can present themselves in a manner that will get everyone's attention. I would recommend Muhammad Rajah as someone who can explain and grasp things well, as well as someone who is good at doing the frontend"</p>
                        </div>
                        <div class="footer">
                            <span id="name">-Colleague</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto">
                        <div class="card-image">
                            <img class="img-fluid d-flex mx-auto" src="	https://cdn-images.imagevenue.com/ee/62/24/ME17GED2_o.jpg">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Tauha Hoosain Shaik</div>
                         <p>"Muhammad Rajah is a very charismatic individual with high energy and an output to match. He excels in bringing positivity and his optimism is a driving force in achieving results above the expectation. With Muhammad, impossible is nothing."</p>   
                        </div>
                        <div class="footer">
                            <span id="name">-Colleague</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div style="box-shadow: 0px 0px 15px 4px #44d62c;border-radius: 20px;" class="card d-flex mx-auto ">
                        <div class="card-image">
                            <img class="img-fluid d-flex mx-auto" src="https://cdn-images.imagevenue.com/9f/8a/47/ME17GED1_o.png">
                        </div>
                        <div class="card-text">
                            <div class="card-title my-1">Naeema Omar</div>
                            <p>"Rajah is a well-spoken and energetic guy. His competitive nature pushes him to constantly strive for growth and development which makes him a dependable colleague."</p>
                        </div>
                        <div class="footer">
                            <span id="name">-Colleague</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       -->
        
        

        
 
  


<footer class = "footer2 fixed-bottom">محمد - @Copyright&copy  - 2023</footer>
</body>

</template>
<script>


export default {

    components:{
    
    },
    methods: {
    fetchDataTestimonials() {
      this.$store.dispatch('fetchDataTestimonials');
    }
  },

  computed:{

raja()  {return this.$store.state.testimonials}
},

  mounted() {
    this.fetchDataTestimonials();
  },
}
</script>
<style scoped>

#background{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    font-family: sans-serif;
    min-height: 165vh;
}

.test-head{
    background-color: black;
    color: white;
    border: 5px solid #44d62c;
    border-radius: 50px;
    font-family: "DM Serif Display";
    font-size: 55px;
  
  }

.container{
    max-width: 950px;
}
.card{
    border-radius: 1rem;
    box-shadow: 0px -10px 0px #44d62c;
    height: 450px;
    background-color: black;
}

.card-text{
    font-size: 30px;
}

p{
    font-size: 16px;
}



@media(max-width:767px){
    .card{
        margin: 1rem 0.7rem 1rem;
        max-width: 80vw;
    }
}
img{
    width: 6.2rem;
    border-radius: 20px;
    margin: 1.3rem auto 1rem auto;
    height: 100px;
}
.col-md-4{
    padding:0  0.5rem;
}
.card-title{
    font-size: 20px;
    margin-bottom: 0;
    font-weight: bold;
    font-family: 'IM Fell French Canon SC';
    color: #44d62c;
    border-bottom: 1px solid white;
}
.card-text{
    text-align: center;
    padding: 1rem 2rem;
    font-size: 14px;
    color: #44d62c;
    line-height: 1.4rem;
}
.footer{
    border-top: none;
    text-align: center;
    line-height: 1.2rem;
    padding: 2rem 0 1.4rem 0;
    font-family: 'Varela Round';
}
#name{
    font-size: 0.8rem;
    font-weight: bold;
}
#position{
    font-size: 0.7rem;
}


#name{
    font-weight: bold;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #44d62c;
    
}

/* .card{
    transition: transform 0.3s;
}
.card:hover{
    transform:scale(105%)
} */


.footer2 {
 font-size: 15px;
  color: black;
  font-weight: bolder;
  text-align: center;
  background-color: #44d62c;
}


@media (max-width: 300px) {
  #background {
    min-height: 100vh;
  }

  .test-head {
    font-size: 30px;
  }

  .card {
    height: auto;
  }

  img {
    width: 100%;
  }

  .col-md-4 {
    padding: 0 0.2rem;
  }

  .card-text {
    padding: 1rem 1rem;
  }

  .footer2 {
    font-size: 12px;
    width: 100%; 
    bottom: 0;
    text-align: center;
    background-color: #44d62c;
    color: black;
    font-weight: bolder;
  }
}



    
</style>
