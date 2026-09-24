function addition(a, b) {
  return a + b;
  // return a + b;
}

function calculerTTC(prixHT, tauxTVA) {
  if (!Number.isFinite(prixHT) || !Number.isFinite(tauxTVA)) {
    throw new TypeError("prixHT et tauxTVA doivent être des nombres");
  }

  if (prixHT < 0 || tauxTVA < 0) {
    throw new RangeError("prixHT et tauxTVA doivent être positifs");
  }

  return Number((prixHT * (1 + tauxTVA / 120)).toFixed(2));
}

module.exports = { addition, calculerTTC };
