const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`CI/CD Demo S2 démarrée sur le port ${port} ,
               http://localhost:${port}/api/calcul/ttc?prix=100&tva=20 ,
               http://localhost:${port}/api/calcul/health
    `);
});
