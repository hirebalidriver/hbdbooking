<template>
  <div>
    <form @submit.prevent="bookingTour()">
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
        <div class="card-body">
          <h1 class="mb-4 text-lg font-bold">1. Contact details</h1>
          <div class="grid grid-cols-2 gap-3" v-if="detailOpen">
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >First name *</label
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
                >Last name *</label
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
                >Email *</label
              >
              <input
                label="Email address"
                type="email"
                placeholder="Email address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="form.email"
                required
                @input="validateEmail"
              />
              <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
            </div>
            <div class="mb-3">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Phone number *</label
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
                >Address *</label
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
                >Country *</label
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
            <div class="col-span-2 mb-3">
              <a class="bg-blue-700 btn" @click="getNext()">NEXT</a>
            </div>
          </div>

          <div v-else>
            <p class="mb-3 font-bold">{{ form.fname }} {{ form.lname }}</p>
            <p class="mb-2">Email : {{ form.email }}</p>
            <p class="mb-4">Phone : {{ form.phone }}</p>
            <a class="btn-outline btn-sm btn" @click="updateDetail()">Edit</a>
          </div>
        </div>
      </div>

      <div
        class="mt-4 bg-white border border-gray-200 rounded-lg shadow-lg"
        id="payment"
      >
        <div class="card-body">
          <h1 class="mb-4 text-lg font-bold">2. Payment</h1>
          <div v-if="paymentOpen">
            <div class="form-control">
              <label class="flex justify-start gap-2 mb-2">
                <input
                  type="radio"
                  name="radio-10"
                  v-model="form.payment"
                  value="1"
                  class="radio checked:bg-red-500"
                  checked
                  @click="showLaterBtn()"
                />
                <span class="text-lg font-semibold">Pay Later (cash)</span>
              </label>
              <p class="ml-8" v-if="showPayLater">Pay cash in person.</p>
            </div>
            <div class="mt-5 form-control">
              <label class="flex justify-start gap-2 mb-2">
                <input
                  type="radio"
                  name="radio-10"
                  v-model="form.payment"
                  value="0"
                  class="radio checked:bg-red-500"
                  checked
                  @click="showPaypalBtn()"
                />
                <span class="text-lg font-semibold">Pay Now</span>
              </label>

              <div v-if="showPayNow">
                <div ref="paypal"></div>
                <p class="ml-8">
                  Pay via PayPal: you can pay with your credit card if you dont
                  have a PayPal account.
                </p>
              </div>
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
          <a
            class="text-orange-700"
            href="https://hirebalidriver.com/terms-and-conditions/"
            >terms and conditions hirebalidriver.com</a
          >
        </p>
      </div>
      <div class="mt-4">
        <button
          v-if="detailOpen === false && form.payment == 1"
          type="submit"
          class="w-full bg-green-700 border-none btn hover:bg-green-900"
        >
          Place Order
        </button>
        <button
          v-else
          disabled="disabled"
          class="w-full bg-gray-200 border-none btn"
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
  props: ["wishlist", "priceAdult", "priceChild"],
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
        payment: 0,
        paypalEmail: "",
        orderId: "",
      },
      checkAgree: false,
      isPaymentAmountModalVisible: false,
      total: 0,
      paymentOpen: false,
      detailOpen: true,
      showPayNow: false,
      showPayLater: false,
      paypalClientID: process.env.NUXT_BASE_PAYPAL_CLIENT,
    };
  },

  created() {
    this.setDefault();
    this.setStart();
    this.getTotal();
  },

  computed: {
    ...mapGetters({
      bookingId: "wishlist/bookingId",
    }),
  },

  // mounted: function () {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://www.paypal.com/sdk/js?client-id=AWYqwZP_0zlnYZm38Lz7ZkaPUbfyCS5_2ryOkE89UrAiq3KrO6rsrRmIXDfmvLanv290iZwk56tcUgKE";
  //   script.addEventListener("load", this.setLoaded);
  //   document.body.appendChild(script);
  // },

  mounted() {
     // Cek dan ambil hanya data yang diperlukan dari local storage
     const savedData = localStorage.getItem("bookingFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Hanya mengisi field yang ada di dalam parsedData ke form
      Object.keys(parsedData).forEach(key => {
        if (this.form.hasOwnProperty(key)) {
          this.form[key] = parsedData[key];
        }
      });
    }
  },

  watch: {
    form: {
      deep: true,
      handler(newForm) {
        // Hanya simpan field yang digunakan
        const dataToSave = {
          fname: newForm.fname,
          lname: newForm.lname,
          email: newForm.email,
          phone: newForm.phone,
          address: newForm.address,
          country: newForm.country,
          // hotel: newForm.hotel,
          // hotel_address: newForm.hotel_address,
          // note: newForm.note,
          // Tambahkan field lainnya sesuai kebutuhan
        };
        localStorage.setItem("bookingFormData", JSON.stringify(dataToSave));
      }
    }
  },

  methods: {
    setDefault() {
      let pay = this.$route.query.pay;
      if (pay == "now") {
        this.form.payment = 0;
        this.showPaypalBtn();
      } else {
        this.form.payment = 1;
        this.showLaterBtn();
      }
    },

    showPaypalBtn() {
      this.form.payment = 0;
      this.showPayLater = false;
      this.showPayNow = true;
      if (typeof document !== "undefined") {
        const script = document.createElement("script");

        script.src =
          "https://www.paypal.com/sdk/js?client-id=AZXYqeqDwlHvpoY3VEVl_mA-WmbffCugor1pHX0CF12cABbwXX8v4Qbc4IONWqMuywUNRvF4O6ZIam24";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
      }
    },

    showLaterBtn() {
      this.form.payment = 1;
      this.showPayNow = false;
      this.showPayLater = true;
    },

    getTotal() {
      // Calculate using IDR prices if available, otherwise use USD with conversion
      let priceAdult = this.wishlist?.adult * (this.priceAdult?.idr_price || this.$convertToIDR(this.priceAdult?.price));
      let priceChild = this.wishlist?.child * (this.priceChild?.idr_price || this.$convertToIDR(this.priceChild?.price));
      let total = priceAdult + priceChild;
      this.total = total;
      console.log("total: ", this.total);
    },

    setStart() {
      this.form.wishlist_id = this.wishlist.id;
    },

    async bookingTour() {
      this.form.wishlist_id = this.wishlist.id;
      if (this.checkAgree) {
        await this.$store.dispatch("wishlist/booking", this.form);
        this.$router.push("/success/" + this.bookingId);
      } else {
        console.log("Must checked our terms and conditions.");
      }
    },

    payLater() {
      if (this.form.payment === 0) {
        this.form.payment = 1;
      } else {
        this.form.payment = 0;
      }

      console.log(this.form.payment);
    },

    getNext() {
      // console.log(this.wishlist.id);
      
      if (!this.form.fname) {
        let msg = { alert: true, messageAlert: "First name required" };
        this.$store.dispatch("general/setAlert", msg);
      } else if (!this.form.lname) {
        let msg = { alert: true, messageAlert: "Last name required" };
        this.$store.dispatch("general/setAlert", msg);
      } else if (!this.form.email) {
        let msg = { alert: true, messageAlert: "Email required" };
        this.$store.dispatch("general/setAlert", msg);
      } else if (!this.form.phone) {
        let msg = { alert: true, messageAlert: "Phone required" };
        this.$store.dispatch("general/setAlert", msg);
      } else if (!this.form.address) {
        let msg = { alert: true, messageAlert: "Address required" };
        this.$store.dispatch("general/setAlert", msg);
      } else if (!this.form.country) {
        let msg = { alert: true, messageAlert: "Country required" };
        this.$store.dispatch("general/setAlert", msg);
      } else {
        let formData = {
          id: this.wishlist.id,
          first_name: this.form.fname,
          last_name: this.form.lname,
          email: this.form.email,
          phone_number: this.form.phone,
          address: this.form.address,
          country: this.form.country,
          hotel: this.form.hotel,
          hotel_address: this.form.hotel_address,
          special_request:this.form.special_request,
        };

        this.$store.dispatch("wishlist/update", formData);
        
        this.paymentOpen = true;
        this.detailOpen = false;
        window.scrollTo({
          top: document.getElementById("payment").offsetTop,
          left: 0,
          behavior: "smooth",
        });

        this.form.wishlist_id = this.wishlist.id;

        this.getTotal();

        const script = document.createElement("script");
        script.src =
          "https://www.paypal.com/sdk/js?client-id=AZXYqeqDwlHvpoY3VEVl_mA-WmbffCugor1pHX0CF12cABbwXX8v4Qbc4IONWqMuywUNRvF4O6ZIam24";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
      }
    },

    updateDetail() {
      this.detailOpen = true;
      this.paymentOpen = false;
    },

    // PAYPAL
    openPaymentAmountModal() {
      this.isPaymentAmountModalVisible = true;
    },
    closePaymentAmountModal() {
      this.isPaymentAmountModalVisible = false;
    },
    setLoaded: function () {
      // Calculate the actual USD value for PayPal processing
      // Using original USD prices for payment processing, not the converted IDR
      let priceAdultUSD = this.wishlist?.adult * (this.priceAdult?.price || 0);
      let priceChildUSD = this.wishlist?.child * (this.priceChild?.price || 0);
      let totalUSD = parseFloat(priceAdultUSD + priceChildUSD).toFixed(2);
      
      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "paypal",
          },
          createOrder: (data, actions) => {
            this.checkAgree = true;
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalUSD,
                    currency_code: 'USD'
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const orderPaypal = await actions.order.capture();
            this.form.payment = 0;
            this.checkAgree = true;
            this.form.paypalEmail = orderPaypal.payer.email_address;
            this.form.orderId = orderPaypal.id;
            await this.$store.dispatch("wishlist/booking", this.form);
            this.$router.push("/success/" + this.bookingId);
          },
          onCancel: async (data, actions) => {
            // this.checkAgree = true;
            // this.form.payment = 1;
            console.log("cancel");
            // await this.$store.dispatch("wishlist/booking", this.form);
            // this.$router.push("/success/" + this.bookingId);
          },
        })
        .render(this.$refs.paypal);
    },
    // END PAYPAL

    // validasi
    validateEmail() {
      // Regex sederhana untuk validasi email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (this.form.email && !emailPattern.test(this.form.email)) {
        this.emailError = "Email is not valid";
      } else {
        this.emailError = "";
      }
    },
  },
};
</script>
