import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where, getDoc, doc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    const collectionRef = categoryId ? 
    query(collection(db,'products'), where('category', '==', categoryId)) : 
    collection(db, 'products'); 

    getDocs(collectionRef).then(querySnapshot => {
      const products = querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
      });
      resolve(products);
    });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    const docRef = doc(db, 'products', productId);
    getDoc(docRef).then(querySnapshot => {
      const product = {id: querySnapshot.id, ...querySnapshot.data()};
      resolve(product);
    });
  });
};

export const getCategories = () => {
  return new Promise((resolve) => {
    const collectionRef = collection(db, 'categories');
      getDocs(collectionRef).then(querySnapshot => {
        const categories = querySnapshot.docs.map(cat => {
          return {id: cat.id, ...cat.data()};
        });
        resolve(categories);
      });
  });
};

export const getSliderData = () => {
  return new Promise((resolve) => {
    const collectionRef = collection(db, 'sliderData');
    getDocs(collectionRef).then(querySnapshot => {
      const images = querySnapshot.docs.map(i => {
        return {id: i.id, ...i.data()};
      });
      resolve(images);
    });
  });
};

export const addOrder = (objOrder) => {
  return new Promise((resolve) => {
    addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
      resolve(id);
    });
  });
};