<template>

  <body id = "background">
    
 
     <div id = "contact" class="container text-center" data-aos="fade-up">
      <div class="row align-items-center">
        <div id="contact-div">

          <h1 id="contact-head" class = "mt-2 mb-4">Contact</h1>

        </div>
      </div>
    </div>

    <div id="contactForm-div" data-aos="fade-up">


      <form action="https://formspree.io/f/myyqoarq" method="POST" target = "_blank">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your name..">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name..">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Enter your email..">
        <label for="messege">Messege:</label>
        <textarea id="messege" name="messege" placeholder="Enter a messege.." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form>


      <div id = "icons" class = "d-flex justify-content-center mt-4" data-aos="fade-up">

<div id = "linkedin-div">
  <a href="https://www.linkedin.com/in/muhammad-rajah-a1a00421a/" target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>
  
</div>

<div id = "github-div" class = "mx-3">

  <a href="https://github.com/Fireshadow111" target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id = "whatsapp-div">

  <a href="https://wa.me/+277741883" target="_blank"><i class="fa-brands fa-whatsapp fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>

<div id = "instagram-div" class = "mx-3">

  <a href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i class="fa-brands fa-instagram fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id= "facebook-div">

  <a href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i class="fa-brands fa-square-facebook fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>
  
</div>
      </div>

      </div>


      <div class = "d-flex justify-content-center mt-4" id = "map" data-aos="fade-up">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13236.235373779607!2d18.543614656051087!3d-33.96532702103352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44ce607184e1%3A0xc2c79ab7ca9c30f4!2sHeideveld%2C%20Cape%20Town%2C%207764!5e0!3m2!1sen!2sza!4v1705067887599!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>



     


    </body>
</template>
<script>
import aos from 'aos'

export default {
    components:{
     
    },
    mounted() {
    aos.init({
      duration: 800,
      once: false,
    });
  }
}
</script>
<style scoped>

#contact{
  padding-top: 80px;
}
    
    #background{
      background-color: black;
      color:  #44d62c;
      min-height: 175vh;
    }

    .contact-container {
  border-radius: 5px;
  background-color: black;

}



#contact-head {
  background-color: black;
  color: white;
  border: 4px solid #44d62c;
  border-radius: 55px;
  font-family: "DM Serif Display";
  font-size: 50px;

}


#contactForm-div {
  width: 400px;
  margin: auto;

}

label {
  font-family: "Roboto";
  font-size: 22px;
  color:#44d62c;
  font-weight: bold;
}

input[type=text],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  border-radius: 15px;
}

input[type=submit] {
  width: 120px;
  height: 45px;
  margin-right: 5px;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  background-color: #44d62c;
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

input[type=submit]:hover {
  background-color: black;
  color: #44d62c;
  border-color: white;
}

input[type=submit]:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}




/* Contact Page */

@media (max-width: 300px) {

body {
  flex-wrap: wrap;
}



#contact-head {
  font-size: 30px;
}

#contactForm-div {
  width: 90%;
  margin: auto;
}

label {
  font-size: 14px;
}

input[type=text] {
  width: 100%;
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 10px;
}

input[type=submit] {
  width: auto;
  height: auto;
  font-size: 14px;
}



.fa-brands {
  margin-bottom: 10px;
}

#map iframe {
    width: 100%;
    height: 300px;
}

}

@media (max-width: 720px) {

body {
  flex-wrap: wrap;
}

#contactForm-div {
  width: 90%;
  margin: auto;
}

label {
  font-size: 18px;
}

input[type=text] {
  width: 100%;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 12px;
}

textarea {
  width: 100%;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 12px;
}

input[type=submit] {
  width: 100%;
  height: 45px;
  font-size: 18px;
}

#map iframe {
            width: 100%;
            height: 200px; 
        }
}


@media (max-width: 1080px) {
#contactForm-div {
  width: 80%;
  margin: auto;
}

label {
  font-size: 22px;
}

input[type=text] {
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 16px;
}

textarea {
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 16px;
}

input[type=submit] {
  width: 100%;
  height: 50px;
  font-size: 22px;
}
}

#map iframe {
    width: 100%;
  }





</style>