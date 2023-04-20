<template>
  <div class="container px-6 mx-auto">
    <div class="flex justify-between py-5">
      <div class="w-32">
        <img src="@/static/image/logo-hbd.png" alt="Hire Bali Driver" />
      </div>
      <nuxt-link to="https://hirebalidriver.com">Home</nuxt-link>
    </div>

    <div class="w-full pt-5 pb-5">
      <stepper-view></stepper-view>
    </div>
    <div>
      <div>
        <Nuxt />
      </div>
      <div class="pt-10">
        <footer-default />
      </div>
    </div>
  </div>
</template>

<script>
import FooterDefault from "../components/FooterDefault.vue";
export default {
  components: { FooterDefault },
};
</script>

<style></style>
