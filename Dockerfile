# Gunakan image Node.js yang ringan sebagai base image
FROM node:18-alpine

# Set direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan yarn.lock (jika ada) untuk menginstal dependensi
COPY package.json ./
COPY yarn.lock ./

# Instal dependensi menggunakan Yarn (karena yarn.lock ada)
RUN yarn install --frozen-lockfile

# Salin seluruh isi proyek ke dalam kontainer
COPY . .

# Build aplikasi Nuxt.js untuk produksi
RUN yarn build

# Expose port yang digunakan oleh aplikasi Nuxt.js (default: 3000)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi saat kontainer dimulai
CMD ["yarn", "start"]