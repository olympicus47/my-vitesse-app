<script setup lang="ts">
</script>

<template>
  <div m-o p-0 sticky w-full top-0 left-0 z-0 order-first>
    <div bg-stone-200 dark:bg-stone-600>
      <ul flex flex-row flex-auto basis-auto justify-between p-auto m-auto h-4rem items-center space-x-6 justify-items-stretch px-4>
        <slot />
      </ul>
    </div>
  </div>
</template>
