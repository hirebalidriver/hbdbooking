export default async ({ app, $axios }, inject) => {
  let exchangeRate = 15000; // default fallback rate
  
  try {
    // Fetch the current exchange rate from the API
    const response = await $axios.$get('/api/front/currency-settings');
    if (response && response.data && response.data.value) {
      exchangeRate = parseFloat(response.data.value);
    }
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    // Use default rate if API call fails
  }

  // Inject $formatIDR(price) in Vue, context and store
  inject('formatIDR', (price) => {
    if (price === null || price === undefined) return 'Rp 0';
    // Format number to IDR currency format
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  });
  
  // Inject $convertToIDR function to convert USD to IDR using current exchange rate
  inject('convertToIDR', (usdPrice) => {
    if (usdPrice === null || usdPrice === undefined) return 0;
    return usdPrice * exchangeRate;
  });
  
  // Alternative format without currency symbol spacing
  inject('formatRupiah', (price) => {
    if (price === null || price === undefined) return 'Rp 0';
    // Format to Rp XXX,XXX,XXX format
    return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  });
}
