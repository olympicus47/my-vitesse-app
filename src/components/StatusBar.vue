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
  <div m-o p-0 sticky w-full top-0 left-0 z-0 order-first>
    <div
      :id="enTitle(props.containerTitle())" :class="props.bgSwatch()"
    >
      <ul flex flex-row flex-auto basis-auto justify-between p-auto m-auto h-4rem items-center space-x-6 justify-items-stretch px-4>
        <slot />
      </ul>
    </div>
  </div>
</template>
