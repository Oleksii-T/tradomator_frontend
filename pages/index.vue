<template>
  <NuxtLayout name="landing">
    <!-- Top Section -->
    <section class="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center bg-image">
      <div class="bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Automate Your Trading Strategies</h1>
        <p class="text-gray-200 mt-4">
          Seamlessly create, test, and deploy strategies with Tradomator's cutting-edge trading bot.
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">Why Choose Tradomator?</h2>
        <div class="flex justify-center mt-10 gap-6">
          <div class="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Automated Execution</h3>
            <p class="mt-4">Set up and run your trading strategies automatically, 24/7.</p>
          </div>
          <div class="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Backtesting</h3>
            <p class="mt-4">Test your strategies against historical data to refine performance.</p>
          </div>
          <div class="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold">Real-Time Analytics</h3>
            <p class="mt-4">Gain insights from real-time market data to make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="py-20 bg-blue-50">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">Request Demo Access</h2>
        <p class="text-gray-700 mt-4">Interested in exploring our dashboard? Drop us a message below.</p>
        <form class="mt-8 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" class="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" class="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Message" class="w-full p-3 mb-4 border rounded-lg"></textarea>
          <button type="submit" class="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Send Request
          </button>
        </form>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">About Us</h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
          Tradomator is a dedicated platform for traders looking to automate and refine their trading strategies. Our
          team is committed to providing tools that empower users to maximize returns while minimizing effort.
        </p>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
          With extensive experience in both finance and technology, we aim to make automated trading accessible to
          everyone, from beginners to seasoned pros.
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import bgImage from '~/assets/images/landing-bg.webp';
</script>

<style scoped>
.bg-image {
  background-image: url('/assets/images/landing-bg.webp');
}
</style>
