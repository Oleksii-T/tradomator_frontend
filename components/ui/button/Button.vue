<template>
  <Primitive
    :as="as"
    :class="
      cn(
        buttonVariants({ variant, size }),
        props.class,
        { 'opacity-50 cursor-not-allowed': isDisabled },
        'whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 main-btn btn rounded-[100px] flex justify-center items-center h-13 px-4 py-2 mt-27 xl:mt-40'
      )
    "
    :disabled="isDisabled"
    type="button"
  >
    <template v-if="isLoading">
      <ReloadIcon class="w-4 h-4 mr-2 animate-spin" />
      <p class="p3">{{ loadingText }}</p>
    </template>
    <template v-else>
      <slot />
    </template>
  </Primitive>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import { type ButtonVariants, buttonVariants } from '.';
import { cn } from '@/lib/utils';
import { ReloadIcon } from '@radix-icons/vue';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  isLoading?: boolean;
  disabled?: boolean;
  loadingText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  isLoading: false,
  disabled: false,
  loadingText: 'Loading...',
});

const isDisabled = computed(() => props.disabled || props.isLoading);
</script>
