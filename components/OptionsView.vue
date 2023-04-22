<template>
  <div>
    <div class="w-full border shadow-xl card bg-base-100">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2 px-6 py-6 border-b-2 md:border-r-2">
          <h2 class="mb-5 text-2xl font-bold">{{ title }}</h2>
          <p>Inclusions</p>
          <div class="flex gap-2 mb-3" v-html="inclusions"></div>
          <div class="flex flex-row gap-3">
            <button class="btn btn-sm btn-outline">7:30 AM</button>
            <button class="btn btn-sm btn-outline">8:30 AM</button>
          </div>
        </div>
        <div class="w-full px-6 py-6 text-right border-b-2">
          <h3 class="text-lg font-bold">USD {{ total }}</h3>
          <div class="mb-3" v-for="(item, index) in prices" :key="index">
            <div
              v-if="
                item.type == 1 &&
                item.people <= adult &&
                item.people_end >= adult
              "
            >
              <p>{{ adult }} adult x USD {{ item.price }}</p>
            </div>
          </div>
          <div class="mb-3" v-for="(item, index) in prices" :key="index">
            <div
              v-if="
                item.type == 2 &&
                item.people <= child &&
                item.people_end >= child
              "
            >
              <p>{{ child }} child x USD {{ item.price }}</p>
            </div>
          </div>
          <button class="w-full mb-2 btn btn-outline">
            Reserve Now &amp; Pay Later
          </button>
          <nuxt-link class="w-full bg-green-700 btn" to="/payment"
            >Book Now</nuxt-link
          >
        </div>
      </div>
      <div class="px-6 py-5">
        <p>
          <strong>Reserve Now & Pay Later</strong> is an easy way to secure your
          spot while keeping your plans flexible.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["title", "prices", "inclusions"],

  data: () => ({
    total: 0,
    totalAdult: 0,
    totalChild: 0,
  }),

  mounted() {
    this.getTotal();
  },

  computed: {
    ...mapGetters({ adult: "tour/adult", child: "tour/child" }),
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

      this.total = this.totalAdult + this.totalChild;
    },
  },
};
</script>
