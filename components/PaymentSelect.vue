<template>
  <div>
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
      <div class="card-body">
        <h1 class="mb-4 text-lg font-bold">2. Payments</h1>
        <div>
          <div class="mb-5 form-control">
            <label class="flex justify-start gap-2 mb-2">
              <input
                type="radio"
                name="radio-10"
                class="radio checked:bg-red-500"
                checked
              />
              <span class="text-lg font-semibold">Paypal</span>
            </label>
            <p class="ml-8">
              Pay via PayPal: you can pay with your credit card if you dont have
              a PayPal account.
            </p>
          </div>
          <div class="form-control">
            <label class="flex justify-start gap-2 mb-2">
              <input
                type="radio"
                name="radio-10"
                class="radio checked:bg-red-500"
                checked
              />
              <span class="text-lg font-semibold">Pay later (cash)</span>
            </label>
            <p class="ml-8">Pay with cash on meeting.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
