<template>
 <body id="background" >
 
    <div id = "contact" class="container" data-aos="fade-up">
      <div class="row align-items-center">
        <div id="contact-head" class="mb-5 mt-5" data-aos="fade-up">
          <h1 id="contactDrag">Contact</h1>
      
    </div>
    <div id="con-background" data-aos="fade-up">
      <div id="contactForm-div" data-aos="fade-up">
        <form @submit.prevent="submitForm" action="https://formspree.io/f/xqkrdpya" method="POST" target="_blank">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" v-model="formData.firstName" placeholder="Enter your name..">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" v-model="formData.lastName" placeholder="Enter your last name..">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" v-model="formData.email" placeholder="Enter your email..">
          <label for="messege">Messege:</label>
          <textarea id="messege" name="messege" v-model="formData.message" placeholder="Enter a messege.." style="height:170px"></textarea>
          <input id="contactButton" type="submit" value="Submit">
        </form>
      </div>
    </div>
    
<div id = "icons" class = "d-flex justify-content-center mt-4 mb-5">

<div id = "linkedin-div">
<a href="https://www.linkedin.com/in/muhammad-rajah-a1a00421a/" target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>


<div id = "instagram-div" class = "mx-3">

<a href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i class="fa-brands fa-instagram fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>

<div id= "facebook-div">

<a href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i class="fa-brands fa-square-facebook fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>


</div>
</div>
</div>
   
 </body>
</template>

<script>
import aos from 'aos';
import Swal from 'sweetalert2'
import navbar from '../components/navbar.vue'

export default {
 components: {
    navbar
 },
 data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      },
      errors: []
    }
 },
 methods: {
    async submitForm() {
      if (!this.formData.firstName || !this.formData.lastName || !this.formData.email || !this.formData.message) {
        await Swal.fire({
          icon: 'warning',
          title: 'Please complete the form',
          text: 'All fields are required.',
          confirmButtonText: 'OK'
        });
        return; 
      }
      await Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully',
        text: 'Thank you for contacting us!',
        confirmButtonText: 'OK'
      });

      this.formData.firstName = '';
      this.formData.lastName = '';
      this.formData.email = '';
      this.formData.message = '';
    }
 },
 mounted() {
    aos.init({
      duration: 800,
      once: false,
    });
  },
}
</script>
<style scoped>


i{
  transition: transform 0.3s ease
}

i:hover{
  transform:scale(105%);
}
 
 body{
  background-color: black
 }


 #contact{
  padding-top: 50px;
  max-width: 1500px;
 }
   
#contactDrag{

color: white;
font-family: "DM Serif Display";
font-size: 60px;

}

#contact-head {
  background-color: black;
  color: white;
  border: 5px solid #44d62c;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;

}

#contactForm-div {
  width: 550px;
  margin: auto;
 
  padding: 20px; 
  border-radius: 20px; 
  box-shadow: 0 0 25px #44d62c;
  
}



label {
  font-family: "Roboto";
  font-size: 23px;
  color:white;
  font-weight: bold;
  
  
}

input[type=text],
textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #44d62c;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  border-radius: 15px;
  font-weight: bold;
  background:transparent;
  color:white;

}

#contactButton {
  min-width: 100%;
  height: 45px;
  font-family: "Roboto";
  font-size: 26px;
  font-weight: bold;
  background-color: #44d62c;
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  
}

input[type=submit]:hover {
  border-color: white !important;
}

input[type=submit]:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}


@media screen and (max-width: 1080px) {
  #contactForm-div {
    width: 90%;
    max-width: 500px;
  }

  #contactButton {
    min-width: 100%;
    max-width: 500px;
  }
}



@media screen and (max-width: 720px) {
  #contactForm-div {
    width: 100%;
    max-width: 400px;
  }

  #contactButton {
    min-width: 100%;
    max-width: 400px;
  }

  #contactDrag {
    font-size: 40px;
  }

  label {
    font-size: 18px;
  }

  input[type=text],
  textarea {
    font-size: 16px;
  }

  #footer {
    font-size: 14px;
  }
}


@media screen and (max-width: 300px) {
  #contactForm-div {
    width: 90%;
    max-width: 250px;
  }

  #contactButton {
    min-width: 100%;
    max-width: 250px;
    font-size: 14px;
  }

  #contactDrag {
    font-size: 30px;
  }

  label {
    font-size: 14px;
  }

  input[type=text],
  textarea {
    font-size: 12px;
  }

  #footer {
    font-size: 12px;
  }
}



</style>