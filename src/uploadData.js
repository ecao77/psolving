{/* one timer */}

const { collection, addDoc } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const readline = require('readline');
const fs = require('fs');

// Import your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf_79zC32PO18MwWYPMa5ZaWb_ANV6XR4",
    authDomain: "psidb-b0d89.firebaseapp.com",
    projectId: "psidb-b0d89",
    storageBucket: "psidb-b0d89.appspot.com",
    messagingSenderId: "146054594109",
    appId: "1:146054594109:web:774b663999c720e907b454",
    measurementId: "G-50PDEFHR9B"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Specify the path to your JSONL file and Firestore collection name
const jsonlFilePath = 'test.jsonl'; // Update with the correct file path
const firestoreCollectionName = 'problems'; // Update with the Firestore collection name

let documentNumber = 1;

// Function to upload data from a JSONL file
async function uploadDataFromJsonlFile(filePath, collectionName) {
    try {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
      // Parse each line as a JSON object
        const data = JSON.parse(line);

        const id = `q0000${documentNumber}`.slice(-4);
        const documentData = {
            id, // Add your other data fields here
            ...data, // Merge the parsed data into the object
        };

        await addDoc(collection(db, collectionName), documentData);
        documentNumber++;
    }

        console.log('Data uploaded successfully.');
    } catch (error) {
        console.error('Error uploading data:', error);
    }
}

// Call the function to upload data from the JSONL file
uploadDataFromJsonlFile(jsonlFilePath, firestoreCollectionName);
