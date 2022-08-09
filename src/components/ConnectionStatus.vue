<script setup lang="ts">
import { useConnectionStore } from '../store/connectionStore'

const connectionStore = useConnectionStore()

const currentConnectionState = connectionStore.connectionState
</script>

<template :componentTitle>
  <li z-1 self-center flex justify-between text-gray-800 dark:text-gray-400>
    <div i-carbon:content-delivery-network text-blue place-self-auto order-first text-4xl />
    <span w-2rem />
    <div v-show="currentConnectionState === 'Ok'" inline-block flex place-items-center>
      <div text-4xl i-carbon:checkmark-filled text-green /> <div w-5px />
      <span place-self-center place-items-center place-content-center text-center> {{ currentConnectionState }} </span>
    </div>
    <div v-show="currentConnectionState === 'Unconfirmed'" inline-block flex place-items-center>
      <div text-4xl i-carbon:warning-filled text-yellow /> <div w-5px />
      <span place-self-center place-items-center place-content-center text-center> {{ currentConnectionState }} </span>
    </div>
    <div v-show="currentConnectionState === 'No Connection'" inline-block flex place-items-center>
      <div
        text-4xl i-carbon:error-filled
        text-red
      /> <div w-5px />
      <span place-self-center place-items-center place-content-center text-center> {{ currentConnectionState }} </span>
    </div>
  </li>
</template>
