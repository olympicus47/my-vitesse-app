<script setup lang="ts">
</script>

<template>
  <main class="p-0 text-center text-gray-700 dark:text-gray-200">
    <StatusBar>
      <ConnectionStatus />
      <SelectLocatie />
    </StatusBar>
    <RouterView />
  </main>
</template>
