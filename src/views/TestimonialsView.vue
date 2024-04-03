<template>
    <body id = "background">


            

    <div id = "testimonials" class="container text-center" data-aos="fade-up">
      <div class="row align-items-center">
        <div id="test-head" class="mb-5" data-aos="fade-up">
          <h1 id="testDrag">Testimonials</h1>
      
    </div>
     
      </div>
    </div>

    <div class = "container text-center"  data-aos="fade-up">
    <div class="row align-items-center">
      
    <figure class="snip1192 col-lg-4 col-md-6 col-sm-12 my-5">
  <blockquote>"Muhammad is a creative, and well-behaved individual who always prioritizes his work. He excels in collaborating with others and has gained proficiency in HTML5, CSS, and Bootstrap. Including Git and GitHub."</blockquote>
  <div class="author">
    <img src="https://cdn-images.imagevenue.com/46/b0/a9/ME17GECZ_o.jpg" alt="sq-sample1"/>
    <h5>Joel Mukanya <span>-Coding Lecturer</span></h5>
  </div>
</figure>
<figure class="snip1192 col-lg-4 col-md-6 col-sm-12 my-5">
  <blockquote>"Muhammad Rajah is a strong willed, hard-working man with a healthy competitive spirit when it comes to projects, always taking inspiration from others to better his knowledge and skills. He has a great understanding of the workings of the world and incredible religious values that is tuly humbling to be in the presence of."</blockquote>
  <div class="author">
    <img src="https://cdn-images.imagevenue.com/93/11/7c/ME17GED0_o.jpg" alt="sq-sample24"/>
    <h5>Damon Raffels<span>-Colleague</span></h5>
  </div>
</figure>
<figure class="snip1192 col-lg-4 col-md-6 col-sm-12 my-5">
  <blockquote>"Muhammad Rajah is someone of great integrity; spirit and determination, who reflects every aspect of this in his work. Anyone would be lucky to work with him, but proud to know him."</blockquote>
  <div class="author">
    <img src="https://cdn-images.imagevenue.com/18/d4/1c/ME17GED4_o.jpg" alt="sq-sample29"/>
    <h5>Khwezilomso Mbobo<span>-Colleague</span></h5>
  </div>
</figure>
<figure class="snip1192 col-lg-4 col-md-6 col-sm-12">
  <blockquote>"Muhammad Rajah is an amazing person with an amazing personality. He is someone that can present themselves in a manner that will get everyone's attention. I would recommend Muhammad Rajah as someone who can explain and grasp things well, as well as someone who is good at doing the frontend"</blockquote>
  <div class="author">
    <img src="https://cdn-images.imagevenue.com/86/c5/e8/ME17GED3_o.jpg" alt="sq-sample29"/>
    <h5>Haanim Pietersen<span>-Colleague</span></h5>
  </div>
</figure>
<figure class="snip1192 col-lg-4 col-md-6 col-sm-12">
  <blockquote>"Muhammad Rajah is a very charismatic individual with high energy and an output to match. He excels in bringing positivity and his optimism is a driving force in achieving results above the expectation. With Muhammad, impossible is nothing."</blockquote>
  <div class="author">
    <img src="https://cdn-images.imagevenue.com/ee/62/24/ME17GED2_o.jpg" alt="sq-sample29"/>
    <h5>Tauha Hoosain Shaik<span>-Colleague</span></h5>
  </div>
</figure>
<figure class="snip1192 col-lg-4 col-md-6 col-sm-12">
  <blockquote>Rajah is a well-spoken and energetic guy. His competitive nature pushes him to constantly strive for growth and development which makes him a dependable colleague.</blockquote>
  <div class="author">
    <img src="https://cdn-images.imagevenue.com/9f/8a/47/ME17GED1_o.png" alt="sq-sample29"/>
    <h5>Naeema Omar<span>-Colleague</span></h5>
  </div>
</figure>

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



@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);
figure.snip1192 {
  font-family: 'Raleway';
  position: relative;
  float: left;
  overflow: hidden;

  

  color: #333;
 
 
}

figure.snip1192 img {
  max-width: 100%;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  display: inline-block;
  z-index: 1;
  position: relative;
}
figure.snip1192 blockquote {
  margin: 0;
  display: block;
  border-radius: 8px;
  position: relative;
  background-color: #fafafa;
  padding: 30px 50px 65px 50px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 -50px;
 height: 280px;
 

}



figure.snip1192 blockquote:before,
figure.snip1192 blockquote:after {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 30px;
  opacity: 0.3;
  font-style: normal;
  
}
figure.snip1192 blockquote:before {
  top: 10px;
  left: 20px;
}
figure.snip1192 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 30px;
}
figure.snip1192 .author {
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  
}
figure.snip1192 .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
  font-size: 19px;
}
figure.snip1192 .author h5 span {
  font-weight: 400;
  text-transform: none;
  display: block;
  font-size: 15px;
}


#testDrag{

color: white;
font-family: "DM Serif Display";
font-size: 60px;

}

#test-head {
  background-color: black;
  color: white;
  border: 5px solid #44d62c;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;

}

#testimonials{
  max-width: 1500px;
  padding-top: 110px;
}
#background{
    background-color: black;
    font-family: sans-serif;


 
}

@media only screen and (max-width: 1080px) {
  figure.snip1192 {
    width: 100%;
    margin-bottom: 30px;
  }
}


@media only screen and (max-width: 720px) {
  figure.snip1192 {
    width: 100%;
    margin-bottom: 30px;
  }
}


@media only screen and (max-width: 300px) {
  figure.snip1192 {
    width: 100%;
    margin-bottom: 20px;
  }
  figure.snip1192 blockquote {
    padding: 20px;
    font-size: 14px;
    height: auto;
  }
  figure.snip1192 img {
    height: 80px;
    width: 80px;
  }
  figure.snip1192 .author h5 {
    font-size: 14px;
  }
  #testDrag {
    font-size: 40px;
  }
  #test-head {
    font-size: 30px;
  }
}


@media only screen and (max-width: 355px) {
  figure.snip1192 {
    width: 100%;
    margin-bottom: 20px;
  }
  figure.snip1192 blockquote {
    padding: 20px;
    font-size: 14px;
    height: auto;
  }
  figure.snip1192 img {
    height: 80px;
    width: 80px;
  }
  figure.snip1192 .author h5 {
    font-size: 14px;
  }
  #testDrag {
    font-size: 40px;
  }
  #test-head {
    font-size: 30px;
  }

  .about-head{
    max-width: 355px;
  }
}



    
</style>
