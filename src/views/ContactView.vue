<template>
 <body id="background" >
 
    <div id = "contact" class="container" data-aos="fade-up">
      <div class="row align-items-center">
        <div id="contact-head" class="mb-5 mt-5" data-aos="fade-up">
          <h1 id="contactDrag">Contact</h1>
      
    </div>
    <div id="con-background" data-aos="fade-up">
      <div id="contactForm-div" data-aos="fade-up">
        <form @submit.prevent="submitForm" action="https://formspree.io/f/myyqoarq" method="POST" target="_blank">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" v-model="formData.firstName" placeholder="Enter your name...">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" v-model="formData.lastName" placeholder="Enter your last name...">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" v-model="formData.email" placeholder="Enter your email...">
          <label for="messege">Messege:</label>
          <textarea id="messege" name="messege" v-model="formData.message" placeholder="Enter a messege..." style="height:170px"></textarea>
          <input id="contactButton" type="submit" value="Submit">
        </form>
      </div>
    </div>
    
    <div id = "icons" class = "d-flex justify-content-center mt-4 mb-3">

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
</div>

<footer class = "footer">محمد - @Copyright&copy  - 2024</footer>
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
      
  
      if (!this.formData.email.includes('@')) {
        await Swal.fire({
          icon: 'warning',
          title: 'Invalid email address',
          text: 'Please enter a valid email address.',
          confirmButtonText: 'OK'
        });
        return;
      }
      
      try {
    
        await fetch('https://formspree.io/f/myyqoarq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

      
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
      } catch (error) {
       
        console.error('Error sending message:', error);
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
          confirmButtonText: 'OK'
        });
      }
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

color: #d9d9d9;
font-family: "DM Serif Display";
font-size: 60px;

}

#contact-head {
  background-color: black;
  color: #d9d9d9;
  border: 5px solid #44d62c;
  border-radius: 50px;
  font-family: "Raleway";
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
  font-family: "Raleway";
  font-size: 23px;
  color:#d9d9d9;
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
  color:#d9d9d9;

}

#contactButton {
  min-width: 100%;
  height: 45px;
  font-family: "Raleway";
  font-size: 26px;
  font-weight: bold;
  background-color: #44d62c;
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  
}

input[type=submit]:hover {
  border-color: #d9d9d9 !important;
}

input[type=submit]:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}



.footer {
  color: black;
  font-weight: bolder;
  text-align: center;
  background-color: #44d62c;
}



@media only screen and (max-width: 1080px) {
  #contact {
    padding-top: 30px;
  }

  #contactDrag {
    font-size: 40px;
  }

  #contact-head {
    font-size: 40px;
    border-width: 3px;
  }

  #contactForm-div {
    width: 80%;
  }

  label {
    font-size: 18px;
  }

  input[type=text],
  textarea {
    padding: 10px;
    font-size: 16px;
  }

  #contactButton {
    height: 40px;
    font-size: 20px;
  }
}


@media only screen and (max-width: 720px) {
  #contact {
    padding-top: 20px;
  }

  #contactDrag {
    font-size: 30px;
  }

  #contact-head {
    font-size: 30px;
    border-width: 2px;
  }

  #contactForm-div {
    width: 90%;
  }

  label {
    font-size: 16px;
  }

  input[type=text],
  textarea {
    padding: 8px;
    font-size: 14px;
  }

  #contactButton {
    height: 35px;
    font-size: 18px;
  }
}



@media only screen and (max-width: 300px) {
  #contact {
    padding-top: 10px;
  }

  #contactDrag {
    font-size: 20px;
  }

  #contact-head {
    font-size: 20px;
    border-width: 1px;
  }

  #contactForm-div {
    width: 90%;
  }

  label {
    font-size: 14px;
  }

  input[type=text],
  textarea {
    padding: 6px;
    font-size: 12px;
  }

  #contactButton {
    height: 30px;
    font-size: 14px;
  }
}



</style>