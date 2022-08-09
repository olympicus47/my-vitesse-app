// A Vue component that uses the locatiiDBstore to populate a dropdown list of locations.
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue'
import { useLocationsDbStore } from '~/store/locationsDbStore.js'

const locationsRef = useLocationsDbStore()
const { locations, selectedLocation } = storeToRefs(locationsRef)
onUnmounted(() => locationsRef.unsubLocations())
</script>

<template>
  <div v-cloak>
    <select
      v-model="selectedLocation"
      label="Select Location"
      flex flex-col max-w-10rem h-2rem bg-green-50 text-gray-900
    >
      <option selected disabled value="Alege o locatie">
        Alege o Locatie
      </option>

      <option
        v-for="location, indLocation in locations" :key="indLocation" :value="location.LocationId"
        flex flex-col block bg-yellow-50
      >
        <span text-4rem>
          {{ location.LocationName }}
          <p text-xs>
            {{ location.LocationAdress }}
          </p>
        </span>
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
