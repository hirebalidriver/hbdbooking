<template>
  <div>
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
      <div class="card-body">
        <h1 class="mb-4 text-lg font-bold">1. Contact details</h1>
        <div class="grid grid-cols-2 gap-3">
          <input-text label="First name" type="text" placeholder="First name" />
          <input-text label="Last name" type="text" placeholder="Last name" />
          <input-text
            label="Email address"
            type="email"
            placeholder="Email address"
          />
          <input-text
            label="Phone number"
            type="text"
            placeholder="Phone number"
          />
          <input-text label="Address" type="text" placeholder="Address" />
          <input-text label="City" type="text" placeholder="City" />
          <div class="mb-3">
            <label class="block mb-2 text-sm font-medium text-gray-900"
              >Country</label
            >
            <select class="w-full select select-bordered">
              <option disabled selected>Select your country</option>
              <option v-for="(item, index) in countries" :key="index">
                {{ item.name }}
              </option>
            </select>
          </div>
          <input-text
            label="State/Province/Region"
            type="text"
            placeholder="State/Province/Region"
          />
          <input-text label="Hotel" type="text" placeholder="Hotel" />
          <input-text
            label="Hotel address"
            type="text"
            placeholder="Hotel address"
          />
          <div class="col-span-2 mb-3">
            <label class="block mb-2 text-sm font-medium text-gray-900"
              >Special request</label
            >
            <textarea
              class="w-full textarea textarea-bordered"
              placeholder="Special request"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "./atoms/InputText.vue";
import CountryJson from "@/static/country.json";

export default {
  components: { InputText },
  data: () => ({
    countries: CountryJson,
  }),
};
</script>
