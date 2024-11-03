<template>
  <div class="global-wrapper w-full max-w-[1920px] mx-auto px-6 pt-6 min-h-[100vh] relative">
    <div class="w-full sticky top-0 z-20 js-header">
      <HeaderElement />
    </div>
    <div class="flex justify-center">
      <Sidebar :isDesktop="true" class="hidden lg:flex lg:flex-col sticky top-[6rem] z-9" />
      <div class="flex flex-col w-full overflow-x-auto !z-1">
        <!--        <PageHeader v-if="headerTitle" :header-title="headerTitle" />-->
        <WrapperPageContent :heading="title">
          <slot />
        </WrapperPageContent>
      </div>
    </div>
  </div>
  <LoaderElement v-if="isLoader.$state?.visible" />
</template>

<script setup lang="ts">
import Sidebar from '~/components/dashboard/sidebar/Sidebar.vue';
import LoaderElement from '~/components/ui/AppLoader.vue';
import { useLoaderStore } from '~/store/loader';

interface Props {
  title: string;
  headerTitle?: string;
  timezone?: string;
}

const props = defineProps<Props>();
const isLoader = useLoaderStore();
const loaderStore = useLoaderStore();

onMounted(async () => {
  await loaderStore.hideLoader();
  if (import.meta.client && 'Notification' in window) {
    // await requestNotificationPermission()
  }
});
</script>
