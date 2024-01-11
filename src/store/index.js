import { createStore } from 'vuex';
import axios from 'axios';

const gitLink = "/src/data/index.json";

export default createStore({
  state: {
    aboutData: null,
  },
  getters: {
    getAboutData: (state) => state.aboutData,
  },
  mutations: {
    setAboutData: (state, data) => {
      state.aboutData = data;
    },
  },
  actions: {
    fetchAboutData: async ({ commit }) => {
      try {
        const response = await axios.get(gitLink);
        commit('setAboutData', response.data);
      } catch (error) {
        console.error("Error fetching AboutPage data:", error);
      }
    },
  },
  modules: {},
});