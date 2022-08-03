<script setup lang="ts">
import { Connect } from 'vite'

type ConnectionState = 'No Connection' | 'Unconfirmed' | 'Ok'
/*
const determineConnectionState = () => {}

TODO: implement a way to check for internet connection and if the user is logged in

*/

const checkNetworkStatus = async () => {
  try {
    function timeout(ms: any) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function sleep(fn: any, ms: number, ...args: any[]): any {
      await timeout(ms)
      return fn(...args)
    }
    const online = sleep(fetch, 2000, 'https://code.jquery.com/jquery-1.12.4.min.js')
    return online.status ? (online.status >= 200 && online.status < 300) : false // either true or false
  }
  catch (err) {
    return false // definitely offline
  }
}

const currentNetworkStatus = ref({ state: false })

setInterval(async () => {
  currentNetworkStatus.value.state = await checkNetworkStatus()
  console.warn(currentNetworkStatus.value.state)
}, 2000)

const determineConnectionState = (connectionState?: number): ConnectionState => {
  const state: number = typeof (connectionState) === 'number' ? connectionState : Math.random()

  if (!currentNetworkStatus.value.state)
    return 'No Connection'
  if (state <= 0.5)
    return 'Ok'
  if (state > 0.5)
    return 'Unconfirmed'
  return 'No Connection'
}

const currentConnectionState = ref({ state: 'No Connection' })

setInterval(() => {
  currentConnectionState.value.state = determineConnectionState()
}, 3000)
</script>

<template :componentTitle>
  <li z-1 text-4xl self-center flex justify-between>
    <div i-carbon:content-delivery-network text-blue place-self-auto order-first text-4xl />
    <span w-2rem />
    <div v-show="currentConnectionState.state === 'Ok'" text-4xl inline-block i-carbon:checkmark-filled text-green />
    <div
      v-show="currentConnectionState.state === 'Unconfirmed'" text-4xl inline-block i-carbon:warning-filled
      text-yellow
    />
    <div
      v-show="currentConnectionState.state === 'No Connection'" text-4xl inline-block i-carbon:error-filled
      text-red
    />
  </li>
</template>
