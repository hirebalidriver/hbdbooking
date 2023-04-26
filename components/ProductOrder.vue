<template>
  <div>
    <div
      class="bg-white border border-gray-200 rounded-lg shadow-lg card lg:card-side"
    >
      <figure class="max-w-[500px]" v-if="tour.thumb">
        <img
          :src="'https://hbds3.s3.ap-southeast-1.amazonaws.com' + tour.thumb"
          alt="Hire Bali Driver"
        />
      </figure>
      <figure class="max-w-[500px]" v-else>
        <div class="w-full rounded-md">
          <div class="space-x-4 animate-pulse">
            <div class="w-full h-56 md:w-56 bg-slate-200"></div>
          </div>
        </div>
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ tour.title }}
        </h2>
        <!-- <p>from USD 89</p> -->
        <!-- <div class="justify-end card-actions">
          <button
            class="text-black bg-gray-300 border-none btn btn-sm hover:text-white"
          >
            Detail
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tour"],
};
</script>
