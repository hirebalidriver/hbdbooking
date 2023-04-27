<template>
  <div>
    <div class="grid grid-cols-1 mt-5 md:gap-4 md:grid-cols-3">
      <div class="col-span-2">
        <product-order :tour="tour"></product-order>
      </div>
      <div class="w-full mt-4 md:mt-0">
        <form-calendar
          :adult="adult"
          :child="child"
          :date="date"
          :tour="tourId"
        />
      </div>
    </div>
    <div class="grid gap-4 mt-5" v-if="loading">
      <option-skeleton />
    </div>
    <div class="grid gap-4 mt-5" v-else>
      <options-view
        v-for="(item, index) in options"
        :key="index"
        :tourID="tourId"
        :optionID="item.id"
        :title="item.title"
        :inclusions="item.inclusions"
        :prices="item.prices"
        :times="item.times"
        :adult="adult"
        :child="child"
      />
    </div>
  </div>
</template>

<script>
import FormCalendar from "../../components/FormCalendar.vue";
import OptionsView from "../../components/OptionsView.vue";
import ProductOrder from "../../components/ProductOrder.vue";
import OptionSkeleton from "../../components/OptionSkeleton.vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  components: { FormCalendar, ProductOrder, OptionsView, OptionSkeleton },
  layout: "default",

  data() {
    return {
      //http://localhost:3000/tour?tour=2&adult=2&child=0&date=10-5-2023
      id: 0,
      loading: false,
      date: null,
      tourId: 0,
      adult: 0,
      child: 0,
    };
  },

  created() {
    this.setDefault();
    this.getTour();
    this.getOptions();
  },

  computed: {
    ...mapGetters({ tour: "tour/tour", options: "tour/options" }),
  },

  methods: {
    setDefault() {
      this.date = this.$route.query.date;
      this.tourId = this.$route.query.tour;
      this.adult = this.$route.query.adult;
      this.child = this.$route.query.child;
      console.log("date", this.date);
    },

    async getTour() {
      let formData = {
        id: this.tourId,
      };
      await this.$store.dispatch("tour/tour", formData);
    },

    async getOptions() {
      this.loading = true;
      let formData = {
        id: this.tourId,
        adult: this.adult,
        child: this.child,
      };
      await this.$store.dispatch("tour/options", formData);
      this.loading = false;
    },
  },
};
</script>
