// config/firebaseAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("../config/computech-rodriguezsn-firebase-adminsdk-3erxc-e064960e20.json"); // Ajusta la ruta según donde hayas guardado el archivo

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();

module.exports = { auth };
