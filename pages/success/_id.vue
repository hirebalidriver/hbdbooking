<template>
  <div>
    <div
      class="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-lg card md:max-w-lg"
    >
      <div class="gap-2 p-4">
        <div class="text-center">
          <h1 class="mb-2 text-2xl font-black text-green-700">
            Reservation success
          </h1>
          <h2 class="mb-10">
            Booking details has been sent to {{ booking.email }}
          </h2>
        </div>
        <div class="mb-2 font-semibold">
          {{ booking?.packages?.title }}
        </div>
        <div class="mb-4">
          {{ booking?.options?.title }}
        </div>
        <div class="text-xl font-bold text-black">
          {{ booking.date }} • {{ booking.time | timeFormat }}
        </div>
        <div class="stat-title">
          {{ booking.adult }} Adult and {{ booking.child }} Child
        </div>
        <div class="stat-title">Traveller name : {{ booking.name }}</div>
        <div class="stat-title">Phone : {{ booking.phone }}</div>
        <div class="stat-title">Hotel : {{ booking.hotel }}</div>
        <div v-if="detail" class="mt-5">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adult</td>
                  <td>{{ booking.adult }} x USD {{ booking.adult_price }}</td>
                  <td>USD {{ booking.adult * booking.adult_price }}</td>
                </tr>
                <tr>
                  <td>Child</td>
                  <td>{{ booking.child }} x USD {{ booking.child_price }}</td>
                  <td>USD {{ booking.child * booking.child_price }}</td>
                </tr>

                <tr>
                  <td colspan="2">Total</td>
                  <td>USD {{ booking.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="stat-title">Description :</div>
          <div
            class="mb-3 stat-title"
            v-html="booking.options?.description"
          ></div>
          <div class="stat-title">Tour Inclusion :</div>
          <div class="stat-title" v-html="booking.options?.inclusions"></div>
        </div>
        <div class="stat-actions">
          <button class="btn btn-sm" @click="hideDetail()" v-if="hideButton">
            Hide
          </button>
          <button class="btn btn-sm" @click="showDetail()" v-else>
            Detail
          </button>

          <button class="btn btn-sm">Sent to email</button>
          <button class="btn btn-sm">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      detail: false,
      hideButton: false,
    };
  },

  created() {
    this.getDetail();
  },

  filters: {
    dateFormat: function (value) {
      if (!value) return "";
      value = moment(value, "YYYY-DD-MM");
      return value.format("ll");
    },

    timeFormat: function (value) {
      if (!value) return "";
      value = moment(value, "HH:mm");
      return value.format("LT");
    },
  },

  computed: {
    ...mapGetters({ booking: "wishlist/booking" }),
  },

  methods: {
    async getDetail() {
      let formData = {
        id: this.$route.params.id,
      };
      // console.log(formData);
      await this.$store.dispatch("wishlist/bookingDetail", formData);
      this.$store.dispatch("general/setMenu", 3);
    },

    showDetail() {
      this.detail = true;
      this.hideButton = true;
    },

    hideDetail() {
      this.detail = false;
      this.hideButton = false;
    },
  },
};
</script>
