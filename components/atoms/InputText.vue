<template>
  <div class="mb-3">
    <label class="block mb-2 text-sm font-medium text-gray-900">{{
      label
    }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full input input-bordered"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder", "label"],
};
</script>
