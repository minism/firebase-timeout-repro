const firebase = require("firebase");
const process = require("process");

firebase.initializeApp({
  apiKey: process.env.API_KEY,
});

async function main() {
  const user = await firebase.auth().signInAnonymously();
  const fn = firebase.functions().httpsCallable("missing");
  console.time("request");
  await fn({});
}

main()
  .then((_) => {
    console.log("Success");
    console.timeEnd("request");
  })
  .catch((error) => {
    console.error("Got an error");
    console.error(error);
    console.timeEnd("request");
  });
