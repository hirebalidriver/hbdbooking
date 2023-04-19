<template>
  <div>
    <div class="grid grid-cols-3 gap-4 mt-5">
      <div class="col-span-2">Products</div>
      <div><form-calendar></form-calendar></div>
    </div>
    <div class="mt-5 grid gap-2">
      <div
        class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        Options
      </div>
      <div
        class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        Options
      </div>
    </div>
  </div>
</template>

<script>
import FormCalendar from "../components/FormCalendar.vue";
export default {
  components: { FormCalendar },
  layout: "default",
};
</script>
