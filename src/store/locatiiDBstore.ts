import { defineStore } from 'pinia'
import type { DocumentData } from 'firebase/firestore'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '~/firebase/firebaseApp'

export const useLocatiiDbStore = defineStore('locatiiDbStore', () => {
  const dbLocatiiRef = collection(db, '/Locatii') // /Locatii is correct
  const dbLocatiiRef2 = ref(collection(db, '/Locatii'))// /Locatii is correct
  const q = query(dbLocatiiRef)
  const q2 = ref(query(dbLocatiiRef))
  const locatii = ref([{ data: 'undefined' }] as DocumentData[])
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    try {
      if (typeof querySnapshot !== 'undefined') {
        querySnapshot.forEach((docInSnapshot) => {
          locatii.value.push(docInSnapshot.data())
        })
      }
      else {
        locatii.value.push({ data: 'undefined' })
      }
    }
    catch (err) {
      locatii.value = [{ data: err }]
      console.error(err)
    }
  })

  const uns2 = ref(unsubscribe)

  function detachLocatiiDb() { unsubscribe() }

  return {
    locatii,
    dbLocatiiRef2,
    q2,
    uns2,
    detachLocatiiDb,
  }
})
