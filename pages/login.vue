<template>
  <NuxtLayout name="landing">
    <section class="py-20 bg-blue-50">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center">Login</h2>
        <form class="mt-8 max-w-md mx-auto" @submit.prevent="">
          <InputElement
            v-model="formData.username"
            :error="validationErrors?.username"
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
          />
          <InputPasswordElement
            v-model="formData.password"
            :error="validationErrors?.password"
            name="password"
            placeholder="Password"
            label="Password"
            type="password"
          />
          <Button :is-loading="isLoading" class="w-full" @click="login"> Login </Button>
        </form>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import InputPasswordElement from '~/components/ui/InputPasswordElement.vue';
import InputElement from '~/components/ui/InputElement.vue';
import Button from '~/components/ui/button/Button.vue';
import { useUserStore } from '~/store/user';
import { ApiStatusEnum } from '~/constants/api-statuses';
import { useNotificationStore } from '~/store/notification';
import { handleApiError } from '~/helpers/handleApiError';
import type { ILoginFormData } from '~/types/auth-types.ts';
import type { AxiosErrors } from '~/types/axios-types';

useSeoMeta({
  title: 'Staff | Login',
});

const userStore = useUserStore();
const router = useRouter();
const notificationStore = useNotificationStore();
const formData = ref<ILoginFormData>({} as ILoginFormData);
const validationErrors = ref<AxiosErrors>({});
const isLoading = ref<boolean>(false);

const login = async () => {
  isLoading.value = true;

  const { status, error } = await userStore.verifiedStaff(formData.value);

  if (status.value === ApiStatusEnum.SUCCESS) {
    await notificationStore.success('Welcome to Tradomator Platform');
    await router.push({ path: '/dashboard' });
  }

  if (status.value === ApiStatusEnum.ERROR && error.value) {
    const { errors, message } = handleApiError(error.value);
    if (errors) validationErrors.value = errors as AxiosErrors;
    if (message) {
      validationErrors.value.password = [message];
      await notificationStore.error(message);
    }
  }

  isLoading.value = false;
};
</script>

<style scoped></style>
