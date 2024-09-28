<template>
  <div class="container px-6 mx-auto">
    <div class="flex justify-between py-5">
      <div class="w-32">
        <a href="https://hirebalidriver.com"><img src="@/static/image/logo-hbd.png" alt="Hire Bali Driver" /></a>
      </div>
      <a href="https://hirebalidriver.com">Home</a>
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

    <div
      class="fixed w-2/5 shadow-lg alert alert-warning bottom-4 right-4"
      @click="closeAlert()"
      v-if="alert"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ messageAlert }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import FooterDefault from "../components/FooterDefault.vue";
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      script: [
        {
          hid: 'gtag',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-93Q8YKYLC8', { 'cookie_domain': 'auto' });
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag': ['innerHTML']
      }
    };
  },
  components: { FooterDefault },
  computed: {
    ...mapGetters({
      alert: "general/alert",
      messageAlert: "general/messageAlert",
    }),
  },

  // created() {
  //   setTimeout(() => {
  //     this.closeAlert();
  //   }, 5000);
  // },

  methods: {
    closeAlert() {
      let formData = {
        alert: false,
        messageAlert: "",
      };
      this.$store.dispatch("general/setAlert", formData);
    },
  },
};
</script>

<style></style>
