<template>
  <!-- Header -->
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <NuxtLink to="/">
        <h1 class="text-xl font-bold">Tradomator</h1>
      </NuxtLink>
      <NuxtLink to="/login" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Dashboard</NuxtLink>
    </div>
  </header>

  <slot />

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
      <p>&copy; 2023 Tradomator. All rights reserved.</p>
      <div class="flex justify-center space-x-6 mt-4">
        <a href="#" class="hover:text-gray-400">Privacy Policy</a>
        <a href="#" class="hover:text-gray-400">Terms of Service</a>
        <a href="#" class="hover:text-gray-400">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
