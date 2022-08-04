<script setup lang="ts">
</script>

<template>
  <main class="p-0 text-center text-gray-700 dark:text-gray-200">
    <StatusBar>
      <ConnectionStatus />
    </StatusBar>
    <br p-0 m-0 text-xs>
    <RouterView />
    <Footer />
  </main>
</template>
