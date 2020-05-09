const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');
const data = require('./data.json')

const databaseURL = "https://territorio-react.firebaseio.com"

firestoreService.initializeApp(serviceAccount, databaseURL);
firestoreService.restore(data, {geos:["coordenadas"], id:["id"]})