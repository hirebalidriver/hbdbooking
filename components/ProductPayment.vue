<template>
  <div>
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
      <div class="card-body">
        <div class="flex gap-3 mb-4">
          <figure class="max-w-[100px]">
            <img
              :src="
                'https://hbds3.s3.ap-southeast-1.amazonaws.com' + tour?.thumb
              "
              alt="Hire Bali Driver"
            />
          </figure>
          <h2 class="font-bold">
            {{ tour?.title }}
          </h2>
        </div>
        <p>{{ adult }} adult x USD {{ priceAdult?.price }}</p>
        <p v-if="child != 0">{{ child }} child x USD {{ priceChild?.price }}</p>
        <!-- <p>TOTAL USD 178</p> -->
        <p>{{ date | dateFormat }} {{ time | timeFormat }}</p>
        <p>Free cancellation before {{ date | dateFormat }}</p>
        <div class="flex justify-between py-4 mt-4 border-t-2">
          <h2 class="text-lg font-bold">Total Price</h2>
          <h2 class="text-lg font-bold" v-if="child != 0">
            USD
            {{ adult * priceAdult?.price + child * priceChild?.price }}
          </h2>
          <h2 class="text-lg font-bold" v-else>
            USD
            {{ adult * priceAdult?.price }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["tour", "adult", "child", "priceAdult", "priceChild", "date", "time"],
  data() {
    return {
      totalPrice: 0,
    };
  },

  filters: {
    dateFormat: function (value) {
      console.log(value);
      
      if (!value) return "";
      value = moment(value, "YYYY-MM-DD");
      return value.format("ll");
    },

    timeFormat: function (value) {
      if (!value) return "";
      value = moment(value, "HH:mm");
      return value.format("LT");
    },
  },
};
</script>
