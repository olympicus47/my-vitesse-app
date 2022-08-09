/* A store for the locations collection. */
import { defineStore } from 'pinia'
import type { DocumentData } from 'firebase/firestore'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from '~/firebase/firebaseApp'

/* A store for the locations collection. */
export const useLocationsDbStore = defineStore('locationsDbStore', () => {
  const colectionLocatiiRef = collection(db, '/Locatii') // /Locatii is correct

  // queries have a docs property which is an array over which we can the map
  const queryLocatiiRef = query(colectionLocatiiRef, orderBy('Nume', 'asc'))

  /* The default value for the locations array. */
  const locations = ref([{ LocationName: '', LocationAddress: '', LocationId: '' }] as Location[])

  /* A reactive variable that is used to store the selected location. */
  const selectedLocation = ref('' as Location['LocationId'])

  /* A subscription to the firestore database. */
  const unsubLocations = onSnapshot(queryLocatiiRef, (querySnapshot) => {
    if (querySnapshot) {
      /* Taking the querySnapshot.docs array and flattening it. */
      const temporaryLocations = querySnapshot.docs.slice().flatMap(doc => ({
        LocationName: doc.data().Nume,
        LocationAddress: doc.data()['Adresa Locatie'],
        LocationId: doc.id,
      }))
      locations.value = temporaryLocations
    }
    else {
      /* The default value for the locations array. */
      locations.value = [{ LocationName: '', LocationAddress: '', LocationId: '' }]
    }
  })

  return {
    locations,
    selectedLocation,
    unsubLocations,
  }
})

/* A type definition for the data that is coming from the database. */
export interface Location extends DocumentData {

  'LocationName': string
  'LocationAddress': string
  'LocationId': string

}
