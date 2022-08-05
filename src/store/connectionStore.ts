import { defineStore } from 'pinia'
import { useOnline } from '@vueuse/core'

export const useConnectionStore = defineStore('ConnectionStore', () => {
  const connection = ref('No Connection' as ConnectionState)

  const connectionState = computed(() => connection)

  setInterval(async () => {
    connection.value = await checkConnectionState()
  }, 1000 * 2)

  return { connectionState }
})

export type ConnectionState = 'No Connection' | 'Unconfirmed' | 'Ok'

function isThereInternet() { return useOnline().value ? 'Unconfirmed' as ConnectionState : 'No Connection' as ConnectionState }

async function isThereAuthentication() {
  let auth = 'Unconfirmed' as ConnectionState
  setTimeout(() => {
    // console.warn('Checking Authentication')
  }, 1000 * 1)
  auth = 'Ok' as ConnectionState
  return auth
}

async function checkConnectionState() {
  return (isThereInternet() === 'Unconfirmed') ? await isThereAuthentication() : 'No Connection' as ConnectionState
}
