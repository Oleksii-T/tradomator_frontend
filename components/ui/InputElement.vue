<template>
  <div class="flex flex-col relative">
    <img v-if="icon" class="w-[24px] h-[24px] absolute left-3 top-2.5" src="~/assets/images/icons/search.svg" />
    <label v-if="label" :for="type" class="text-h p3 mb-[8px]">{{ label }}</label>
    <input
      :maxlength="maxLength || 500"
      :min="props.min"
      :max="max"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder ?? 'Type...'"
      :value="modelValue"
      :class="[
        error?.[0] ? ' border-red-500' : 'border-txt',
        disabled ? '!bg-gray-200 !border-stroke !text-[#68568B] cursor-not-allowed' : '',
        icon ? 'pl-[45px]' : '',
        'py-[12px] px-[16px] h-[44px] p4 border rounded-[100px] bg-white color-txt focus:outline-none',
      ]"
      @change="updateInput"
    />
    <span class="text-red-500 p4 mt-[8px] break-all">{{ error ? error?.[0] : errorFront }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  modelValue: string | number | undefined;
  type: string;
  label?: string;
  placeholder?: string;
  error?: string[];
  errorFront?: string;
  disabled?: boolean;
  icon?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>
