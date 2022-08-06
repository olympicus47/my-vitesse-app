<script setup lang="ts">
import { storeToRefs } from 'pinia'
// import { onUnmounted } from 'vue' // // //
import { useLocatiiDbStore } from '~/store/locatiiDBstore.js'
const locatiiRef = useLocatiiDbStore()
const { locatii, locatieSelectata } = storeToRefs(locatiiRef)
onUnmounted(() => locatiiRef.unsubLocatii())
</script>

<template>
  <div v-cloak>
    <select v-model="locatieSelectata" flex flex-col max-w-10rem h-2rem bg-green-50>
      <option disabled value="Alege o locatie">
        Alege o Locatie
      </option>
      <option v-for="locatie, indLocatie in locatii" :key="indLocatie" :value="locatie.Nume" flex flex-col block bg-yellow-50>
        <span text-4rem>
          {{ locatie.Nume }}
          <p text-xs>
            {{ locatie['Adresa Locatie'] }}
          </p>
        </span>
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
