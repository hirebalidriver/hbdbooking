<template>
  <div>
    <div class="grid grid-cols-1 mt-5 md:gap-4 md:grid-cols-3">
      <div class="col-span-2">
        <product-order></product-order>
      </div>
      <div class="w-full mt-4 md:mt-0"><form-calendar></form-calendar></div>
    </div>
    <div class="grid gap-4 mt-5">
      <options-view title="Besakih - All inclusive" price="89"></options-view>
      <options-view title="Besakih without Lunch" price="79"></options-view>
    </div>
  </div>
</template>

<script>
import FormCalendar from "../components/FormCalendar.vue";
import OptionsView from "../components/OptionsView.vue";
import ProductOrder from "../components/ProductOrder.vue";
export default {
  components: { FormCalendar, ProductOrder, OptionsView },
  layout: "default",
};
</script>
