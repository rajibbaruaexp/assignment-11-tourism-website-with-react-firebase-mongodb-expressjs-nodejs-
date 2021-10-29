// const firebaseConfig = {
//   apiKey: "AIzaSyBcJlJdtTJ12BjNsBMwTDFsb96lwypgISU",
//   authDomain: "paradise-tours-and-travel.firebaseapp.com",
//   projectId: "paradise-tours-and-travel",
//   storageBucket: "paradise-tours-and-travel.appspot.com",
//   messagingSenderId: "222659747649",
//   appId: "1:222659747649:web:b758c3ef4df9c9f2e00bc0",
// };
// console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
export default firebaseConfig;
