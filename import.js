const firestoreService = require("firestore-export-import");
const serviceAccount = require("./service-account.json");

const jsonToFirestore = async () => {
  try {
    console.log("Initializing Firebase");
    firestoreService.initializeFirebaseApp(serviceAccount);
    console.log("Firebase Initialized");
    await firestoreService.restore("./users.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
