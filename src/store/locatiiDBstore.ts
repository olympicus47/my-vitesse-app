import { defineStore } from 'pinia'
import type { DocumentData } from 'firebase/firestore'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from '~/firebase/firebaseApp'

export const useLocatiiDbStore = defineStore('locatiiDbStore', () => {
  const colectionLocatiiRef = collection(db, '/Locatii') // /Locatii is correct
  const queryLocatiiRef = query(colectionLocatiiRef, orderBy('Nume', 'asc')) // query have a docs property which is an array
  const locatii = ref([{ 'Nume': 'Inca nu', 'Adresa Locatie': 'am apucat sa ma conectez la Firestore' }] as Locatie[])
  const locatieSelectata = ref('')
  const unsubLocatii = onSnapshot(queryLocatiiRef, (querySnapshot) => {
    if (querySnapshot) {
      const tempLocatii = querySnapshot.docs.slice().flatMap(doc => doc.data())
      locatii.value = tempLocatii
      // console.error(locatii)
    }
    else {
      locatii.value = [{ 'Nume': 'Firestore', 'Adresa Locatie': 'nu imi raspunde cu Locatii' }]
    }
  })

  return {
    locatii,
    locatieSelectata,
    unsubLocatii,
  }
})

export interface Locatie extends DocumentData {

  'Nume': string
  'Adresa Locatie': string

}
