import { defineStore } from 'pinia'
import type { DocumentData } from 'firebase/firestore'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from '~/firebase/firebaseApp'

export const useLocatiiDbStore = defineStore('locatiiDbStore', () => {
  const colectionLocatiiRef = collection(db, '/Locatii') // /Locatii is correct
  const queryLocatiiRef = query(colectionLocatiiRef, orderBy('Nume', 'asc')) // /Locatii is correct
  const locatii = ref([{ data: 'inca nu am facut nimic' }] as DocumentData[])
  const locatieSelectata = ref('')
  const unsubLocatii = onSnapshot(queryLocatiiRef, (querySnapshot) => {
    if (querySnapshot) {
      const tempLocatii = querySnapshot.docs.slice().flatMap(doc => doc.data())
      locatii.value = tempLocatii
      // console.error(locatii)
    }
    else {
      locatii.value = [{ data: 'nu am putut sa obtin un snapshot' }]
    }
  })

  return {
    locatii,
    locatieSelectata,
    unsubLocatii,
  }
})
