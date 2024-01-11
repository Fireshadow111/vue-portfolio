import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    resume: [],
    projects: [],
    testimonials: [],

  },
  getters: {
    
  },
  mutations: {
    setResume(state, data) {
      state.resume = data[0];
      console.log(data[0]);
    },

    setProjects(state, data) {
      state.projects = data;
    },

    setTestimonials(state, data) {
      state.testimonials = data;

    },
  },
  actions: {
    fetchDataResume(context) {
      axios.get("https://fireshadow111.github.io/vue-portfolio-data/")
        .then((r) => {
          context.commit("setResume", r.data.resume);
          console.log(r.data);

        });
    },
          fetchDataProjects(context) {
      axios.get("https://fireshadow111.github.io/vue-portfolio-data/")
        .then((p) => {
         
          context.commit("setProjects", p.data.projects);

          console.log(p.data);
        });
    },
    fetchDataTestimonials(context) {
      axios.get("https://fireshadow111.github.io/vue-portfolio-data/")
        .then((t) => {
        
          context.commit("setTestimonials", t.data.testimonials);

          console.log(t.data);
        });
    },
  },
  modules: {},
});

