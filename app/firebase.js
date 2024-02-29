// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js" 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

import {getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, updateDoc, getDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7iUKijwix0rZChPQcTpLN89lwL5XBtGU",
  authDomain: "prueba-pagina-web1-6adc6.firebaseapp.com",
  projectId: "prueba-pagina-web1-6adc6",
  storageBucket: "prueba-pagina-web1-6adc6.appspot.com",
  messagingSenderId: "770577114655",
  appId: "1:770577114655:web:51b9ae7cb0948c34fa172a",
  measurementId: "G-VW6TVDL46D"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//export const analytics = getAnalytics(app);

//CRUD

export const db = getFirestore();

export function guardarTarea(titulo, descripcion, email,fechaCreacion) {
  addDoc(collection(db, "tareas"), { titulo, descripcion, email,fechaCreacion });
}

export function obtenerTareas() {
  return getDocs(collection(db, 'tareas'));
}

export function actualizarObtenerTareas(callback) {
  return onSnapshot(collection(db, "tareas"), callback);
}

export function eliminarTarea(id) {
  return deleteDoc(doc(db, "tareas", id));
}

export function obtenerTarea(id) {
  return getDoc(doc(db, "tareas", id));
}

export function actualizarTarea(id, nuevosCampos) {
  return updateDoc(doc(db, "tareas", id), nuevosCampos);
}