export const state = () => ({
  alert: false,
  messageAlert: "",
  menu: 1,
  showDetail: true,
  showDetailID: 0,
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
  showDetail(state) {
    return state.showDetail;
  },
  showDetailID(state) {
    return state.showDetailID;
  },
};

export const mutations = {
  SET_ALERT(state, value) {
    state.alert = value;
  },
  SET_MENU(state, value) {
    state.menu = value;
  },
  SET_SHOW_DETAIL(state, value) {
    state.showDetail = value;
  },
  SET_SHOW_DETAIL_ID(state, value) {
    state.showDetailID = value;
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

  setShowDetail({ commit }, credetials) {
    commit("SET_SHOW_DETAIL", credetials.status);
    commit("SET_SHOW_DETAIL_ID", credetials.id);
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
