import { createStore } from 'vuex';
import axios from 'axios';

const url = "https://fireshadow111.github.io/vue-portfolio-data/";

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
      state.resume = data;
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
      axios.get(url)
        .then((r) => {
          context.commit("setResume", r.data.resume);
          console.log(r.data.resume);
        });
    },

    fetchDataProjects(context) {
      axios.get(url)
        .then((p) => {
          context.commit("setProjects", p.data.projects);
          console.log(p.data.projects);
        });
    },

    fetchDataTestimonials(context) {
      axios.get(url)
        .then((t) => {
          context.commit("setTestimonials", t.data.testimonials);
          console.log(t.data.testimonials);
        });
    },
  },

  modules: {}
});