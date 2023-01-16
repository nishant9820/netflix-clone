import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpoHdfaqYgF354mypn4tEBJ2SSfQVaFoo",
    authDomain: "netflix-4b84b.firebaseapp.com",
    projectId: "netflix-4b84b",
    storageBucket: "netflix-4b84b.appspot.com",
    messagingSenderId: "556058471696",
    appId: "1:556058471696:web:c756888942ecf6cf8fc995",
    measurementId: "G-XLH8KKJP4C"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }