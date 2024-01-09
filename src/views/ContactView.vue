<template>

  <body id = "background">
    
 
     <div class="container text-center pb-2 pt-5">
      <div class="row align-items-center">
        <div class="contact-div">

          <h1 class="contact-head">Contact</h1>

        </div>
      </div>
    </div>

    <div class="contactForm-div">


      <form action="https://formspree.io/f/myyqoarq" method="POST">
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


      <div class="icons">


        <div class="instagram-div">

          <a href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i class="fa-brands fa-instagram fa-xl"
              style="color: #40d62c; cursor: pointer;"></i></a>

        </div>

        <div class="facebook-div">

          <a href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i
              class="fa-brands fa-square-facebook fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

        </div>
      </div>
      </div>

    </body>
</template>
<script>
export default {
    
}
</script>
<style>
    
    #background{
      background-color: black;
      color:  #44d62c;;
    }

    .contact-container {
  border-radius: 5px;
  background-color: black;
  padding: 10px;
}

.contact-div {
  margin-bottom: 50px;

}

.contact-head {
  background-color: black;
  color: white;
  border: 5px solid var(--razerGreen);
  border-radius: 50px;
  font-family: "DM Serif Display";
  font-size: 50px;
}


.contactForm-div {
  width: 400px;
  margin: auto;

}

label {
  font-family: "Roboto";
  font-size: 22px;
  color: var(--razerGreen);
}

input[type=text],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  width: 120px;
  height: 45px;
  margin-right: 5px;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  background-color: var(--razerGreen);
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

input[type=submit]:hover {
  background-color: black;
  color: var(--razerGreen);
  border-color: white;
}

input[type=submit]:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

.icons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

}


.instagram-div {
  margin-right: 30px;
}

</style>