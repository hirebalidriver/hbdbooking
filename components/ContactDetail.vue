<template>
  <div>
    <form @submit.prevent="bookingTour()">
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
        <div class="card-body">
          <h1 class="mb-4 text-lg font-bold">1. Contact details</h1>
          <div class="grid grid-cols-2 gap-3">
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >First name</label
              >
              <input
                label="First name"
                type="text"
                placeholder="First name"
                v-model="form.fname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Last name</label
              >
              <input
                label="Last name"
                type="text"
                placeholder="Last name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="form.lname"
                required
              />
            </div>
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Email</label
              >
              <input
                label="Email address"
                type="email"
                placeholder="Email address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="form.email"
                required
              />
            </div>
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Phone number</label
              >
              <input
                label="Phone number"
                type="text"
                v-model="form.phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Phone number"
                required
              />
            </div>
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Address</label
              >
              <input
                label="Address"
                type="text"
                placeholder="Address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="form.address"
                required
              />
            </div>
            <!-- <input
            label="City"
            type="text"
            placeholder="City"
            v-model="form.city"
          /> -->
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Country</label
              >
              <select
                class="w-full select select-bordered"
                v-model="form.country"
                required
              >
                <option disabled selected>Select your country</option>
                <option
                  v-for="(item, index) in countries"
                  :key="index"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <!-- <input
            label="State/Province/Region"
            type="text"
            v-model="form.state"
            placeholder="State/Province/Region"
          /> -->
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Hotel</label
              >
              <input
                label="Hotel"
                type="text"
                placeholder="Hotel"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="form.hotel"
                required
              />
            </div>
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Hotel address</label
              >
              <input
                label="Hotel address"
                type="text"
                placeholder="Hotel address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="form.hotel_address"
                required
              />
            </div>
            <div class="col-span-2 mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Special request</label
              >
              <textarea
                class="w-full textarea textarea-bordered"
                placeholder="Special request"
                v-model="form.note"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div class="card-body">
          <h1 class="mb-4 text-lg font-bold">2. Payment</h1>
          <div>
            <div class="mb-5 form-control">
              <label class="flex justify-start gap-2 mb-2">
                <input
                  type="radio"
                  name="radio-10"
                  v-model="form.payment"
                  value="0"
                  class="radio checked:bg-red-500"
                  checked
                />
                <span class="text-lg font-semibold">Paypal</span>
              </label>
              <p class="ml-8">
                Pay via PayPal: you can pay with your credit card if you dont
                have a PayPal account.
              </p>
            </div>
            <div class="form-control">
              <label class="flex justify-start gap-2 mb-2">
                <input
                  type="radio"
                  name="radio-10"
                  v-model="form.payment"
                  value="1"
                  class="radio checked:bg-red-500"
                  checked
                />
                <span class="text-lg font-semibold">Pay later (cash)</span>
              </label>
              <p class="ml-8">Pay with cash on meeting.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-2 mt-8">
        <input
          type="checkbox"
          checked="checked"
          class="checkbox"
          v-model="checkAgree"
          required
        />
        <p>
          I have read and agree to the website
          <nuxt-link class="text-orange-700" to="https://hirebalidriver.com"
            >terms and conditions hirebalidriver.com</nuxt-link
          >
        </p>
      </div>
      <div class="mt-4">
        <button
          type="submit"
          class="w-full bg-green-700 border-none btn hover:bg-green-900"
        >
          Place Order
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from "./atoms/InputText.vue";
import CountryJson from "@/static/country.json";
import { mapGetters } from "vuex";

export default {
  props: ["wishlist"],
  components: { InputText },
  data() {
    return {
      countries: CountryJson,
      form: {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        // city: "",
        country: "",
        // state: "",
        hotel: "",
        hotel_address: "",
        note: "",
        payment: 1,
      },
      checkAgree: false,
    };
  },

  computed: {
    ...mapGetters({ bookingId: "wishlist/bookingId" }),
  },

  methods: {
    async bookingTour() {
      this.form.wishlist_id = this.wishlist;
      // console.log(this.form);
      if (this.checkAgree) {
        await this.$store.dispatch("wishlist/booking", this.form);
        this.$router.push("/success/" + this.bookingId);
      } else {
        console.log("must checked");
      }
    },
  },
};
</script>
