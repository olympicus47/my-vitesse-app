<script setup lang="ts">
// import { onUnmounted } from 'vue' // // //
import { useLocatiiDbStore } from '~/store/locatiiDBstore.js'
const locatiiRef = useLocatiiDbStore()
const locatii = locatiiRef.locatii
// onUnmounted(() => locatiiRef.detachLocatiiDb())
</script>

<template>
  <div bg-yellow-50 w-100>
    <span>1111</span>
    <span v-for="(locatie, index) in locatii" :key="index"> | HELLO | {{ locatie }}</span>
  </div>
</template>

<style scoped>

</style>
