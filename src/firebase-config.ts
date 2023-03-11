import { initializeApp } from 'firebase/app'
import { getFirestore , collection } from 'firebase/firestore'
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRQRj-ZOWI1KB_sbytjuw2fatFxLduVJA",
    authDomain: "fir-gettingstarted-f7d73.firebaseapp.com",
    projectId: "fir-gettingstarted-f7d73",
    storageBucket: "fir-gettingstarted-f7d73.appspot.com",
    messagingSenderId: "893303177930",
    appId: "1:893303177930:web:ad00914ae0b019b6cdaa33",
    measurementId: "G-M47JVYHXVM"
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const dataBase = getFirestore(app)
const literalCollectionDatabase = collection(dataBase , 'transactions')

export { provider , dataBase , literalCollectionDatabase , app }