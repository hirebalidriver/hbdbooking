<template>
  <div>
    <div
      class="bg-white border border-gray-200 rounded-lg shadow-lg card lg:card-side"
    >
      <figure class="max-w-[500px]" v-if="tour.thumb">
        <!-- <img src="'aws'+${{tour.thumb}}" alt="Album" /> -->
      </figure>
      <figure class="max-w-[500px]" v-else>
        <div class="w-full rounded-md">
          <div class="space-x-4 animate-pulse">
            <div class="w-56 h-56 bg-slate-200"></div>
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
