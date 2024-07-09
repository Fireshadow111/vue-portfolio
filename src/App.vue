<template>
  
  <navbar/>

  <HomeView/>
  <AboutView/>
  <ResumeView/>
  <ProjectsView/>
  <TestimonialsView/>
  <ContactView/>
  <footer/>
  <!-- <router-view/>  -->
  
</template>


<script>
import { SpeedInsights } from "@vercel/speed-insights/vue"
 import navbar from './components/navbar.vue'
 import footer from './components/footer.vue'

import HomeView from '../src/views/HomeView.vue'
import AboutView from '../src/views/AboutView.vue'
import ResumeView from '../src/views/ResumeView.vue'
import ProjectsView from '../src/views/ProjectsView.vue'
import TestimonialsView from '../src/views/TestimonialsView.vue'
import ContactView from '../src/views/ContactView.vue'



export default{

  components: {
    navbar,
    footer,

    HomeView,
    AboutView,
    ResumeView,
    ProjectsView,
    TestimonialsView,
    ContactView,
    SpeedInsights
   
  }
};


</script>

<style>






</style>
