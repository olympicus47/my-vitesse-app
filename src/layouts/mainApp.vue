<script setup lang="ts">
</script>

<template>
  <main class="p-0 text-center text-gray-700 dark:text-gray-200">
    <StatusBar>
      <ConnectionStatus />
      <router-link
        to="/location-inventory"
        text-20px leading-5
        text-teal-8 dark:text-teal-4 hover:font-900 transition-all-350 hover:skew-x-6
      >
        Inventar / Locatie
      </router-link>
      <SelectLocation />
    </StatusBar>
    <RouterView />
  </main>
</template>
