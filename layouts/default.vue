<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import StepperView from "../components/StepperView.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="container mx-auto px-6">
    <div class="py-5 flex justify-between">
      <div class="w-32">
        <img src="@/static/image/logo-hbd.png" alt="Hire Bali Driver" />
      </div>
      <nuxt-link to="https://hirebalidriver.com">Home</nuxt-link>
    </div>

    <div class="pt-5 pb-5 w-full md:w-48">
      <stepper-view></stepper-view>
    </div>
    <div>
      <div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>
