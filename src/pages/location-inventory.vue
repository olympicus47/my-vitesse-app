<script setup lang="ts">
import { storeToRefs } from 'pinia'
// import { useLocationsDbStore } from '../store/locationsDbStore'
import { useProductsDbStore } from '../store/productsDbStore'

// const currentLocation = storeToRefs(useLocationsDbStore()).selectedLocation
const productsRef = useProductsDbStore()
const products = storeToRefs(productsRef).products
const location = storeToRefs(productsRef).location

watch(location, () => productsRef.getProductsOnce())
</script>

<template>
  <div>
    <h1>salut</h1>
    <!-- <ScannerComponent /> -->
    <li v-for="product in products" :key="product.ProductName">
      {{ product }}
    </li>
  </div>
</template>

<route lang="yaml">
meta:
  layout: mainApp
</route>
