import * as firebase from 'firebase/app';
import 'firebase/firebase-database';

const firebaseConfig = {
  apiKey: 'AIzaSyD7_hEtXr4Qn6Usa1BqIvJI8bsmw5Lxd0I',
  authDomain: 'expense-app-demo.firebaseapp.com',
  databaseURL: 'https://expense-app-demo.firebaseio.com',
  projectId: 'expense-app-demo',
  storageBucket: 'expense-app-demo.appspot.com',
  messagingSenderId: '638506210471',
  appId: '1:638506210471:web:99e4531dfa94401d64f782',
  measurementId: 'G-E7X8M8W4FH'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 12500,
  createdAt: 0
});
database.ref('expenses').push({
  description: 'Phone Bill',
  note: '',
  amount: 5900,
  createdAt: 0
});
database.ref('expenses').push({
  description: 'Electric',
  note: '',
  amount: 8000,
  createdAt: 0
});

// database.ref('notes/-M8_vADz1xJQkRZv931b').remove() ;

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'react native, angular, python'
// });

// set up data sub -> Andrew is a Software Developer at Amazon.
// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Robert Kogami',
//     age: 35,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Honolulu',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch(err => {
//     console.log('error: ', err);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data was removed');
//   })
//   .catch(e => {
//     console.log('error: ', e.message);
//   });
