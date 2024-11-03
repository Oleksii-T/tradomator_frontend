<template>
  <div class="bg-gray-50 dark:bg-gray-800">
    <Nav />
    <div class="flex overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-[100vh]">
      <Sidebar />
      <div
        id="main-content"
        class="px-[16px] pt-[87px] flex flex-col justify-between relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-[100vh]"
      >
        <main>
          <slot />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from '~/components/dashboard/Nav.vue';
import Sidebar from '~/components/dashboard/Sidebar.vue';
import Footer from '~/components/dashboard/Footer.vue';
</script>
