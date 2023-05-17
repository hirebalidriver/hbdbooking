<template>
  <div id="options">
    <div class="w-full border shadow-xl card bg-base-100">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div
          class="col-span-2 px-6 py-6 border-b-2 md:border-b-0 md:border-r-2"
        >
          <h2 class="mb-5 text-2xl font-bold">{{ title }}</h2>
          <div class="flex gap-2 mb-3" v-html="description"></div>
          <!-- <span>Inclusions : </span>
          <div class="flex gap-2 mb-3" v-html="inclusions"></div> -->

          <div class="flex flex-wrap w-full gap-3">
            <span v-for="(item, index) in times" :key="index">
              <button
                v-if="item.id == sTime"
                class="btn btn-sm"
                @click="selectTime(item.id)"
              >
                {{ item.time | timeFormat }}
              </button>
              <button
                v-else
                class="btn btn-sm btn-outline"
                @click="selectTime(item.id)"
              >
                {{ item.time | timeFormat }}
              </button>
            </span>
          </div>
        </div>
        <div class="w-full px-6 py-6 text-right">
          <h3 class="text-lg font-bold">USD {{ getTot }}</h3>
          <div class="mb-3" v-for="(item, index) in prices" :key="index">
            <div
              v-if="
                item.type == 1 &&
                item.people <= adult &&
                item.people_end >= adult
              "
            >
              <p>
                {{ adult }} adult x USD {{ item.price }} = USD {{ totalAdult }}
              </p>
            </div>
          </div>
          <div v-if="child != 0">
            <div class="mb-3" v-for="(item, index) in prices" :key="index">
              <div
                v-if="
                  item.type == 2 &&
                  item.people <= child &&
                  item.people_end >= child
                "
              >
                <p>
                  {{ child }} child x USD {{ item.price }} = USD
                  {{ totalChild }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="bookButton">
            <button class="w-full bg-green-700 btn" @click="orderNow('now')">
              Book Now
            </button>
            <!-- <button
              class="w-full mt-2 btn btn-outline"
              @click="orderNow('later')"
            >
              Pay Later
            </button> -->
          </div>
          <div v-else>
            <button class="w-full bg-green-700 btn" disabled="disabled">
              Book Now
            </button>
            <!-- <button class="w-full mt-2 btn btn-outline" disabled="disabled">
              Pay Later
            </button> -->
          </div>
        </div>
      </div>
      <!-- <div class="px-6 py-5">
        <p>
          <strong>Reserve Now & Pay Later</strong> is an easy way to secure your
          spot while keeping your plans flexible.
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  props: [
    "title",
    "prices",
    "inclusions",
    "times",
    "optionID",
    "tourID",
    "description",
  ],

  data: () => ({
    totalAdult: 0,
    totalChild: 0,
    sTime: null,
    timeStatus: false,
    bookButton: false,
  }),

  filters: {
    timeFormat: function (value) {
      if (!value) return "";
      value = moment(value, "HH:mm");
      return value.format("HH:mm");
    },
  },

  mounted() {
    this.getTotal();
  },

  computed: {
    ...mapGetters({
      adult: "tour/adult",
      child: "tour/child",
      date: "tour/date",
      total: "tour/total",
      id: "wishlist/id",
    }),

    getTot() {
      this.prices.forEach((value, index) => {
        if (
          value.type == 1 &&
          value.people <= this.adult &&
          value.people_end >= this.adult
        ) {
          this.totalAdult = this.adult * value.price;
        }
      });

      this.prices.forEach((value, index) => {
        if (
          value.type == 2 &&
          value.people <= this.child &&
          value.people_end >= this.child
        ) {
          this.totalChild = this.child * value.price;
        }
      });

      let formData = {
        total: this.totalAdult + this.totalChild,
      };
      this.$store.dispatch("tour/setTotal", formData);

      return parseInt(this.totalAdult) + parseInt(this.totalChild);
    },
  },

  methods: {
    getTotal() {
      this.prices.forEach((value, index) => {
        if (
          value.type == 1 &&
          value.people <= this.adult &&
          value.people_end >= this.adult
        ) {
          this.totalAdult = value.price;
        }
      });

      this.prices.forEach((value, index) => {
        if (
          value.type == 2 &&
          value.people <= this.child &&
          value.people_end >= this.child
        ) {
          this.totalChild = value.price;
        }
      });

      let formData = {
        total: this.totalAdult + this.totalChild,
      };
      this.$store.dispatch("tour/setTotal", formData);
    },

    selectTime(value) {
      this.sTime = null;
      this.sTime = value;
      this.bookButton = true;
      this.timeStatus = true;
    },

    setAlert(value) {
      let formData = {
        alert: true,
        messageAlert: value,
      };
      this.$store.dispatch("general/setAlert", formData);
    },

    async orderNow(item) {
      console.log("CLICKED");

      if (this.timeStatus) {
        let formData = {
          package_id: Number(this.tourID),
          tour_id: Number(this.optionID),
          time_id: this.sTime,
          date: moment(this.date).format("YYYY-DD-MM"),
          adult: Number(this.adult),
          child: Number(this.child),
          adult_price: Number(this.totalAdult),
          child_price: Number(this.totalChild),
        };

        await this.$store.dispatch("wishlist/add", formData);

        this.$router.push("/payment/" + this.id + "?pay=" + item);
      } else {
        this.setAlert("Please, Select the time");
      }
    },
  },
};
</script>
