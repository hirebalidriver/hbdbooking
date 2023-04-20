<template>
  <div>
    <div class="w-full border shadow-xl card bg-base-100">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col-span-2 px-6 py-6 border-b-2 md:border-r-2">
          <h2 class="mb-5 text-2xl font-bold">{{ title }}</h2>
          <p class="mb-3">Inclusions : transfers, lunch</p>
          <div class="flex flex-row gap-3">
            <button class="btn btn-sm btn-outline">7:30 AM</button>
            <button class="btn btn-sm btn-outline">8:30 AM</button>
          </div>
        </div>
        <div class="w-full px-6 py-6 text-right border-b-2">
          <div class="mb-3">
            <h3>USD {{ price * 2 }}</h3>
            <p>2 adults x USD {{ price }}</p>
          </div>
          <button class="w-full mb-2 btn btn-outline">
            Reserve Now &amp; Pay Later
          </button>
          <nuxt-link class="w-full bg-green-700 btn" to="/payment"
            >Book Now</nuxt-link
          >
        </div>
      </div>
      <div class="px-6 py-5">
        <p>
          <strong>Reserve Now & Pay Later</strong> is an easy way to secure your
          spot while keeping your plans flexible.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "price"],
};
</script>
