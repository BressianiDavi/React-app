const Rebase = require("re-base");
var firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyDlUYuL0Qo5h7NLMPwBxoGniy9zpYqiLAI",
  authDomain: "company-portfolio-63f13.firebaseapp.com",
  databaseURL: "https://company-portfolio-63f13-default-rtdb.firebaseio.com",
  projectId: "company-portfolio-63f13",
  storageBucket: "company-portfolio-63f13.appspot.com",
  messagingSenderId: "191571735719",
  appId: "1:191571735719:web:9974f6d2c11b8905435782",
  measurementId: "G-SFE3YJXDXZ",
};

const app = firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export default config;