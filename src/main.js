import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire' 
// おそらくここのコードでエラーが出ていると思われます         
// import firebase from 'firebase'
// 下のコメントアウトしているコードはfirebaseのバージョンが違うことで出るエラーという記事を見つけ追加したコードです
import { initializeApp } from 'firebase/app'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({  
  // 下記の数字はfirebaseから引っ張ってきました`              
  apiKey: "AIzaSyBVX1AbZG4wGqMHVOLj7C1bp_SuTv243Mk",
  authDomain: "whisperer-a9ba0.firebaseapp.com",
  projectId: "whisperer-a9ba0",
  storageBucket: "whisperer-a9ba0.appspot.com",
  messagingSenderId: "776294423029",
  appId: "1:776294423029:web:d809d2ed5456c63bb528bc",
  measurementId: "G-Y3H1KBSE39"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
