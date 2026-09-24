const express = require("express");
const { calculerTTC } = require("./services/calculator");

const app = express();
app.use(express.json());

const x = 100

app.get("/", (req, res) => {
  res.json({
    application: "CI/CD Demo S2",
    message: "API prête pour le pipeline CI"
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/api/calcul/ttc", (req, res) => {
  const prix = Number(req.query.prix);
  const tva = Number(req.query.tva);

  if (!Number.isFinite(prix) || !Number.isFinite(tva)) {
    return res.status(400).json({
      error: "Les paramètres prix et tva doivent être numériques"
    });
  }

  try {
    const prixTTC = calculerTTC(prix, tva);
    return res.json({ prixHT: prix, tva, prixTTC });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = app;
