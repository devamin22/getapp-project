//import { initializeApp } from "firebase/compat/app";
/* 앱 초기화를 위한 import */
import { getFirestore } from "firebase/firestore";
/* 데이터베이스(firestore) 사용을 위한 import */


import { initializeApp } from "firebase/app"




const firebaseConfig = {
    apiKey: "AIzaSyCld_E9N3A3Y8TY2RMhAxtHcUow55Dt7O0",
    authDomain: "getapp-27ed9.firebaseapp.com",
    projectId: "getapp-27ed9",
    storageBucket: "getapp-27ed9.appspot.com",
    messagingSenderId: "351375967147",
    appId: "1:351375967147:web:eb1ec3e43096667b8188ee"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



//export const firebase_db = firebase.database();
//export const db = getFirestore(app)
/* 이제 다른 js 파일에서 firestore db를 불러올 수 있다 */