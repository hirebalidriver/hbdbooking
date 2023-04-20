<template>
  <div>
    <div class="grid grid-cols-1 mt-5 md:gap-4 md:grid-cols-3">
      <div class="col-span-2">
        <contact-detail class="mb-4" />
        <payment-select />
        <div class="flex gap-2 mt-8">
          <input type="checkbox" checked="checked" class="checkbox" />
          <p>
            I have read and agree to the website
            <nuxt-link class="text-orange-700" to="https://hirebalidriver.com"
              >terms and conditions hirebalidriver.com</nuxt-link
            >
          </p>
        </div>
        <div class="mt-4">
          <nuxt-link
            to="/success"
            class="w-full bg-green-700 border-none btn hover:bg-green-900"
          >
            Place Order
          </nuxt-link>
        </div>
      </div>
      <div class="w-full mt-4 md:mt-0">
        <product-payment></product-payment>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOrder from "../../components/ProductOrder.vue";
import ProductPayment from "../../components/ProductPayment.vue";
import ContactDetail from "../../components/ContactDetail.vue";
import PaymentSelect from "../../components/PaymentSelect.vue";

export default {
  components: { ProductOrder, ProductPayment, ContactDetail, PaymentSelect },
  layout: "default",
};
</script>
