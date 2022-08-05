<script setup lang="ts">
interface Props {
  btnText: string | 'Button'
}
const props = withDefaults(defineProps<Props>(), { btnText: 'Button' })
</script>

<template props>
  <button
    lg:rounded
    lg:py-2
    lg:px-3
    py-1
    px-2
    bg-emerald
    text-gray-800
    shadow-lg
    rounded-full
  >
    {{ props.btnText }}
  </button>
</template>
