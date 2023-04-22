<template>
  <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
    <div class="w-full">
      <div class="mb-6">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900"
          >Date</label
        >
        <input
          type="date"
          id="date"
          v-model="dob"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
          >Adult</label
        >
        <input
          type="number"
          id="email"
          v-model="adultCount"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Adult"
          required
        />
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
          >Child</label
        >
        <input
          type="number"
          id="email"
          v-model="childCount"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Child"
          required
        />
      </div>
      <a
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        @click="getCheck()"
      >
        Check Availability
      </a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["adult", "child", "date", "tour"],
  data() {
    return {
      adultCount: this.adult,
      childCount: this.child,
      initialDate: moment(this.date).format("YYYY-MM-DD"),
    };
  },

  computed: {
    dob: {
      get() {
        return this.initialDate;
      },
      set(newValue) {
        this.initialDate = newValue;
      },
    },
  },

  created() {
    this.getCheck();
  },

  methods: {
    async getCheck() {
      console.log("check");
      let formData = {
        adult: this.adultCount,
        child: this.childCount,
      };
      this.$store.dispatch("tour/setPeople", formData);

      let form = {
        id: this.tour,
        adult: this.adultCount,
        child: this.childCount,
      };
      await this.$store.dispatch("tour/options", form);
    },
  },
};
</script>
