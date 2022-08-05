<script setup lang="ts">
interface Props {
  cardTitle: string
  cardContent: () => string
}
const props = withDefaults(defineProps<Props>(),
  {
    cardTitle: 'Card Title',
    cardContent: () => 'Default Card Content',
  })
</script>

<template props>
  <div
    reset
    container
    mx-auto
    bg-gray-100
    rounded
    max-w-24
    min-w-240px
    min-h-240px
    p-5px
    shadow-lg
  >
    <div text-2xl pt-5px>
      {{ props.cardTitle }}
    </div>
    <div pt-20px>
      <component :is="props.cardContent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
