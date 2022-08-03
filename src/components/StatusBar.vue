<script setup lang="ts">
interface Props {
  containerTitle: (containerTitle?: string) => string
  bgSwatch: () => string
}

const props = withDefaults(defineProps<Props>(), {
  containerTitle: () => 'StatusBar',
  bgSwatch: () => 'bg-stone-200',
})
const enTitle = function (containerTitle?: string | unknown) {
  return (title => `${title}-Container`)(typeof (containerTitle) === 'string' ? containerTitle : 'StatusBar')
}
</script>

<template>
  <div m-o p-0 sticky w-full top-0 left-0 z-60 order-first>
    <div
      :id="enTitle(props.containerTitle())" flex flex-auto p-auto m-auto place-content-around place-self-center
      place-items-center h-4rem :class="props.bgSwatch()"
    >
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>
