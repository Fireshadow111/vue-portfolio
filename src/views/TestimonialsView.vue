<template>
    <body id = "background">


            

    <div id = "testimonials" class="container text-center" data-aos="fade-up">
<div class = "test-head-div">
<h1 class = "test-head">Testimonials</h1>
</div>
</div>

    <div id = "grid" class="col my-5 mx-5" data-aos="fade-up">
        <div v-for ="testimonials in rajah" :key = "testimonials" style="border-radius: 20px;" class="card my-4 mx-5">
            <div class="card-image">
                <img class="img-fluid d-flex mx-auto" :src="testimonials.testImage">
            </div>
            <div class="card-text">
                <div class="card-title my-1">{{testimonials.testHead}}</div>
                <p><i>{{testimonials.testText}}</i></p>
            </div>
            <div class="footer">
                <span id="name">{{testimonials.testFooter}}</span>
            </div>
        </div>
    </div>

  


</body>

</template>
<script>
import aos from 'aos'

export default {

    components:{
    
    },
    methods: {
    fetchDataTestimonials() {
      this.$store.dispatch('fetchDataTestimonials');
    }
  },

  computed:{

rajah()  {return this.$store.state.testimonials}
},

  mounted() {
    this.fetchDataTestimonials();
    aos.init({
      duration: 800,
      once: false,
    });
  },
}
</script>
<style scoped>

#testimonials{
    padding-top: 90px;
}
#background{
    background-color: black;
    font-family: sans-serif;
    min-height: 170vh;
 
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
    height: 450px;
    background-color: black;
    box-shadow: 0 0 20px #44d62c;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.card:hover{
    transform:scale(105%);
    box-shadow: 0 0 35px #44d62c;
}

#grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 20px;
    margin: 100px;
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


}



    
</style>