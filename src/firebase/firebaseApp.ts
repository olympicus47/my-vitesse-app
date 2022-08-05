import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: 'AIzaSyDJKB6nnliw51Cf3wvlUUZEf2NDoMDGu1s',
  authDomain: 'test-db-for-inventar-isla.firebaseapp.com',
  projectId: 'test-db-for-inventar-isla',
  storageBucket: 'test-db-for-inventar-isla.appspot.com',
  messagingSenderId: '821131748722',
  appId: '1:821131748722:web:f7a48a016e110f4038a9eb',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

