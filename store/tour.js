export const state = () => ({
  tour: "",
  options: [],
  adult: 0,
  child: 0,
  date: null,
});

export const getters = {
  tour(state) {
    return state.tour;
  },
  options(state) {
    return state.options;
  },
  adult(state) {
    return state.adult;
  },
  child(state) {
    return state.child;
  },
  date(state) {
    return state.date;
  },
};

export const mutations = {
  SET_TOUR(state, value) {
    state.tour = value;
  },
  SET_OPTIONS(state, value) {
    state.options = value;
  },
  SET_ADULT(state, value) {
    state.adult = value;
  },
  SET_CHILD(state, value) {
    state.child = value;
  },
};

export const actions = {
  async tour({ commit }, credetials) {
    try {
      let res = await this.$axios.$get("/api/front/tour/detail", {
        params: credetials,
      });

      commit("SET_TOUR", res.data);
    } catch (e) {
      console.log("error", e);
    }
  },
  async options({ commit }, credetials) {
    try {
      let res = await this.$axios.$get("/api/front/tour/options", {
        params: credetials,
      });

      commit("SET_OPTIONS", res.data);
    } catch (e) {
      console.log("error", e);
    }
  },

  setPeople({ commit }, credetials) {
    console.log(credetials.adult);
    commit("SET_ADULT", credetials.adult);
    commit("SET_CHILD", credetials.child);
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
