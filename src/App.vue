<template>
  <div id="app">
    <cursor  />
    <spinner  v-if="isLoading" />
    <navbar />
    
    <HomeView v-if="!isLoading" />
    <AboutView v-if="!isLoading" />
    <ResumeView v-if="!isLoading" />
    <ProjectsView v-if="!isLoading" />
    <TestimonialsView v-if="!isLoading" />
    <ContactView v-if="!isLoading" />
    <footer />
    <!-- <router-view/>  -->
  </div>
</template>

<script>
import spinner from '/src/components/spinner.vue'
import cursor from './components/cursor.vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import navbar from './components/navbar.vue'
import footer from './components/footer.vue'

import HomeView from '../src/views/HomeView.vue'
import AboutView from '../src/views/AboutView.vue'
import ResumeView from '../src/views/ResumeView.vue'
import ProjectsView from '../src/views/ProjectsView.vue'
import TestimonialsView from '../src/views/TestimonialsView.vue'
import ContactView from '../src/views/ContactView.vue'

export default {
  components: {
    navbar,
    footer,
    cursor,
    spinner,
    HomeView,
    AboutView,
    ResumeView,
    ProjectsView,
    TestimonialsView,
    ContactView,
    SpeedInsights
  },
  data() {
    return {
      isLoading: true 
    };
  },
  mounted() {
   
    setTimeout(() => {
      this.isLoading = false;
    }, 2500); 
  }
};
</script>

<style>

</style>
