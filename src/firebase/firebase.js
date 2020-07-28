import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDsWjR4ZNMQCUZp5txJszlwJ9Fj5nrrz-g",
    authDomain: "homelyadmin.firebaseapp.com",
    databaseURL: "https://homelyadmin.firebaseio.com",
    projectId: "homelyadmin",
    storageBucket: "homelyadmin.appspot.com",
    messagingSenderId: "324865457371",
    appId: "1:324865457371:web:fb2b74de2eab774a0660fe",
    measurementId: "G-6X5LR7NKYQ"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Subhadhriti Maikap',
    age: 23,
    location: {
        city: 'Kolkata',
        country: 'India'
    }
});

database.ref('age').set(24);