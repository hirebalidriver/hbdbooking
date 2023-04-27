<template>
  <div>
    <div class="tabs tabs-boxed">
      <a :class="`tab tab-md md:tab-lg ${menu === 1 ? 'font-bold' : ''}`"
        >1. Activity</a
      >
      <a :class="`tab tab-md md:tab-lg ${menu === 2 ? 'font-bold' : ''}`"
        >2. Payment</a
      >
      <a :class="`tab tab-md md:tab-lg ${menu === 3 ? 'font-bold' : ''}`"
        >3. Success</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      menu: "general/menu",
    }),
  },
};
</script>
