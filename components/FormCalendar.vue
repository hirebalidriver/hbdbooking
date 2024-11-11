<template>
  <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
    <div class="w-full">
      <div class="mb-6">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900"
          >Date</label
        >
        <div>
          <flat-pickr
              v-model="initialDate"
              :config="flatpickrOptions"
              @ready="addDisabledClass"
              @change="onDateChange"
              id="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
        </div>
        <!-- <input
          type="date"
          id="date"
          v-model="dob"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        /> -->
        <span v-if="errorDate" class="errorMsg">{{ errorDateMsg }}</span>
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
        class="block hover:cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        @click="getCheck()"
      >
        Check Availability
      </a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import { mapGetters } from "vuex";
export default {
  components: {flatPickr: Flatpickr},
  props: ["adult", "child", "date", "tour","pisabledDates"],
  data() {
    return {
      adultCount: this.adult,
      childCount: this.child,
      // initialDate: moment(this.date).format("YYYY-MM-DD"),
      errorDate: false,
      errorDateMsg: "Please choose a different date!",
      // selectedDate: new Date(),
      disabledDates: [],
      initialDate: this.getNow(),
    };
  },

  computed: {
    ...mapGetters({ map_get_black_period: "tour/get_black_period" }),
    // dob: {
    //   get() {
    //     return this.initialDate;
    //   },
    //   set(newValue) {
        
    //     this.initialDate = newValue;
    //   },
    // },
    flatpickrOptions() {
      return {
        disable: this.disabledDates,
        dateFormat: 'Y-m-d',
        onDayCreate: this.onDayCreate,
        onValueUpdate: this.onDateChange, 
        defaultDate: this.initialDate,
        minDate: moment().add(1, 'days').format('YYYY-MM-DD'),
      };
    },
  },

  created() {
    this.getCheck();
    this.getBlackPeriod();
  },

  methods: {

    getNow () {
      
      if(moment(this.date).format("YYYY-MM-DD") <= moment().format("YYYY-MM-DD")) {
          return moment().format("YYYY-MM-DD");
      }else{
        return moment(this.date).format("YYYY-MM-DD");
      }
    },

      
    async getCheck() {
      // Memastikan tanggal yang dipilih valid
      const formattedInitialDate = moment(this.initialDate).format("YYYY-MM-DD");
      
      if (formattedInitialDate <= moment().format("YYYY-MM-DD") || 
      this.disabledDates.some(disabledDate => 
          moment(disabledDate).format("YYYY-MM-DD") === formattedInitialDate)) {
          this.errorDate = true;
      }else{
        this.errorDate = false;
        let formData = {
          adult: this.adultCount,
          child: this.childCount,
          date: this.initialDate,
        };
        this.$store.dispatch("tour/setPeople", formData);

        let form = {
          id: this.tour,
          adult: this.adultCount,
          child: this.childCount,
        };
        await this.$store.dispatch("tour/options", form);

        window.scrollTo({
          top: document.getElementById("options").offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    },

    async getBlackPeriod() {
      let formData = {
        // id: this.tourId,
      };
      await this.$store.dispatch("tour/get_black_period", formData);
      // Misalnya hasil dari Axios sudah diambil dan disimpan dalam this.map_get_black_period
      this.disabledDates = this.map_get_black_period.map(item => new Date(item.date))

      
    },

    onDayCreate(dObj, dStr, fp, dayElem) {
      const date = fp.parseDate(dayElem.dateObj);
      if (this.disabledDates.some(disabledDate => disabledDate.getTime() === date.getTime())) {
        dayElem.classList.add('disabled-date');
      }
    },

    onDateChange(selectedDates) {
      this.initialDate = selectedDates[0]; // Set nilai initialDate ke tanggal terpilih
    },
  },
  watch: {
    initialDate(newVal, oldVal) {
      // Lakukan aksi lain berdasarkan perubahan nilai di sini
      let formData = {
        date: newVal,
      };
      this.$store.dispatch("tour/setDate", formData);
      console.log(this.date);
      
    },
  },
};
</script>

<style scoped>
input[type="date"] {
  display: block;

  min-width: 96%;
}
.errorMsg {
  font-size: 11px;
  color: red;
}

.disabled-date {
  background-color: #d3d3d3 !important; /* Warna abu-abu */
  color: #fff !important; /* Warna teks putih agar kontras */
  pointer-events: none; /* Nonaktifkan interaksi */
}
</style>
