<!-- eslint-disable no-console -->
<!-- eslint-disable spaced-comment -->
<script setup lang='ts'>
import { Html5Qrcode } from 'html5-qrcode'
import type { Html5QrcodeResult /* , QrcodeErrorCallback, QrcodeSuccessCallback */ } from 'html5-qrcode/esm/core'

//#region reactive scan toggles and results

const codScanat = ref({})
const scannerActiv = ref(false)

let scanner = {} as Html5Qrcode

const qrCodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
  codScanat.value = { decodedText, decodedResult }
}

const startScanner = (scannerInstance: Html5Qrcode) => {
  return scannerInstance.start({ facingMode: 'environment' }, // this param make it so that the scanners prefers back-facing cameras
    { fps: 10, qrbox: { width: 150, height: 150 } }, // this param specifies how often are features decoded and how biq the active area is
    qrCodeSuccessCallback, // what to do with the decode result
    (error) => { console.error(error) }) // what to do on errors
}
const pauseScanner = (scannerInstance: Html5Qrcode) => {
  return scannerInstance.stop().then((ignore: unknown) => console.log(ignore)).catch((ignore: unknown) => console.error(ignore))
}
const destroyScanner = (scannerInstance: Html5Qrcode) => {
  scannerInstance.stop().then(x => null)
}

onMounted(() => { scanner = new Html5Qrcode('reader', /* verbose flag -> */ true) }) // the class needs an html node with the id = first param already mounted to the DOM in order dor its constructor to work
onUnmounted(() => { destroyScanner(scanner) })

watch(scannerActiv, async () => {
  if (scannerActiv.value === true)
    await startScanner(scanner)
  if (scannerActiv.value === false)
    await pauseScanner(scanner)
})

//#endregion
</script>

<template>
  <div bg-red-900 px-auto sm:max-w-20rem container mx-auto place-self-center place-content-center place-items-center>
    <button v-show="scannerActiv === false" btn inline-block @click="scannerActiv = !scannerActiv">
      Scaneaza
    </button>
    <button v-show="scannerActiv === true" btn inline-block @click="scannerActiv = !scannerActiv">
      Opreste Scanarea
    </button>
    <div id="reader" place-content-center place-self-center place-items-center text-gray-100>
      Scanner
    </div>
  </div>
</template>

<style scoped>
</style>
