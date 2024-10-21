const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();

module.exports = {
  // This adapter doesn't actually implement the full datastore interface
  // It's a simplified version to get you started
  
  find: async function(collection, criteria) {
    const snapshot = await db.collection(collection).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  create: async function(collection, values) {
    const docRef = await db.collection(collection).add(values);
    const doc = await docRef.get();
    return { id: doc.id, ...doc.data() };
  },

  update: async function(collection, criteria, values) {
    // This is a simplified update that assumes criteria.id exists
    await db.collection(collection).doc(criteria.id).update(values);
    const doc = await db.collection(collection).doc(criteria.id).get();
    return { id: doc.id, ...doc.data() };
  },

  destroy: async function(collection, criteria) {
    // This is a simplified destroy that assumes criteria.id exists
    await db.collection(collection).doc(criteria.id).delete();
    return true;
  },
};
