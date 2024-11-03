<template>
  <div>
    <button
      :class="`rounded-full  ${type === 'voip' ? 'px-[10px] py-[10px]' : 'px-[10px] py-[10px]'}  ${!props.muted ? 'bg-main' : 'bg-gray-400'}`"
      @click='click'
    >
      <span v-html="icon"/>
    </button>
  </div>
</template>

<script setup>
const props = defineProps(['type', 'icon', 'click', 'width', 'muted'])


const icons = Object.fromEntries(
  Object.entries(import.meta.glob("~/assets/images/icons/*.svg", {as: "raw"})).map(
    ([key, value]) => {
      const filename = key.split("/").pop().split(".").shift();
      return [filename, value];
    }
  )
);
const icon = props.icon && (await icons?.[props.icon]?.());
</script>

