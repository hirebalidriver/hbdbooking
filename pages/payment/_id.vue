<template>
  <div>
    <div class="grid grid-cols-1 mt-5 md:gap-4 md:grid-cols-3">
      <div class="col-span-2">
        <contact-detail
          class="mb-4"
          :wishlist="wishtlist"
          :priceAdult="pricesAdult"
          :priceChild="pricesChild"
        />
      </div>
      <div class="w-full mt-4 md:mt-0">
        <product-payment
          :tour="wishtlist.tour"
          :adult="wishtlist.adult"
          :child="wishtlist.child"
          :priceAdult="pricesAdult"
          :priceChild="pricesChild"
          :date="wishtlist.date"
          :time="wishtlist.time"
        ></product-payment>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOrder from "../../components/ProductOrder.vue";
import ProductPayment from "../../components/ProductPayment.vue";
import ContactDetail from "../../components/ContactDetail.vue";
import PaymentSelect from "../../components/PaymentSelect.vue";
import { mapGetters } from "vuex";

export default {
  components: { ProductOrder, ProductPayment, ContactDetail, PaymentSelect },
  layout: "default",

  // data() {
  //   return {
  //   };
  // },

  created() {
    this.getWishlist();
  },

  computed: {
    ...mapGetters({
      wishtlist: "wishlist/wishlist",
      pricesAdult: "wishlist/pricesAdult",
      pricesChild: "wishlist/pricesChild",
    }),
  },

  methods: {
    async getWishlist() {
      let formData = {
        id: this.$route.params.id,
      };
      await this.$store.dispatch("wishlist/detail", formData);
      this.$store.dispatch("general/setMenu", 2);
    },
  },
};
</script>
