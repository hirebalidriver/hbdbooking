export const state = () => ({
  id: 0,
  bookingId: 0,
  booking: "",
  wishlist: "",
  pricesAdult: "",
  pricesChild: "",
});

export const getters = {
  wishlist(state) {
    return state.wishlist;
  },
  pricesAdult(state) {
    return state.pricesAdult;
  },
  pricesChild(state) {
    return state.pricesChild;
  },
  id(state) {
    return state.id;
  },
  bookingId(state) {
    return state.bookingId;
  },
  booking(state) {
    return state.booking;
  },
};

export const mutations = {
  SET_WISHLIST(state, value) {
    state.wishlist = value;
  },
  SET_PRICES_ADULT(state, value) {
    state.pricesAdult = value;
  },
  SET_PRICES_CHILD(state, value) {
    state.pricesChild = value;
  },
  SET_ID(state, value) {
    state.id = value;
  },
  SET_BOOKING_ID(state, value) {
    state.bookingId = value;
  },
  SET_BOOKING(state, value) {
    state.booking = value;
  },
};

export const actions = {
  async add({ commit }, credetials) {
    try {
      let res = await this.$axios.$get("/api/front/wishlist/add", {
        params: credetials,
      });

      commit("SET_ID", res.data.id);
    } catch (e) {
      console.log("error", e);
    }
  },

  async detail({ commit }, credetials) {
    try {
      let res = await this.$axios.$get("/api/front/wishlist/detail", {
        params: credetials,
      });

      commit("SET_WISHLIST", res.data.data);
      commit("SET_PRICES_ADULT", res.data.priceAdults);
      commit("SET_PRICES_CHILD", res.data.priceChild);
    } catch (e) {
      console.log("error", e);
    }
  },

  async booking({ commit }, credetials) {
    try {
      let res = await this.$axios.$get("/api/front/wishlist/booking", {
        params: credetials,
      });
      console.log(res.data);
      commit("SET_BOOKING_ID", res.data);
    } catch (e) {
      console.log("error", e);
    }
  },

  async bookingDetail({ commit }, credetials) {
    try {
      let res = await this.$axios.$get("/api/front/wishlist/booking/detail", {
        params: credetials,
      });
      commit("SET_BOOKING", res.data);
    } catch (e) {
      console.log("error", e);
    }
  },

  async sendMail(_, credetials) {
    try {
      await this.$axios.$get("/api/front/wishlist/booking/send/mail", {
        params: credetials,
      });
    } catch (e) {
      console.log("error", e);
    }
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
