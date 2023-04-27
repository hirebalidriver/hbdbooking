export const state = () => ({
  alert: false,
  messageAlert: "",
  menu: 1,
});

export const getters = {
  alert(state) {
    return state.alert;
  },
  messageAlert(state) {
    return state.messageAlert;
  },
  menu(state) {
    return state.menu;
  },
};

export const mutations = {
  SET_ALERT(state, value) {
    state.alert = value;
  },
  SET_MENU(state, value) {
    state.menu = value;
  },
  SET_MESSAGE_ALERT(state, value) {
    state.messageAlert = value;
  },
  RESET(state) {
    state.countdown = 5;
  },
  COUNTDOWN(state) {
    state.countdown--;
  },
};

export const actions = {
  setAlert({ state, commit }, credetials) {
    commit("SET_ALERT", credetials.alert);
    commit("SET_MESSAGE_ALERT", credetials.messageAlert);

    commit("RESET");
    const interval = setInterval(() => {
      commit("COUNTDOWN");
      if (state.countdown === 0) {
        clearInterval(interval); // Clear the interval
        commit("SET_ALERT", false);
      }
    }, 1000);
  },

  setMenu({ commit }, credetials) {
    commit("SET_MENU", credetials);
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
